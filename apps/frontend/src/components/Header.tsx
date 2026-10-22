import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="masthead container">
    <a className="wordmark" href="#inicio" aria-label="Beatriz, início">beatriz<span>FISIOTERAPIA & PILATES</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Fechar −' : 'Menu +'}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal" onClick={() => setOpen(false)}>
      <a href="#sobre">Sobre mim</a><a href="#servicos">Atendimentos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a>
      <a className="nav-contact" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
