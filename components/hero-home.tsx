"use client";

import { useState } from "react";
import { PlayCircleIcon, ChartBarIcon, UsersIcon, CheckCircleIcon, CurrencyDollarIcon, ArrowTrendingUpIcon, ClipboardDocumentListIcon, BellIcon, ChartPieIcon } from '@heroicons/react/24/outline';
import PageIllustration from "@/components/page-illustration";
import RefrmeLogo from "@/public/images/ReferMe_full.png"; // Adjust the path as needed



export default function HeroHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-40 md:pb-20 md:pt-64">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Supercharge Your <br className="hidden lg:block" />
              <span className="text-blue-600">Referrals⚡</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 md:text-xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Tired of referral chaos? RefrMe turns happy customers into your best promoters. Capture, track, and convert referrals effortlessly. Boom!
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <a
                  className="btn group mb-4 w-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 sm:mb-0 sm:w-auto"
                  href="https://app.refrme.io/sign-up"
                >
                  Try Free for 30 Days
                </a>
                <button
                  className="flex watch-demo-button items-center justify-center w-full text-gray-800 hover:text-gray-900 sm:ml-4 sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  <PlayCircleIcon className="w-6 h-6 mr-2 text-blue-600" />
                  Watch demo <span className="ml-2 text-gray-500">3 min</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Why Referrals Matter Section */}
        <div className="py-12 text-center bg-gray-50 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Why Referrals Matter</h2>
            <p className="mb-8 text-lg text-gray-700">
              Referrals are the lifeblood of any growing business. They’re cost-effective, have higher conversion rates, and build trust more quickly than any other marketing channel.
            </p>
            <div className="space-y-12">
              <div className="flex flex-col items-center md:flex-row md:space-x-4" data-aos="fade-up" data-aos-delay={100}>
                <ChartBarIcon className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">High Conversion Rates</h3>
                  <p className="text-lg text-gray-700">Referred customers are 4x more likely to convert <sup><a href="#cite1" className="text-blue-600">[1]</a></sup>.</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:space-x-4" data-aos="fade-up" data-aos-delay={200}>
                <UsersIcon className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Trust and Credibility</h3>
                  <p className="text-lg text-gray-700">92% of consumers trust referrals from people they know <sup><a href="#cite2" className="text-blue-600">[2]</a></sup>.</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:space-x-4" data-aos="fade-up" data-aos-delay={300}>
                <CheckCircleIcon className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Cost-Effective</h3>
                  <p className="text-lg text-gray-700">Referral marketing reduces your customer acquisition costs significantly <sup><a href="#cite3" className="text-blue-600">[3]</a></sup>.</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:space-x-4" data-aos="fade-up" data-aos-delay={400}>
                <CurrencyDollarIcon className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Higher Lifetime Value</h3>
                  <p className="text-lg text-gray-700">Referred customers have a 16% higher lifetime value <sup><a href="#cite4" className="text-blue-600">[4]</a></sup>.</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:space-x-4" data-aos="fade-up" data-aos-delay={500}>
                <ArrowTrendingUpIcon className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Accelerated Growth</h3>
                  <p className="text-lg text-gray-700">Businesses with referral programs grow 86% faster <sup><a href="#cite5" className="text-blue-600">[5]</a></sup>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How RefrMe Helps Section */}
        <div className="py-12 bg-white md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">How RefrMe Helps Your Business Grow</h2>
            <p className="mb-8 text-lg text-gray-700">
              RefrMe is designed to help your business harness the power of referrals effortlessly. Here's how:
            </p>
            <div className="space-y-8 text-left">
              <div className="flex items-center" data-aos="fade-right" data-aos-delay={100}>
                <ClipboardDocumentListIcon className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Streamline Referral Collection</h3>
                  <p className="text-lg text-gray-700">Capture referrals with ease using unique links and QR codes. Share them via texts, emails, and business cards to spread the word far and wide.</p>
                </div>
              </div>
              <div className="flex items-center" data-aos="fade-left" data-aos-delay={200}>
                <BellIcon className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Real-Time Tracking and Management</h3>
                  <p className="text-lg text-gray-700">Stay on top of your referrals with instant notifications. Track every referral, ensuring no opportunity slips through the cracks.</p>
                </div>
              </div>
              <div className="flex items-center" data-aos="fade-right" data-aos-delay={300}>
                <CurrencyDollarIcon className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Incentivize and Reward</h3>
                  <p className="text-lg text-gray-700">Create compelling referral incentives. Reward your loyal customers and motivate them to bring in new business.</p>
                </div>
              </div>
              <div className="flex items-center" data-aos="fade-left" data-aos-delay={400}>
                <ChartPieIcon className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Gain Actionable Insights</h3>
                  <p className="text-lg text-gray-700">Leverage our powerful dashboard to gain insights into your referral program. Use data-driven decisions to optimize and grow your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/484a027a8351452ab143ca4335ff4b12?sid=d2011695-1102-4f71-bb5a-f69eb3c82432"
                frameBorder="0"
                allow="fullscreen"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .watch-demo-button {
          animation: pulse 2.5s infinite;
          transition: transform 0.5s;
        }

        .watch-demo-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}








