import { useEffect, useRef } from 'react';
import { Header } from './Header';
import { HeroSection, IntroductionSection } from './Sections';
import { SunlightScene } from './SunlightScene';
import './hero.css';

export function HeroExperience() {
  const sceneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = sceneRef.current!;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    function update() {
      frame = 0;
      const height = window.innerHeight;
      const distance = -scene.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, distance / (height * .9)));
      const expansion = Math.max(0, Math.min(1, distance / (height * .8)));
      const smooth = expansion * expansion * (3 - 2 * expansion);
      scene.style.setProperty('--hero-lift', `${reducedMotion.matches ? 0 : -progress * 65}px`);
      scene.style.setProperty('--hero-opacity', `${reducedMotion.matches ? 1 : 1 - progress * .85}`);
      scene.style.setProperty('--panel-inset', `${reducedMotion.matches ? 0 : (1 - smooth) * 6}%`);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    reducedMotion.addEventListener('change', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', schedule);
    };
  }, []);

  return <div className="hero-experience" ref={sceneRef}>
    <SunlightScene />
    <div className="hero-navigation"><Header /></div>
    <HeroSection />
    <div className="intro-reveal"><div className="intro-reveal-paper"><IntroductionSection /></div></div>
  </div>;
}
