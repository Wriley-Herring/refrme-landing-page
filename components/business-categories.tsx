import { ChatBubbleOvalLeftEllipsisIcon, UserPlusIcon, UsersIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {/* Feature 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <ChatBubbleOvalLeftEllipsisIcon className="h-16 w-16 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Quick Capture</h2>
              <p className="mt-2 text-center text-gray-700">Easily capture new referrals and inbound leads by sharing your unique RefrMe link and QR code through text, email campaigns, business cards, and other marketing materials.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <UserPlusIcon className="h-16 w-16 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Manage & Track</h2>
              <p className="mt-2 text-center text-gray-700">Receive notifications directly to you for your sales team to take action. Easily manage ongoing referrals, see who referred them, ensure your customers are rewarded, and share your great work.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <CurrencyDollarIcon className="h-16 w-16 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Incentives</h2>
              <p className="mt-2 text-center text-gray-700">Showcase your referral incentive directly to your customers to drive inbound referrals and reward both your loyal and new customers.</p>
            </div>

            {/* Feature 4
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <CurrencyDollarIcon className="h-16 w-16 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Automated Payouts</h2>
              <p className="mt-2 text-center text-gray-700">Automate payouts to your customers for successful referrals, ensuring timely and accurate rewards.</p>
            </div> */}

            {/* Feature 5 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <ChartBarIcon className="h-16 w-16 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Insights</h2>
              <p className="mt-2 text-center text-gray-700">Equip your sales team with a comprehensive dashboard to maximize the effectiveness of your referral program and drive continuous growth.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


