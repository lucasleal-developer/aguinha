import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Água de Coco Tropical"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Água de Coco Pura e Refrescante
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--text-light)]">
            Diretamente da natureza para você. Hidratação natural com todos os nutrientes que seu corpo precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#produtos" className="btn-primary text-center">
              Ver Produtos
            </Link>
            <Link
              href="#beneficios"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--primary-dark)] font-bold py-3 px-6 rounded-full transition-all duration-300 text-center"
            >
              Descobrir Benefícios
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Natural</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold">0%</p>
              <p className="text-sm">Conservantes</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hidden md:block">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm">Minerais Essenciais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
