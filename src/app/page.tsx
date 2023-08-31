import Image from 'next/image';
import Hero from '~/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 relative flex-auto overflow-x-hidden">
      <Hero />
    </main>
  );
}
