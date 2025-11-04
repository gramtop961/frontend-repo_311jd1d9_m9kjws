import React from 'react';

export default function CalendlySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Book an Appointment</h2>
          <p className="mt-3 text-gray-600">
            Use Calendly to pick a time that works for you. If you’ve selected a package, I’ll confirm your plan and pricing by email.
          </p>
        </div>

        <div className="mt-10">
          <div className="rounded-2xl border shadow-sm overflow-hidden">
            <iframe
              title="Calendly Scheduling"
              src="https://calendly.com/"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-center text-sm text-gray-500">
            Don’t see your preferred time? Contact me and we’ll find a solution together.
          </p>
        </div>
      </div>
    </section>
  );
}
