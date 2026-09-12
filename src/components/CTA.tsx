import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScroll';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
    "Hello S.M Kitchen Interior, I'd like to get a free consultation for my interior project."
  )}`;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury interior design space by S.M Kitchen Interior in Sonipat"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-950/95 via-wine-900/90 to-charcoal-950/85" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Get Started Today
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-cream-50 sm:text-4xl lg:text-5xl text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/70 sm:text-lg">
            Let's create an interior that reflects your style, personality and lifestyle.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-semibold text-charcoal-950 shadow-luxury transition-all duration-300 hover:scale-105 hover:bg-cream-100"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-7 py-3.5 text-sm font-semibold text-charcoal-950 shadow-gold transition-all duration-300 hover:scale-105"
            >
              <Calendar className="h-4 w-4" />
              Get Free Consultation
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream-50/30 bg-cream-50/5 px-7 py-3.5 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/50 hover:bg-cream-50/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
