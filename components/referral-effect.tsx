"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ShareIcon, UsersIcon, ArrowTrendingUpIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import PageIllustration from "@/components/page-illustration";

export default function ReferralEffect() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const { ref: sectionRef1, inView: isIntersecting1 } = useInView({ threshold: 0.6 });
    const { ref: sectionRef2, inView: isIntersecting2 } = useInView({ threshold: 0.6 });
    const { ref: sectionRef3, inView: isIntersecting3 } = useInView({ threshold: 0.6 });
    const { ref: sectionRef4, inView: isIntersecting4 } = useInView({ threshold: 0.6 });
    const { ref: sectionRef5, inView: isIntersecting5 } = useInView({ threshold: 0.6 });

    return (
        <section className="relative bg-white">
            <PageIllustration />
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pb-12 pt-40 md:pb-20 md:pt-64">
                    <div className="pb-12 text-center md:pb-16">
                        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
                            The Magic of the <br className="hidden lg:block" />
                            <span className="text-blue-600">Referral Effect✨</span>
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p className="mb-8 text-lg text-gray-700 md:text-xl">
                                Step into a world where your customers become your greatest allies. Discover how RefrMe transforms happy clients into a growing network of advocates, fueling your business with the magic of referrals.
                            </p>
                        </div>
                    </div>

                    <div className="py-12 bg-gray-50 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">A Spark Ignites 🔥</h2>
                            <p className="mb-8 text-lg text-gray-700">
                                It all starts with one happy customer. With RefrMe, this customer becomes more than just a sale—they become your champion, spreading the word with genuine enthusiasm.
                            </p>
                            <div className={`flex flex-col items-center md:flex-row md:space-x-4 transition-opacity duration-1000 ${isIntersecting1 ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef1}>
                                <UserGroupIcon className="w-12 h-12 text-blue-600 transform transition-transform hover:scale-110" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Trust and Credibility 🤝</h3>
                                    <p className="text-lg text-gray-700">Referrals come from trusted sources. When a happy customer refers their friends, it builds immediate trust and credibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 bg-white md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">The Network Grows 🌱</h2>
                            <p className="mb-8 text-lg text-gray-700">
                                As more customers experience your magic and share their delight, your network of advocates expands. Each new referral adds a branch to your ever-growing tree of success.
                            </p>
                            <div className={`flex flex-col items-center md:flex-row md:space-x-4 transition-opacity duration-1000 ${isIntersecting2 ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef2}>
                                <UsersIcon className="w-12 h-12 text-blue-600 transform transition-transform hover:scale-110" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Expanding Reach 🌐</h3>
                                    <p className="text-lg text-gray-700">Every referral opens up a new audience, extending your reach exponentially as each new customer brings in their own network.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 bg-gray-50 md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">Reaching the Tipping Point 🎯</h2>
                            <p className="mb-8 text-lg text-gray-700">
                                Your referral network reaches a critical mass, and growth becomes self-sustaining. The energy of your happy customers propels your business forward, creating an unstoppable wave of success.
                            </p>
                            <div className={`flex flex-col items-center md:flex-row md:space-x-4 transition-opacity duration-1000 ${isIntersecting3 ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef3}>
                                <ArrowTrendingUpIcon className="w-12 h-12 text-blue-600 transform transition-transform hover:scale-110" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Exponential Growth 📈</h3>
                                    <p className="text-lg text-gray-700">With a growing network of referrals, your business's growth accelerates. Each new customer is a potential advocate, driving continuous expansion.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 bg-white md:py-20">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">The Future is Bright 🌟</h2>
                            <p className="mb-8 text-lg text-gray-700">
                                Harnessing the power of referrals with RefrMe, your business not only grows but thrives. Your satisfied customers become a powerful marketing force, ensuring sustained success.
                            </p>
                            <div className={`flex flex-col items-center md:flex-row md:space-x-4 transition-opacity duration-1000 ${isIntersecting4 ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef4}>
                                <SparklesIcon className="w-12 h-12 text-blue-600 transform transition-transform hover:scale-110" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Sustained Success 🏆</h3>
                                    <p className="text-lg text-gray-700">A strong referral network ensures long-term success. Your business continues to grow organically, supported by a community of satisfied customers and advocates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition-transform transform hover:scale-110"
                onClick={() => setIsDemoModalOpen(true)}
            >
                Schedule a Demo
            </button>
            {isDemoModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
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
        </section>
    );
}



