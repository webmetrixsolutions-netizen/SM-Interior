import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '@/data/siteData';

type LightboxProps = {
  items: PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    },
    [isOpen, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || index === null) return null;

  const current = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${current.title}`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20 sm:left-8"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20 sm:right-8"
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <div
        className="relative mx-16 max-h-[85vh] max-w-4xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.image}
          alt={current.alt}
          className="max-h-[80vh] w-full rounded-xl object-contain shadow-luxury"
        />
        <div className="mt-4 text-center">
          <h3 className="font-serif text-xl font-semibold text-cream-50">{current.title}</h3>
          <p className="mt-1 text-sm text-gold-400">{current.category}</p>
        </div>
      </div>
    </div>
  );
}
