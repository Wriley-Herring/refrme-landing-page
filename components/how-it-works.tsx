"use client";

import { InformationCircleIcon,TagIcon ,UserIcon,ShareIcon, ChartBarIcon,BellIcon, CheckCircleIcon, GiftIcon } from '@heroicons/react/24/outline';


const steps = [
  {
    icon: TagIcon,
    title: "Set Your Referral Incentive",
    description: "Offer an attractive incentive, like 20% off your next service, for every successful referral.",
  },
  {
    icon: ShareIcon,
    title: "Share Your Unique Link or QR Code",
    description: "Easily share your unique link or QR code with your customers.",
  },
  {
    icon: UserIcon,
    title: "Customers See the Incentive",
    description: "Customers view the incentive and submit their referral information.",
  },
  {
    icon: BellIcon,
    title: "Receive a Notification",
    description: "Get notified instantly when a new referral is added.",
  },
  {
    icon: ChartBarIcon,
    title: "Track Referrals",
    description: "Monitor who referred whom and track the progress of each referral.",
  },
  {
    icon: CheckCircleIcon,
    title: "Convert Referrals",
    description: "Manage referrals through to conversion, and reward customers with their incentive upon success.",
  },
//   {
//     icon: GiftIcon,
//     title: "Reward Your Customers",
//     description: "After a referral is successfully converted, reward your customers with the promised incentive.",
//   },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900">How RefrMe Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow these simple steps to grow your business through effective referrals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-gray-50 p-10 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
                <step.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-lg text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





