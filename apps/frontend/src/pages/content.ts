import type { Plan, Service } from '../types/content';

export const services: Service[] = [
  { id: 'fisioterapia', title: 'Fisioterapia domiciliar', paragraphs: ['Um acompanhamento voltado às suas necessidades de movimento e funcionalidade, com avaliação, orientações e condutas individualizadas.', 'O atendimento pode envolver exercícios terapêuticos, mobilidade e reabilitação funcional, conforme a avaliação profissional.'], cta: 'Conhecer o atendimento', message: 'Olá, Beatriz! Gostaria de saber mais sobre a fisioterapia domiciliar.' },
  { id: 'pilates', title: 'Pilates domiciliar', paragraphs: ['Uma prática orientada que trabalha força, flexibilidade, controle corporal e consciência do movimento, com exercícios adaptados às suas possibilidades e objetivos.', 'Tudo isso com a praticidade de realizar suas sessões em casa, sem deslocamentos.'], cta: 'Conhecer o Pilates', message: 'Olá, Beatriz! Gostaria de saber mais sobre o Pilates domiciliar.' },
];
export const plans: Plan[] = [
  { name: 'Essencial', duration: '1 mês', subtitle: 'Para começar sua jornada de cuidado.', description: 'Um primeiro período de acompanhamento para conhecer a proposta, estabelecer objetivos e iniciar as atividades orientadas.', items: ['Avaliação inicial', 'Plano individualizado', 'Sessões domiciliares durante 1 mês', 'Orientações de continuidade'], cta: 'Consultar valores e disponibilidade', message: 'Olá, Beatriz! Gostaria de conhecer o plano de 1 mês e consultar valores.' },
  { name: 'Evolução', duration: '2 meses', subtitle: 'Para construir consistência no cuidado.', description: 'Um acompanhamento com mais tempo para desenvolver uma rotina de exercícios e adaptar as atividades à sua evolução.', items: ['Avaliação inicial', 'Plano individualizado', 'Sessões domiciliares durante 2 meses', 'Acompanhamento e ajustes do plano', 'Reavaliação ao longo do período'], cta: 'Conhecer o plano', message: 'Olá, Beatriz! Gostaria de conhecer o plano de 2 meses.' },
  { name: 'Continuidade', duration: '3 meses', subtitle: 'Para dar continuidade à sua jornada.', description: 'Um período ampliado de acompanhamento, com revisões e orientações para manter uma rotina de cuidado adaptada às suas necessidades.', items: ['Avaliação inicial', 'Plano individualizado', 'Sessões domiciliares durante 3 meses', 'Acompanhamento e reavaliações periódicas', 'Orientações ao final do plano'], cta: 'Solicitar proposta personalizada', message: 'Olá, Beatriz! Gostaria de conhecer o plano de acompanhamento de 3 meses.' },
];
export const steps = [
  ['Vamos conversar', 'Entre em contato pelo WhatsApp para conhecer os atendimentos e consultar a disponibilidade na sua região.'],
  ['Sua avaliação', 'A Beatriz conhece suas necessidades, seus objetivos e as condições para realizar o atendimento.'],
  ['Seu plano de cuidado', 'Com base na avaliação, são definidas as atividades, a frequência e a proposta de acompanhamento.'],
  ['Cuidado na sua casa', 'As sessões acontecem no endereço combinado, com acompanhamento e orientações ao longo do processo.'],
];
export const questions = [
  ['Como funciona a fisioterapia domiciliar?', 'A profissional realiza o atendimento no endereço combinado, com avaliação e condutas adaptadas às necessidades de cada paciente.'],
  ['Preciso ter equipamentos de Pilates em casa?', 'Os materiais necessários dependem da modalidade de Pilates oferecida e da proposta de cada sessão. A Beatriz poderá orientar você antes de iniciar.'],
  ['Posso contratar um plano de 1, 2 ou 3 meses?', 'Essas são as durações propostas para os planos. A frequência das sessões, os valores e as condições são definidos no contato e, quando necessário, após avaliação.'],
  ['Quantas sessões por semana são recomendadas?', 'A frequência depende dos objetivos, da avaliação e das necessidades de cada pessoa.'],
  ['A Beatriz atende em toda Cotia?', 'O atendimento é direcionado a Cotia, com cobertura de bairros e horários sujeita à confirmação.'],
  ['Como faço para agendar?', 'Basta entrar em contato pelo WhatsApp para consultar disponibilidade, valores e orientações para o primeiro atendimento.'],
];
