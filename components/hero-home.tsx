import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import RefrmeLogo from "@/public/images/ReferMe_full.png"; // Adjust the path as needed

export default function HeroHome() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-100">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
          
            <h1
              className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl"
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
              <div className="relative before:absolute before:inset-0 before:border-y before:border-transparent before:bg-gradient-to-r before:from-transparent before:via-slate-300 before:to-transparent">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow-lg hover:bg-blue-700 sm:mb-0 sm:w-auto"
                    href="https://app.refrme.io/sign-up"
                  >
                    <span className="relative inline-flex items-center">
                      Try Free for 30 Days{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-lg hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="https://app.refrme.io/sign-up"
                  >
                    Schedule a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            {/* Add hero image or additional content here */}
          </div>
        </div>
      </div>
    </section>
  );
}





