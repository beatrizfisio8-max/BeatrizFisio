// Integração opcional: apenas a origem do clique, sem mensagem ou dados de saúde.
export function trackContact(source: string) {
  window.dispatchEvent(new CustomEvent('beatriz:contact', { detail: { source } }));
}
