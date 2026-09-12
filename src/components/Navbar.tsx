import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteData';
import { useActiveSection, useScrollPosition } from '@/hooks/useScroll';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
const hiddenHeaderLinks = new Set(['#portfolio', '#why-us', '#testimonials']);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const isHomepage = pathname === '/';
  const scrolled = useScrollPosition();
  const activeSection = useActiveSection(sectionIds);
  const visibleNavLinks = navLinks.filter((link) => !hiddenHeaderLinks.has(link.href));

  useEffect(() => {
    const handlePathChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHomepage) return;

    const hash = href.slice(href.indexOf('#'));
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getLinkHref = (href: string) => `/${href}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md shadow-luxury py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href={getLinkHref('#home')}
            onClick={(e) => {
              if (isHomepage) {
                e.preventDefault();
                handleNavClick(getLinkHref('#home'));
              }
            }}
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="S.M Kitchen Interior home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-wine-700 to-wine-900 font-serif text-lg font-bold text-gold-300 shadow-gold">
              SM
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-base font-bold tracking-wide text-cream-100 sm:text-lg">
                S.M Kitchen Interior
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400">
                {siteConfig.tagline}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {visibleNavLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={getLinkHref(link.href)}
                    onClick={(e) => {
                      if (isHomepage) {
                        e.preventDefault();
                        handleNavClick(getLinkHref(link.href));
                      }
                    }}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-gold-400'
                        : 'text-cream-100/80 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-2/3' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={getLinkHref('#contact')}
              onClick={(e) => {
                if (isHomepage) {
                  e.preventDefault();
                  handleNavClick(getLinkHref('#contact'));
                }
              }}
              className="rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-5 py-2.5 text-sm font-semibold text-charcoal-950 shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-800/50 text-cream-100 transition-colors hover:bg-charcoal-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-charcoal-950 shadow-luxury transition-transform duration-400 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 py-24">
            <ul className="flex flex-col gap-1">
              {visibleNavLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={getLinkHref(link.href)}
                      onClick={(e) => {
                        if (isHomepage) {
                          e.preventDefault();
                          handleNavClick(getLinkHref(link.href));
                        }
                      }}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-wine-800/40 text-gold-400'
                          : 'text-cream-100/80 hover:bg-charcoal-800 hover:text-gold-300'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={getLinkHref('#contact')}
              onClick={(e) => {
                if (isHomepage) {
                  e.preventDefault();
                  handleNavClick(getLinkHref('#contact'));
                }
              }}
              className="mt-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-5 py-3 text-center text-sm font-semibold text-charcoal-950 shadow-gold transition-transform hover:scale-105"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
