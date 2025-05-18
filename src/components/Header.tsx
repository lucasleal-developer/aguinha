'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 mr-2">
            <Image
              src="/logo.svg"
              alt="Água de Coco Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-[var(--primary-dark)]">
            Coco Tropical
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#beneficios"
            className="font-medium hover:text-[var(--primary)] transition-colors"
          >
            Benefícios
          </Link>
          <Link
            href="#produtos"
            className="font-medium hover:text-[var(--primary)] transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="#depoimentos"
            className="font-medium hover:text-[var(--primary)] transition-colors"
          >
            Depoimentos
          </Link>
          <Link
            href="#contato"
            className="font-medium hover:text-[var(--primary)] transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="#beneficios"
              className="font-medium hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefícios
            </Link>
            <Link
              href="#produtos"
              className="font-medium hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="#depoimentos"
              className="font-medium hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="font-medium hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
