"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PageIllustration from "@/components/page-illustration";
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
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <section className="relative bg-white">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Referral Effect content */}
        <div className="pb-12 pt-40 md:pb-20 md:pt-64">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl" data-aos="zoom-y-out" data-aos-delay={150}>
                How RefrMe <br className="hidden lg:block" />
              <span className="text-blue-600">Works🔧</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700 md:text-xl" data-aos="zoom-y-out" data-aos-delay={300}>
              Effortlessly grow your business with our simple, powerful referral process
              </p>
            </div>
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
      </div>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition transform hover:scale-105"
        onClick={() => setIsDemoModalOpen(true)}
      >
        Schedule a Demo
      </button>
      {isDemoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsDemoModalOpen(false)}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Request a Demo</h2>
            <div style={{ position: 'relative', paddingBottom: 'calc(56.458333333333336% + 50px)', height: '0' }}>
              <iframe
                src="https://tally.so/embed/mVVJJa"
                width="100%"
                height="100%"
                style={{ position: 'absolute', border: 'none' }}
                scrolling="yes"
                allow="clipboard-read clipboard-write"
                allowFullScreen
                allowTransparency={true}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`

        .request-demo-button {
          transition: transform 0.5s;
        }

        .request-demo-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}







