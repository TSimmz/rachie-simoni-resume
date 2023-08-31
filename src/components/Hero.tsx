'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col w-full">
      <h1 className=" font-bold text-[35vmin] w-full leading-[35vmin]">
        Hello.
      </h1>

      <div className="flex p-[18px] gap-8">
        <div>
          <svg
            viewBox="0 0 50 50"
            stroke="none"
            fill="white"
            className="h-40 w-40"
          >
            <path d="M21 17L1 37L13 49L33 29V49H49V1H1V17H21Z" />
          </svg>
        </div>

        <article className="flex flex-col gap-2">
          <h2 className="font-semibold text-6xl">Rachie Simoni</h2>
          <p className="text-3xl italic">
            Freelance Digital Marketing + Content
          </p>
          <p className="text-3xl">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="inline-block h-8 w-8 mr-4"
            >
              <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span>Knoxville</span>
          </p>
          <p className="font-semibold text-3xl">
            <svg
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 mr-2"
            >
              <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span> 854 · 803 · 4151</span>
          </p>
          <p className="text-3xl">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="inline-block h-8 w-8 mr-4"
            >
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
            </svg>
            <span>rachie.levy.7@gmail.com</span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
