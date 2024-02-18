import Hero from '@/components/hero';
import HappyStats from '@/components/happy-stats';
import Steps from '@/components/steps';
import Testimonial from '@/components/testimonial';
import Pricing from '@/components/pricing';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <HappyStats />
      <Gallery />
      <Testimonial />
      <Steps />
      <Pricing />
    </main>
  );
}
