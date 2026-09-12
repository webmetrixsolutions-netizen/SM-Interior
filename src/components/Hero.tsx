import { ArrowRight, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium modular kitchen interior design in Sonipat by S.M Kitchen Interior"
          className="h-full w-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/70 to-charcoal-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-wine-900/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Since {siteConfig.since}
            </span>
          </div>

          <h1
            className="mt-6 animate-fade-in-up font-serif text-4xl font-bold leading-[1.15] text-cream-50 text-balance sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Premium Interior Designing &{' '}
            <span className="text-gradient-gold">Modular Kitchen</span> Solutions in Sonipat
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-in-up text-base leading-relaxed text-cream-100/80 sm:text-lg"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Transform your home with beautifully designed modular kitchens, wardrobes, TV panels,
            modular beds and complete interior solutions.
          </p>

          <div
            className="mt-8 flex flex-col gap-4 animate-fade-in-up sm:flex-row sm:items-center"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-7 py-3.5 text-sm font-semibold text-charcoal-950 shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#portfolio');
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-cream-100/5 px-7 py-3.5 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/50 hover:bg-cream-100/10"
            >
              View Our Work
            </a>
          </div>

          <div
            className="mt-12 flex items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <div className="h-12 w-px bg-gold-500/30" />
            <div>
              <p className="font-serif text-2xl font-semibold text-gold-400">
                {siteConfig.tagline}
              </p>
              <p className="mt-1 text-sm text-cream-100/60">
                Farmana, Sonipat, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
