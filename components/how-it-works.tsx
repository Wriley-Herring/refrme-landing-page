"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TagIcon, UserIcon, ShareIcon, ChartBarIcon, BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: TagIcon,
    title: "Set Your Incentive",
    description: "Offer something irresistible, like 20% off the next service.",
  },
  {
    icon: ShareIcon,
    title: "Share Your Link or QR Code",
    description: "Blast your unique link or QR code everywhere.",
  },
  {
    icon: UserIcon,
    title: "Customers See It",
    description: "They see the incentive and submit their referral.",
  },
  {
    icon: BellIcon,
    title: "Get Notified",
    description: "Ping! A new referral just came in.",
  },
  {
    icon: ChartBarIcon,
    title: "Track Progress",
    description: "See who referred who and follow their journey.",
  },
  {
    icon: CheckCircleIcon,
    title: "Convert & Reward",
    description: "Close the deal and reward your customer. Everyone’s happy!",
  },
];

interface StepProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  number: number;
  bgClass: string;
}

const Step: React.FC<StepProps> = ({ icon: Icon, title, description, number, bgClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      console.log(`${title} is in view`);
    }
  }, [inView, title]);

  return (
    <div className={`py-12 md:py-20 ${bgClass}`} ref={ref}>
      <div className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center text-center p-10 rounded-lg shadow-lg">
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
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center pt-24 pb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">How RefrMe Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow these simple steps to grow your business through referrals.
          </p>
        </div>
        {steps.map((step, index) => (
          <Step 
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            number={index + 1}
            bgClass={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          />
        ))}
      </div>
    </section>
  );
}







