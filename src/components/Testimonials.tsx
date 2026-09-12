import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const displayState = 'coming-soon' as 'coming-soon' | 'carousel';

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (isPaused || displayState !== 'carousel') return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, displayState]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-charcoal-950 py-24 lg:py-32 bg-grain"
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div ref={ref} className="text-center">
          <span className={`reveal ${isVisible ? 'is-visible' : ''} inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400`}>
            Testimonials
          </span>
          <h2 className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mt-3 font-serif text-3xl font-bold text-cream-50 sm:text-4xl`}>
            What Our Clients Say
          </h2>
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700`} />
        </div>

        {displayState === 'coming-soon' ? (
          <div
            className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} mt-12`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-gold-500/10 bg-charcoal-900/60 p-10 text-center backdrop-blur-sm sm:p-16">
              <Quote className="mx-auto h-16 w-16 text-gold-500/20" />
              <p className="mt-6 font-serif text-2xl font-medium text-cream-50 sm:text-3xl">
                Client Reviews Coming Soon
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream-100/50">
                We are currently working with our clients to share their experiences. If you have
                worked with us, we would love to hear your feedback.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-5 py-2.5 text-sm text-gold-400">
                <MessageCircle className="h-4 w-4" />
                Share your experience with us
              </div>
            </div>
          </div>
        ) : (
          <div
            className="mt-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => goTo(current === 0 ? 0 : current - 1)}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex-1" />
              <button
                onClick={() => goTo((current + 1) % 1)}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
