"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChatBubbleOvalLeftEllipsisIcon, UserPlusIcon, CurrencyDollarIcon, ChartBarIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import PageIllustration from "@/components/page-illustration";
import RefrmeLogo from "@/public/images/ReferMe_full.png"; // Adjust the path as needed

interface FeatureSectionProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bgClass: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ icon: Icon, title, description, bgClass }) => {
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
        <div className="flex flex-col items-center text-center">
          <Icon className="h-20 w-20 text-blue-500" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Features</h1>
          <ArrowDownIcon className="h-8 w-8 text-blue-500 mx-auto mt-4" />
        </div>
        <FeatureSection 
          icon={ChatBubbleOvalLeftEllipsisIcon}
          title="Quick Capture"
          description="Snap up referrals with your unique RefrMe link and QR code. Share it everywhere – texts, emails, business cards. Easy peasy! ✨"
          bgClass="bg-gray-50"
        />
        <FeatureSection 
          icon={UserPlusIcon}
          title="Manage & Track"
          description="Stay on top of referrals. Get notifications, track who sent what, and make sure your customers get the kudos they deserve. 📈"
          bgClass="bg-white"
        />
        <FeatureSection 
          icon={CurrencyDollarIcon}
          title="Incentives"
          description="Show off your referral incentives. Reward loyal customers, attract new ones. Everybody wins! 🎉"
          bgClass="bg-gray-50"
        />
        <FeatureSection 
          icon={ChartBarIcon}
          title="Insights"
          description="Your sales team’s secret weapon – a killer dashboard to boost your referral game and keep that growth train rolling. 🚆 "
          bgClass="bg-white"
        />
      </div>
    </section>
  );
};

export default Features;



