import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProductsSection } from '@/components/sections/products-section';
import { ApplicationsSection } from '@/components/sections/applications-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { PartnersSection } from '@/components/sections/partners-section';
import { ContactSection } from '@/components/sections/contact-section';
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - 工业过滤技术专家`,
  description: COMPANY_DESCRIPTION,
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ApplicationsSection />
      <CaseStudiesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
