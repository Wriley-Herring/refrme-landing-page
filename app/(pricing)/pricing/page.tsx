export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Pricing from "@/components/pricing";


export default function Home() {
  return (
    <>
      <Pricing />
      {/* <FeaturesPlanet />
      <LargeTestimonial />
      <Cta /> */}
    </>
  );
}