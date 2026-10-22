import { useEffect, useRef } from 'react';

interface LightLayer {
  image: HTMLCanvasElement;
  depthX: number;
  depthY: number;
  response: number;
  opacity: number;
  phase: number;
  glow: boolean;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
}

// Exact critically damped spring: consistent inertia at different frame rates.
function follow(position: number, velocity: number, target: number, response: number, dt: number) {
  const omega = 2 / response;
  const offset = position - target;
  const impulse = velocity + omega * offset;
  const decay = Math.exp(-omega * dt);
  return [(offset + impulse * dt) * decay + target, (velocity - omega * impulse * dt) * decay];
}

export function SunlightScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d');
    if (!context) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const padding = 320;
    let width = 0, height = 0, frame = 0;
    let visible = true;
    let pointerX = 0, pointerY = 0, lastTime = 0, elapsed = 0;
    let layers: LightLayer[] = [];
    let base: CanvasGradient;
    let veil: CanvasGradient;

    function makeLayer(index: number): LightLayer {
      const settings = [
        { depthX: -42, depthY: -26, response: 1.2, opacity: .24, blur: 62, count: 14, glow: false },
        { depthX: 115, depthY: 72, response: .75, opacity: .4, blur: 20, count: 47, glow: false },
        { depthX: 225, depthY: 135, response: .48, opacity: .36, blur: 9, count: 38, glow: false },
        { depthX: -145, depthY: -88, response: .95, opacity: .34, blur: 28, count: 26, glow: true },
      ][index];
      const image = document.createElement('canvas');
      const shapes = document.createElement('canvas');
      image.width = shapes.width = Math.ceil(width + padding * 2);
      image.height = shapes.height = Math.ceil(height + padding * 2);
      const ctx = shapes.getContext('2d')!;
      let seed = 731 + index * 1921;
      const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      const scale = Math.max(width / 1440, height / 1000);
      // Irregular pools of light/shadow rather than literal branches.
      ctx.fillStyle = settings.glow ? '#ffd0a0' : '#94576d';
      for (let n = 0; n < settings.count; n++) {
        const cx = padding + width * (.23 + random() * .95);
        const cy = padding + height * (-.35 + random() * 1.65);
        const length = (index === 0 ? 260 + random() * 350 : 70 + random() * 180) * scale;
        const breadth = length * (.14 + random() * .18);
        const bend = (random() - .5) * breadth;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-.78 + (random() - .5) * .65);
        ctx.beginPath();
        ctx.moveTo(-length * .55, bend);
        ctx.bezierCurveTo(-length * .4, -breadth * .9, length * .23, -breadth, length * .55, -bend);
        ctx.bezierCurveTo(length * .36, breadth * .7, -length * .2, breadth, -length * .55, bend);
        ctx.fill();
        ctx.restore();
      }
      const cached = image.getContext('2d')!;
      cached.filter = `blur(${Math.max(6, settings.blur * scale)}px)`;
      cached.drawImage(shapes, 0, 0);
      return { image, ...settings, phase: index * 1.7, x: 0, y: 0, velocityX: 0, velocityY: 0 };
    }

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context!.setTransform(ratio, 0, 0, ratio, 0, 0);
      base = context!.createLinearGradient(0, height, width, 0);
      base.addColorStop(0, '#c77f7c');
      base.addColorStop(.42, '#d29186');
      base.addColorStop(1, '#f8b490');
      veil = context!.createLinearGradient(0, height * .7, width, height * .1);
      veil.addColorStop(0, '#bd777ca8');
      veil.addColorStop(.42, '#bd777c50');
      veil.addColorStop(1, '#bd777c00');
      layers = [0, 1, 2, 3].map(makeLayer);
      paint();
    }

    function paint() {
      const ctx = context!;
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);
      for (const layer of layers) {
        const ambient = reducedMotion.matches ? 0 : 1;
        const swayX = Math.sin(elapsed * .19 + layer.phase) * (5 + layer.phase) * ambient;
        const swayY = Math.cos(elapsed * .14 + layer.phase) * 6 * ambient;
        ctx.globalAlpha = layer.opacity;
        ctx.globalCompositeOperation = layer.glow ? 'screen' : 'source-over';
        ctx.drawImage(layer.image, -padding + layer.x + swayX, -padding + layer.y + swayY);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = veil;
      ctx.fillRect(0, 0, width, height);
    }

    function animate(time: number) {
      frame = 0;
      if (!visible || document.hidden || reducedMotion.matches) return;
      const dt = lastTime ? Math.min((time - lastTime) / 1000, .05) : 1 / 60;
      lastTime = time;
      elapsed += dt;
      const travel = Math.min(width / 1100, 1);
      for (const layer of layers) {
        [layer.x, layer.velocityX] = follow(layer.x, layer.velocityX, pointerX * layer.depthX * travel, layer.response, dt);
        [layer.y, layer.velocityY] = follow(layer.y, layer.velocityY, pointerY * layer.depthY * travel, layer.response, dt);
      }
      paint();
      frame = requestAnimationFrame(animate);
    }

    function stop() { cancelAnimationFrame(frame); frame = 0; lastTime = 0; }
    function start() {
      if (!frame && visible && !document.hidden && !reducedMotion.matches) {
        lastTime = 0;
        frame = requestAnimationFrame(animate);
      }
    }
    const scene = canvas.closest('.hero-experience')!;
    function move(event: PointerEvent) {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    }
    function reset() { pointerX = pointerY = 0; }
    function visibilityChanged() { if (document.hidden) { reset(); stop(); } else start(); }
    function preferenceChanged() {
      stop();
      reset();
      elapsed = 0;
      for (const layer of layers) layer.x = layer.y = layer.velocityX = layer.velocityY = 0;
      paint();
      start();
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else { reset(); stop(); }
    });
    observer.observe(canvas);
    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(canvas);
    scene.addEventListener('pointermove', move as EventListener, { passive: true });
    scene.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    document.addEventListener('visibilitychange', visibilityChanged);
    reducedMotion.addEventListener('change', preferenceChanged);
    finePointer.addEventListener('change', reset);
    resize();
    start();
    return () => {
      stop();
      observer.disconnect();
      sizeObserver.disconnect();
      scene.removeEventListener('pointermove', move as EventListener);
      scene.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      document.removeEventListener('visibilitychange', visibilityChanged);
      reducedMotion.removeEventListener('change', preferenceChanged);
      finePointer.removeEventListener('change', reset);
    };
  }, []);

  return <div className="sunlight-backdrop" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
