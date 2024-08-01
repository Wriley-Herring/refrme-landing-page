export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import HowItWorks from "@/components/how-it-works";


export default function Home() {
  return (
    <>
      <HowItWorks />
      {/* <FeaturesPlanet />
      <LargeTestimonial />
      <Cta /> */}
    </>
  );
}