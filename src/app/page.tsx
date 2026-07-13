import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkingProcess from "@/components/WorkingProcess";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import SectionCTA from "@/components/SectionCTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "One Axis Enterprises",
    image: "https://oneaxisenterprises.com/logo.png",
    description: "Professional corporate facility management and integrated property support services delivering clean, secure, and compliant environments.",
    url: "https://oneaxisenterprises.com",
    telephone: "+919900077148",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky Navigation and Scroll Progress */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Section 1: Home/Hero */}
        <Hero />

        {/* CTA 1: After Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <SectionCTA />
        </div>

        {/* Section 2: About Us */}
        <AboutUs />

        {/* Section 3: Services Card Deck */}
        <Services />

        {/* Section 4: Sectors Served */}
        <Industries />

        {/* Section 5: Advantage & Why Us */}
        <WhyChooseUs />

        {/* Section 6: Process Timeline */}
        <WorkingProcess />

        {/* Section 7: Base Pricing plans & variables disclaimer */}
        <Pricing />

        {/* CTA 2: After Pricing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <SectionCTA />
        </div>

        {/* Section 8: Client Testimonials */}
        <Testimonials />

        {/* Section 9: Accordion FAQs */}
        <FAQ />

        {/* CTA 3: Final CTA before Footer (Above Contact Form) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <SectionCTA />
        </div>

        {/* Section 10: Enquiry Lead Form */}
        <ContactUs />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating Shortcuts (WhatsApp & Scroll-to-top) */}
      <FloatingWidgets />
    </>
  );
}
