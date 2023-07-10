import Layout from '../../components/layout';
import Faq from './sections/Faq';
import HeroSection from './sections/HeroSection';
import ServiceSection from './sections/OurServiceSection';
import Testi from './sections/Testimonial';
import WhyUs from './sections/WhyUs';
export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <WhyUs />
      <Testi />
      <Faq />
    </Layout>
  );
}
