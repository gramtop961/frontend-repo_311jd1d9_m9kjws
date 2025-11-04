import React from 'react';
import { User, Heart, Users, Mic } from 'lucide-react';

const services = [
  {
    icon: User,
    title: '1-to-1 Counselling',
    description:
      'Private sessions focused on your personal goals, emotional wellbeing, and practical strategies for change.',
  },
  {
    icon: Heart,
    title: 'Couples Counselling',
    description:
      'A safe space to improve communication, rebuild trust, and strengthen your relationship together.',
  },
  {
    icon: Users,
    title: '“Group of Friends” Counselling',
    description:
      'Guided conversations for friends navigating shared challenges, life transitions, or conflicts.',
  },
  {
    icon: Mic,
    title: 'Live on a Specific Topic',
    description:
      'Interactive live sessions focused on a defined theme, offering tools and insights you can apply immediately.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-3 text-gray-600">
            Choose the format that fits your needs. Book easily via Calendly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
              <div className="mt-5">
                <a
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 transition"
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book via Calendly
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
