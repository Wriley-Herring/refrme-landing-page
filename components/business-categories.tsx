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
    threshold: 0.7,
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
          description="Easily capture new referrals and inbound leads by sharing your unique RefrMe link and QR code through text, email campaigns, business cards, and other marketing materials."
          bgClass="bg-gray-50"
        />
        <FeatureSection 
          icon={UserPlusIcon}
          title="Manage & Track"
          description="Receive notifications directly to your sales team to take action. Easily manage ongoing referrals, see who referred them, ensure your customers are rewarded, and share your great work."
          bgClass="bg-white"
        />
        <FeatureSection 
          icon={CurrencyDollarIcon}
          title="Incentives"
          description="Showcase your referral incentive directly to your customers to drive inbound referrals and reward both your loyal and new customers."
          bgClass="bg-gray-50"
        />
        <FeatureSection 
          icon={ChartBarIcon}
          title="Insights"
          description="Equip your sales team with a comprehensive dashboard to maximize the effectiveness of your referral program and drive continuous growth."
          bgClass="bg-white"
        />
      </div>
    </section>
  );
};

export default Features;


