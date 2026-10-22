import type { ReactNode } from 'react';
import { createWhatsAppLink, isWhatsAppConfigured } from '../services/whatsapp';
import { trackContact } from '../utils/analytics';

export function ContactLink({ children, message, source, className = '' }: { children: ReactNode; message?: string; source: string; className?: string }) {
  return <a className={`contact-link ${className}`} href={createWhatsAppLink(message)}
    target={isWhatsAppConfigured ? '_blank' : undefined} rel={isWhatsAppConfigured ? 'noopener noreferrer' : undefined}
    onClick={() => { if (isWhatsAppConfigured) trackContact(source); }}>
    {children}<span aria-hidden="true">↗</span>
  </a>;
}
