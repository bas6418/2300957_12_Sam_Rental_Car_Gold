import Layout from '../../components/layout';
import Why from './sections/WhyUs';
import HeroSection from './sections/HeroSection';
import ServiceSection from './sections/OurServiceSection';
import Testi from './sections/Testimonial';
import Faq from './sections/Faq';

export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <Why />
      <Testi />
      <Faq />
    </Layout>
  );
}
