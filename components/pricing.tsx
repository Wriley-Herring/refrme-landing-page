"use client";

import { CheckIcon } from '@heroicons/react/24/outline';
import { QrCodeIcon, DocumentTextIcon, GiftIcon, ChartBarIcon, BellIcon, CheckBadgeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    priceMonthly: '$50/month',
    priceAnnually: '$40/month',
    additionalSeatMonthly: '$20',
    additionalSeatAnnually: '$16',
    seats: 'Up to 3 seats',
    features: [
      { icon: QrCodeIcon, name: 'Snap Referrals with QR Codes and Links' },
      { icon: DocumentTextIcon, name: 'Easy Peasy Entry Form' },
      { icon: GiftIcon, name: 'Show Off Your Incentives' },
      { icon: ChartBarIcon, name: 'Dashboard Awesomeness' },
      { icon: BellIcon, name: 'Instant Referral Alerts' },
      { icon: CheckBadgeIcon, name: 'Referral Mastery' },
      { icon: UserGroupIcon, name: 'Top Referrer Spotlight' },
    ],
    includedSeats: '1 seat',
  },
  {
    name: 'Pro',
    priceMonthly: '$100/month',
    priceAnnually: '$80/month',
    additionalSeatMonthly: '$15',
    additionalSeatAnnually: '$12',
    seats: 'Up to 8 seats',
    features: [
      { icon: QrCodeIcon, name: 'Snap Referrals with QR Codes and Links' },
      { icon: DocumentTextIcon, name: 'Easy Peasy Entry Form' },
      { icon: GiftIcon, name: 'Show Off Your Incentives' },
      { icon: ChartBarIcon, name: 'Dashboard Awesomeness' },
      { icon: BellIcon, name: 'Instant Referral Alerts' },
      { icon: CheckBadgeIcon, name: 'Referral Mastery' },
      { icon: UserGroupIcon, name: 'Top Referrer Spotlight' },
    ],
    includedSeats: '5 seats',
  },
  {
    name: 'Teams',
    priceMonthly: '$150/month',
    priceAnnually: '$120/month',
    additionalSeatMonthly: '$10',
    additionalSeatAnnually: '$8',
    seats: 'Up to 15 seats',
    features: [
      { icon: QrCodeIcon, name: 'Snap Referrals with QR Codes and Links' },
      { icon: DocumentTextIcon, name: 'Easy Peasy Entry Form' },
      { icon: GiftIcon, name: 'Show Off Your Incentives' },
      { icon: ChartBarIcon, name: 'Dashboard Awesomeness' },
      { icon: BellIcon, name: 'Instant Referral Alerts' },
      { icon: CheckBadgeIcon, name: 'Referral Mastery' },
      { icon: UserGroupIcon, name: 'Top Referrer Spotlight' },
    ],
    includedSeats: '10 seats',
  },
  {
    name: 'Enterprise',
    priceMonthly: 'Custom',
    priceAnnually: 'Custom',
    additionalSeatMonthly: 'Custom - Unlimited seats',
    additionalSeatAnnually: 'Custom - Unlimited seats',
    seats: 'Unlimited seats',
    features: [
      { icon: QrCodeIcon, name: 'Snap Referrals with QR Codes and Links' },
      { icon: DocumentTextIcon, name: 'Easy Peasy Entry Form' },
      { icon: GiftIcon, name: 'Show Off Your Incentives' },
      { icon: ChartBarIcon, name: 'Dashboard Awesomeness' },
      { icon: BellIcon, name: 'Instant Referral Alerts' },
      { icon: CheckBadgeIcon, name: 'Referral Mastery' },
      { icon: UserGroupIcon, name: 'Top Referrer Spotlight' },
    ],
    includedSeats: 'Unlimited seats',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plans that match your needs
            </p>
            <p className="mt-4 text-gray-500">Our pricing is simple, transparent, and scales with your team.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-4 py-2 font-medium ${billingCycle === 'annually' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
              >
                Bill Yearly -20%
              </button>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 font-medium ${billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
              >
                Bill Monthly
              </button>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <div key={plan.name} className={`flex flex-col p-6 rounded-lg shadow-md ${index === 2 ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnually}</span>
                  <span className="block text-sm text-gray-500">Billed {billingCycle}</span>
                </div>
                <div className="mt-4">{plan.includedSeats} included</div>
                <div className="mt-4">
                  <span className="text-sm">{billingCycle === 'monthly' ? plan.additionalSeatMonthly : plan.additionalSeatAnnually}</span>
                  <span className="block text-sm text-gray-500">per additional seat</span>
                </div>
                <div className="mt-4">{plan.seats}</div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map(({ icon: Icon, name }) => (
                    <li key={name} className="flex items-center">
                      <Icon className={`h-5 w-5 mr-2 ${index === 2 ? 'text-green-300' : 'text-green-500'}`} />
                      {name}
                    </li>
                  ))}
                </ul>

                <a href="https://app.refrme.io/sign-up" className={`mt-6 py-2 px-4 rounded-lg shadow-md ${index === 2 ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                  Get Started
                </a>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


