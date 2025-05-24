'use client';

import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
      <div className="items-center">
        <div className="mb-6 mx-auto">
          <Image
            src="/images/pp.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full shadow-lg mx-auto"
          />
        </div>

        <h1 className="text-2xl font-bold text-pink-600 mb-2">
          Front-End Developer
        </h1>

        <div className="text-gray-700">
          Who crafts clean, modern, and responsive web interfaces with a passion for intuitive design and great user experience.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-500 transition">
          Projects
        </button>
        <button className="px-6 py-3 border-2 border-black text-black rounded-xl hover:bg-gray-500 transition">
          Contact Me
        </button>
      </div>

    </section>
  )
}
