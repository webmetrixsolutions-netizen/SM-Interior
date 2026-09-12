import { Check, User } from 'lucide-react';
import { siteConfig } from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScroll';

const features = [
  'Personalized interior solutions',
  'Modern designs with premium finishes',
  'Quality-focused execution',
  'Functional and stylish spaces',
  'Residential interior solutions',
  'Customized designs per client requirements',
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="https://images.pexels.com/photos/7018836/pexels-photo-7018836.jpeg?auto=compress&cs=tinysrgb&w=940"
                  alt="Modern interior design work by S.M Kitchen Interior in Sonipat"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={940}
                  height={650}
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-wine-800 p-6 shadow-luxury sm:block">
                <p className="font-serif text-4xl font-bold text-gold-400">
                  {new Date().getFullYear() - parseInt(siteConfig.since)}+
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cream-200">
                  Years of Craftsmanship
                </p>
              </div>
              <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl border-2 border-gold-400/30 lg:block" />
            </div>
          </div>

          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-700">
              About Us
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl">
              About S.M Kitchen Interior
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700" />

            <p className="mt-6 text-base leading-relaxed text-charcoal-600">
              S.M Kitchen Interior is a professional interior designing and modular furniture
              solution provider serving Farmana, Sonipat and nearby areas. We specialize in
              creating beautiful, functional living spaces through thoughtful design and
              quality craftsmanship.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600">
              Whether it is a modular kitchen, wardrobe, TV panel or a complete home interior,
              our approach focuses on understanding each client's unique requirements and
              delivering interiors that are both practical and aesthetically refined.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-wine-700">
                    <Check className="h-3 w-3 text-cream-50" />
                  </span>
                  <span className="text-sm text-charcoal-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-gold-300/40 bg-cream-100 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-wine-800">
                <User className="h-6 w-6 text-gold-400" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                  Director
                </p>
                <p className="font-serif text-lg font-semibold text-charcoal-900">
                  {siteConfig.director}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
