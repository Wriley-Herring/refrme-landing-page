"use client";

export default function Cta() {
  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl bg-gradient-to-r from-gray-800 to-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Content */}
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-100 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Referrals, simplified.
            </h2>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              Ready to kick referral chaos to the curb? Simplify your process and watch your business soar. Start your free trial today!
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg hover:bg-[length:100%_150%] hover:shadow-xl transition-all duration-300 sm:mb-0 sm:w-auto"
                href="https://app.refrme.io/sign-up"
              >
                <span className="relative inline-flex items-center">
                  Start Free Trial
                </span>
              </a>
              <a
                className="btn group mb-4 w-full bg-gray-100 text-gray-800 border border-gray-300 shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 sm:mb-0 sm:w-auto"
                href="/how-it-works"
              >
                <span className="relative inline-flex items-center">
                  See How It Works
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






