import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, children, description }: { eyebrow?: string; children: ReactNode; description?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{children}</h2>{description && <p>{description}</p>}</div>;
}
