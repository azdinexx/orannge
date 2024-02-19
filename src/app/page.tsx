import Hero from '@/components/hero';
import HappyStats from '@/components/happy-stats';
import Steps from '@/components/steps';
import Testimonial from '@/components/testimonial';
import Pricing from '@/components/pricing';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <main className=' scroll-smooth max-w-7xl w-full mx-auto'>
      <Hero />
      <HappyStats />
      <Gallery />
      <Testimonial />
      <Steps />
      <Pricing />
    </main>
  );
}
