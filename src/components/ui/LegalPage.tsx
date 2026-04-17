import { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: LegalPageProps) {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-charcoal-950 to-forest-950">
        <div className="relative max-w-5xl mx-auto section-padding">
          <p className="label-text text-bronze-400 mb-4">Legal</p>
          <h1 className="font-serif text-display-lg font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-charcoal-400 text-body-sm">
            Effective date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="section-padding-y bg-ivory">
        <div className="max-w-4xl mx-auto section-padding">
          <article className="prose prose-lg max-w-none text-charcoal-700 space-y-6 leading-relaxed [&_h2]:font-serif [&_h2]:text-heading [&_h2]:font-semibold [&_h2]:text-charcoal-950 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-heading-sm [&_h3]:font-semibold [&_h3]:text-charcoal-950 [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-forest-700 [&_a]:underline hover:[&_a]:text-forest-800">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
