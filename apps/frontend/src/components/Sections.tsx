import { ContactLink } from './ContactLink';
import { SectionHeading } from './SectionHeading';
import { plans, questions, services, steps } from '../pages/content';
import { isWhatsAppConfigured } from '../services/whatsapp';

export function HeroSection() {
  return <section id="inicio" className="hero container" aria-labelledby="hero-heading"><div className="hero-composition">
    <span className="eyebrow">FISIOTERAPIA & PILATES · COTIA, SP</span>
    <h1 id="hero-heading"><span>O cuidado que você precisa.</span><em>No conforto da sua casa.</em></h1>
    <p className="hero-description">Fisioterapia e Pilates com atenção individualizada, respeitando seu corpo, seus objetivos e seu ritmo — sem precisar sair de casa.</p>
    <ContactLink className="pill" source="hero" message="Olá, Beatriz! Gostaria de agendar minha avaliação e consultar a disponibilidade.">Agendar minha avaliação</ContactLink>
    <span className="hero-note">Atendimento em Cotia e região, mediante disponibilidade.</span>
  </div>
    <div className="hero-bottom"><span>CUIDADO INDIVIDUAL. NO SEU TEMPO.</span><a href="#cuidado">Conheça o atendimento <span aria-hidden="true">↓</span></a></div>
  </section>;
}

export function IntroductionSection() {
  return <section id="cuidado" className="introduction section container">
    <SectionHeading eyebrow="MOVIMENTO É QUALIDADE DE VIDA">Mais movimento.<br />Mais autonomia. <em>Mais você.</em></SectionHeading>
    <div className="introduction-copy"><p>Entre os compromissos da rotina, encontrar tempo para cuidar de si pode ser um desafio. E quando surgem dores, desconfortos ou dificuldades de movimento, até as atividades mais simples podem exigir um esforço maior.</p><p>Com atendimento domiciliar, o cuidado acontece em um ambiente familiar, com acompanhamento individualizado e orientações adaptadas às suas necessidades.</p><p className="closing-thought">Porque cuidar do seu corpo não precisa ser mais uma dificuldade no seu dia.</p></div>
  </section>;
}

export function AboutSection() {
  return <section id="sobre" className="about-section"><div className="container section about-grid">
    <div><span className="eyebrow">POR TRÁS DE CADA ATENDIMENTO,<br />EXISTE UMA PESSOA</span><h2>Cuidar é,<br />antes de tudo,<br /><em>escutar.</em></h2></div>
    <div className="about-copy"><span className="eyebrow">CONHEÇA A BEATRIZ</span><h3>Olá, sou Beatriz.</h3><p>Acredito que cada pessoa merece um cuidado que considere sua história, seus limites e seus objetivos.</p><p>Meu propósito é tornar a fisioterapia e o Pilates mais acessíveis à sua rotina, levando atenção, acolhimento e orientação profissional até sua casa.</p><p>Mais do que trabalhar o movimento, quero ajudar você a construir uma relação de cuidado e confiança com o próprio corpo.</p><a className="text-link" href="#como-funciona">Conheça minha forma de cuidar <span aria-hidden="true">↗</span></a></div>
  </div></section>;
}

export function ServicesSection() {
  return <section id="servicos" className="section container services-section">
    <SectionHeading eyebrow="O QUE POSSO FAZER POR VOCÊ" description="Conheça as possibilidades de atendimento individualizado, realizadas no conforto da sua casa.">Duas formas de cuidar.<br />Um propósito: <em>seu bem-estar.</em></SectionHeading>
    <div className="services-grid">{services.map((service, index) => <article className="service" key={service.id}><span className="eyebrow">0{index + 1} / ATENDIMENTO INDIVIDUALIZADO</span><h3>{service.title}</h3>{service.paragraphs.map(p => <p key={p}>{p}</p>)}<ContactLink source={service.id} message={service.message}>{service.cta}</ContactLink></article>)}</div>
  </section>;
}

export function PlansSection() {
  return <section id="planos" className="section plans-section"><div className="container">
    <SectionHeading eyebrow="PLANOS DE ACOMPANHAMENTO" description="Escolha a duração do acompanhamento que melhor se encaixa na sua rotina. Os planos podem ser adaptados às suas necessidades e aos objetivos definidos na avaliação.">Seu tempo. Seu ritmo.<br /><em>Seu cuidado.</em></SectionHeading>
    <p className="plans-notice">Propostas de acompanhamento sujeitas à confirmação. Frequência, sessões, valores e condições serão definidos no contato e na avaliação.</p>
    <div className="plans-grid">{plans.map((plan, i) => <article className="plan" key={plan.name}><span className="eyebrow">0{i + 1} / {plan.name.toLocaleUpperCase('pt-BR')}</span><h3>{plan.duration}</h3><p className="plan-subtitle">{plan.subtitle}</p><p>{plan.description}</p><ul>{plan.items.map(item => <li key={item}>{item}</li>)}</ul><ContactLink message={plan.message} source={`plano-${i + 1}`}>{plan.cta}</ContactLink></article>)}</div>
    <p className="plan-footnote">A duração do acompanhamento não determina a indicação clínica ou o número de sessões.</p>
  </div></section>;
}

export function ProcessSection() {
  return <section id="como-funciona" className="section container process-section">
    <SectionHeading eyebrow="DO PRIMEIRO CONTATO AO SEU ACOMPANHAMENTO" description="Um processo simples, acolhedor e pensado para facilitar sua experiência.">O primeiro passo é <em>começar.</em></SectionHeading>
    <ol className="steps">{steps.map(([title, text], i) => <li key={title}><span className="step-number" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
  </section>;
}

export function LocationSection() {
  return <section id="localizacao" className="location-section"><div className="container section location-grid"><SectionHeading eyebrow="ONDE O CUIDADO ACONTECE">Mais perto de você.<br /><em>Na sua casa.</em></SectionHeading><div><span className="location-label">COTIA, SÃO PAULO</span><p>Atendimento domiciliar de Fisioterapia e Pilates em Cotia, São Paulo, com horários e deslocamentos organizados conforme a disponibilidade.</p><p>Entre em contato para confirmar o atendimento no seu bairro e encontrar um horário que funcione para sua rotina.</p><ContactLink source="localizacao" message="Olá, Beatriz! Gostaria de confirmar se você atende no meu bairro em Cotia.">Consultar atendimento na minha região</ContactLink></div></div></section>;
}

export function FaqSection() {
  return <section id="duvidas" className="section container faq-grid"><SectionHeading eyebrow="PERGUNTAS FREQUENTES">Tudo o que você precisa saber antes de <em>começar.</em></SectionHeading><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" className="faq-icon" /></summary><p>{answer}</p></details>)}</div></section>;
}

export function ContactSection() {
  return <section id="contato" className="section contact-section"><div className="container"><SectionHeading eyebrow="SUA JORNADA DE CUIDADO" description="Conheça os atendimentos domiciliares de Fisioterapia e Pilates e descubra como começar sua jornada de cuidado com a Beatriz.">Reserve um tempo para<br /><em>cuidar de você.</em></SectionHeading>
    {isWhatsAppConfigured ? <ContactLink className="pill" source="contato">Conversar com a Beatriz</ContactLink> : <p className="contact-pending" role="status">O contato para agendamento estará disponível em breve.</p>}
    <p className="contact-note">Cotia, São Paulo · Atendimento mediante agendamento.</p>
  </div></section>;
}
