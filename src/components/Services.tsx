import { ArrowRight } from 'lucide-react';
import { services } from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative overflow-hidden bg-charcoal-950 py-24 lg:py-32 bg-grain">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <span className={`reveal ${isVisible ? 'is-visible' : ''} inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400`}>
            What We Offer
          </span>
          <h2 className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mt-3 font-serif text-3xl font-bold text-cream-50 sm:text-4xl`}>
            Our Interior Designing Services
          </h2>
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700`} />
          <p className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mt-6 text-base leading-relaxed text-cream-100/60`}>
            From modular kitchens to complete home interiors, we offer a full range of interior
            designing services tailored to your space and style in Sonipat and Farmana.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group reveal ${
                isVisible ? 'is-visible' : ''
              } reveal-delay-${Math.min(index + 1, 5)} relative overflow-hidden rounded-2xl bg-charcoal-900/80 shadow-premium transition-all duration-500 hover:shadow-luxury hover:-translate-y-1`}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={940}
                  height={650}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 font-serif text-xl font-bold text-cream-50">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-cream-100/70">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-700 transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
