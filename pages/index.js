
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-violet-200 text-gray-900 p-4 md:p-10 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-center mb-10 border-b pb-6">
        <div className="flex items-center space-x-4">
          <img src="/logo_innerspark.png" alt="InnerSpark Logo" className="w-20 h-auto" />
          <h1 className="text-3xl md:text-5xl font-bold text-purple-800">InnerSpark.live</h1>
        </div>
        <nav className="space-x-4 mt-4 md:mt-0">
          <Link href="#about">Quiénes somos</Link>
          <Link href="#services">Servicios</Link>
          <Link href="#vision">Visión</Link>
          <Link href="#contact">Contacto</Link>
        </nav>
      </header>
      <section id="hero" className="text-center py-10 md:py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-6">IA + Conciencia + Libertad Financiera</h2>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-700">
          Tecnología con propósito. Automatización de contenidos, servidores IA y guía consciente hacia la expansión personal y profesional.
        </p>
        <div className="mt-8">
          <a href="https://wa.me/593999059000" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 shadow-md" target="_blank" rel="noopener noreferrer">
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
