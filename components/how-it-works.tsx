"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TagIcon, UserIcon, ShareIcon, ChartBarIcon, BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

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
];

interface StepProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ icon: Icon, title, description, number }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      console.log(`${title} is in view`);
    }
  }, [inView, title]);

  return (
    <div className="py-12 md:py-20" ref={ref}>
      <div className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-center bg-gray-50 p-10 rounded-lg shadow-lg">
          <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6 relative">
            <Icon className="w-12 h-12 text-blue-500" />
            <span className="absolute top-0 left-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{number}</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-lg text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center pt-24 pb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">How RefrMe Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow these simple steps to grow your business through effective referrals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Step 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}





