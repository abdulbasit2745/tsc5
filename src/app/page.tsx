// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyModernSite</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Welcome to a Modern Homepage
          </h2>
          <p className="text-gray-600 text-lg">
            This page is built with Next.js 15 and Tailwind CSS. Clean, fast, and responsive design for your projects.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/pss.jpg"
            alt="Modern design"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600">Fast</h3>
          <p className="text-gray-600 mt-2">Optimized performance with Next.js 15 and modern tooling.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600">Responsive</h3>
          <p className="text-gray-600 mt-2">Tailwind CSS ensures your site looks perfect on all devices.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600">Modern</h3>
          <p className="text-gray-600 mt-2">A sleek, minimalistic design that feels fresh and clean.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
          <p>© 2025 MyModernSite. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
