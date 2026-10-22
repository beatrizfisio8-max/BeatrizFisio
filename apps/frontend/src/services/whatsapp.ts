const number = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').trim();
export const isWhatsAppConfigured = /^55\d{10,11}$/.test(number);


export function createWhatsAppLink(message = 'Olá, Beatriz! Conheci seu site e gostaria de saber mais sobre os atendimentos domiciliares.') {
  return isWhatsAppConfigured ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '#contato';
}
