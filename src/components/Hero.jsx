import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Compassionate Psychological Support
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Personalised counselling for individuals, couples, groups of friends, and live sessions on specific topics.
              Clear pricing, easy booking via Calendly, and flexible packages tailored to your needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 transition">
                Explore Services
              </a>
              <a href="#packages" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition">
                Packages & Pricing
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">No automatic invoicing. Prices are transparent and confirmed upon booking.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7bff?q=80&w=1600&auto=format&fit=crop"
                alt="Calm therapy setting"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
