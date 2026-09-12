import { processSteps } from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <span className={`reveal ${isVisible ? 'is-visible' : ''} inline-block text-xs font-semibold uppercase tracking-[0.2em] text-wine-700`}>
            How We Work
          </span>
          <h2 className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl`}>
            Our Simple Interior Design Process
          </h2>
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700`} />
        </div>

        <div className="relative mt-16">
          <div
            className={`absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0 lg:block`}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal ${
                  isVisible ? 'is-visible' : ''
                } reveal-delay-${Math.min(index + 1, 5)} relative`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-2 border-gold-500/30 bg-cream-50 shadow-premium transition-all duration-500 hover:border-gold-500 hover:shadow-luxury">
                    <span className="font-serif text-4xl font-bold text-gradient-gold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold text-charcoal-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
