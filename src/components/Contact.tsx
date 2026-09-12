import { useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  User,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { siteConfig, serviceOptions } from '@/data/siteData';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScroll';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[+]?[\d\s\-()]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        service: form.service,
        message: form.message.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
    "Hello S.M Kitchen Interior, I'd like to get a free consultation."
  )}`;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapsQuery
  )}&output=embed`;

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <span className={`reveal ${isVisible ? 'is-visible' : ''} inline-block text-xs font-semibold uppercase tracking-[0.2em] text-wine-700`}>
            Contact Us
          </span>
          <h2 className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl`}>
            Let's Design Your Dream Space
          </h2>
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700`} />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} space-y-6`}>
            <div className="rounded-2xl bg-cream-50 p-8 shadow-premium">
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                {siteConfig.name}
              </h3>
              <p className="mt-1 text-sm text-gold-600">{siteConfig.tagline}</p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-wine-800">
                    <User className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                      Director
                    </p>
                    <p className="text-sm font-semibold text-charcoal-800">
                      {siteConfig.director}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-wine-800">
                    <MapPin className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                      Address
                    </p>
                    <p className="text-sm font-semibold text-charcoal-800">
                      {siteConfig.address.line1}
                    </p>
                    <p className="text-sm text-charcoal-600">{siteConfig.address.line2}</p>
                  </div>
                </div>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-wine-800">
                    <Phone className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-wine-700">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-wine-800">
                    <Mail className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-wine-700 break-all">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-premium">
              <iframe
                title="Location map for S.M Kitchen Interior in Farmana, Sonipat, Haryana"
                src={mapSrc}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-cream-50 p-8 shadow-premium"
              noValidate
            >
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                Send Us a Message
              </h3>
              <p className="mt-1 text-sm text-charcoal-500">
                Fill in the form below and we'll get back to you.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700">
                    Name <span className="text-wine-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-gold-400/50 ${
                      errors.name
                        ? 'border-red-400 bg-red-50'
                        : 'border-charcoal-200 bg-cream-50 focus:border-gold-500'
                    }`}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700">
                      Phone <span className="text-wine-700">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-gold-400/50 ${
                        errors.phone
                          ? 'border-red-400 bg-red-50'
                          : 'border-charcoal-200 bg-cream-50 focus:border-gold-500'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-gold-400/50 ${
                        errors.email
                          ? 'border-red-400 bg-red-50'
                          : 'border-charcoal-200 bg-cream-50 focus:border-gold-500'
                      }`}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal-700">
                    Service Interested In <span className="text-wine-700">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-gold-400/50 ${
                      errors.service
                        ? 'border-red-400 bg-red-50'
                        : 'border-charcoal-200 bg-cream-50 focus:border-gold-500'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 w-full resize-none rounded-lg border border-charcoal-200 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/50"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-wine-700 to-wine-900 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-premium transition-all duration-300 hover:scale-[1.02] hover:shadow-luxury disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    Something went wrong. Please try calling us at {siteConfig.phone}.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
