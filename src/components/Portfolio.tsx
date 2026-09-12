import { useState, useMemo } from 'react';
import { ZoomIn } from 'lucide-react';
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
} from '@/data/siteData';
import { useScrollReveal } from '@/hooks/useScroll';
import Lightbox from './Lightbox';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => setLightboxIndex(index);

  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const length = filteredItems.length;
      if (direction === 'prev') return (prev - 1 + length) % length;
      return (prev + 1) % length;
    });
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <span className={`reveal ${isVisible ? 'is-visible' : ''} inline-block text-xs font-semibold uppercase tracking-[0.2em] text-wine-700`}>
            Our Work
          </span>
          <h2 className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl`}>
            Our Interior Design Work
          </h2>
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700`} />
          <p className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mt-6 text-base leading-relaxed text-charcoal-600`}>
            A selection of our interior design projects across modular kitchens, wardrobes,
            living rooms, bedrooms and more in Sonipat and Farmana.
          </p>
        </div>

        <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} mt-10 flex flex-wrap justify-center gap-2`}>
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-wine-800 text-cream-50 shadow-premium'
                  : 'bg-cream-100 text-charcoal-600 hover:bg-wine-50 hover:text-wine-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl shadow-premium transition-all duration-500 hover:shadow-luxury ${
                item.span === 'wide'
                  ? 'sm:col-span-2'
                  : item.span === 'tall'
                  ? 'sm:row-span-2'
                  : ''
              }`}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-left">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-cream-50 transition-transform duration-300 group-hover:translate-x-1">
                  {item.title}
                </h3>
              </div>
              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-gold-500/90 text-charcoal-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={filteredItems}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </section>
  );
}
