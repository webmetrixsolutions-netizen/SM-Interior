import {
  Palette,
  LayoutGrid,
  BadgeCheck,
  Maximize,
  Users,
  Home,
  type LucideIcon,
} from 'lucide-react';
import { whyChooseItems } from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScroll';

const iconMap: Record<string, LucideIcon> = {
  Palette,
  LayoutGrid,
  BadgeCheck,
  Maximize,
  Users,
  Home,
};

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="relative overflow-hidden bg-wine-950 py-24 lg:py-32 bg-grain">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-950 via-charcoal-950 to-wine-950" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <span className={`reveal ${isVisible ? 'is-visible' : ''} inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400`}>
            Why Choose Us
          </span>
          <h2 className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mt-3 font-serif text-3xl font-bold text-cream-50 sm:text-4xl`}>
            Why Choose S.M Kitchen Interior?
          </h2>
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700`} />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Home;
            return (
              <div
                key={item.title}
                className={`group reveal ${
                  isVisible ? 'is-visible' : ''
                } reveal-delay-${Math.min(index + 1, 5)} relative overflow-hidden rounded-2xl border border-gold-500/10 bg-charcoal-900/60 p-7 backdrop-blur-sm transition-all duration-500 hover:border-gold-500/30 hover:bg-charcoal-900/90 hover:-translate-y-1`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-500/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-wine-700 to-wine-900 shadow-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-gold-400" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-cream-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/60">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
