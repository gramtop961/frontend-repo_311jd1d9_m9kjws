import React, { useMemo, useState } from 'react';

const PRICE_TABLE = {
  1: 70,
  2: 67,
  3: 65,
  4: 63,
  5: 60,
  6: 59,
  7: 58,
  8: 56,
  9: 55, // Standardised to €
  10: 50,
};

export default function PackageForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [reason, setReason] = useState('');
  const [sessions, setSessions] = useState(4);

  const pricePerSession = useMemo(() => PRICE_TABLE[sessions] || 70, [sessions]);
  const total = useMemo(() => pricePerSession * sessions, [pricePerSession, sessions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = `New package enquiry\n\nName: ${firstName} ${lastName}\nReason: ${reason}\nSessions: ${sessions}\nPrice per session: €${pricePerSession}\nTotal: €${total}`;
    alert(summary + "\n\nYou can now proceed to schedule via Calendly. Prices are confirmed upon booking.");
  };

  return (
    <section id="packages" className="bg-indigo-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Counselling Package</h2>
          <p className="mt-3 text-gray-600">Choose a number of appointments for a specific problem. Pricing adjusts automatically.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Doe"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Reason for contact</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                rows={4}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Briefly describe what you’d like support with"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">Number of sessions: {sessions}</label>
              <span className="text-sm text-gray-500">1–10</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={sessions}
              onChange={(e) => setSessions(Number(e.target.value))}
              className="mt-3 w-full accent-indigo-600"
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="text-sm text-gray-500">Price per session</div>
              <div className="mt-1 text-2xl font-semibold text-gray-900">€{pricePerSession}</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-gray-500">Total</div>
              <div className="mt-1 text-2xl font-semibold text-gray-900">€{total}</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-gray-500">You save</div>
              <div className="mt-1 text-2xl font-semibold text-emerald-600">
                €{Math.max(0, sessions * 70 - total)}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 transition"
            >
              Reserve package
            </button>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition"
            >
              Schedule via Calendly
            </a>
            <p className="text-sm text-gray-500">No automatic invoicing. Payment details shared after confirmation.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
