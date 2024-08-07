import Head from 'next/head';
import TOS from "@/components/tos";

export const metadata = {
  title: "RefrMe - Terms of Service",
  description: "Boost your business growth with RefrMe's seamless referral management software. Streamline referrals, manage incentives, and track performance easily.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="referral management software, customer referral system, streamline referrals" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/path-to-social-image.jpg" />
        <meta property="og:url" content="https://refrme.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://refrme.io",
              "name": "RefrMe",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://refrme.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <TOS />
      {/* <FeaturesPlanet />
      <LargeTestimonial />
      <Cta /> */}
    </>
  );
}