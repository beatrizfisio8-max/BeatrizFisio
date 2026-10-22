import { HeroExperience } from '../components/HeroExperience';
import { AboutSection, ContactSection, FaqSection, LocationSection, PlansSection, ProcessSection, ServicesSection } from '../components/Sections';

export function HomePage() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><main id="conteudo"><HeroExperience />
    <AboutSection /><ServicesSection /><PlansSection /><ProcessSection /><LocationSection /><FaqSection /><ContactSection /></main>
    <footer className="container footer"><a className="wordmark" href="#inicio">beatriz<span>FISIOTERAPIA & PILATES</span></a><p>Cuidado, movimento e bem-estar.<br />Cotia, São Paulo.</p><a href="#inicio">Voltar ao início ↑</a><span className="copyright">© {new Date().getFullYear()} Beatriz</span></footer>
  </>;
}
