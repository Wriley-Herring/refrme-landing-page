"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircleIcon } from '@heroicons/react/24/outline';
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
              <span className="text-blue-600">Referrals</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 md:text-xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                RefrMe helps businesses streamline their referral acquisition process. Capture, manage, and track referrals with ease, while enjoying actionable insights and automated notifications.
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
          {/* Hero image */}
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



