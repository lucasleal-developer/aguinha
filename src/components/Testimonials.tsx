'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Mariana Silva',
    role: 'Nutricionista',
    image: '/testimonials/person1.svg',
    quote: 'Recomendo a água de coco da Coco Tropical para todos os meus pacientes. É uma fonte natural de hidratação e eletrólitos, perfeita para o pós-treino.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Atleta',
    image: '/testimonials/person2.svg',
    quote: 'Desde que comecei a consumir água de coco regularmente, notei uma melhora significativa na minha recuperação após os treinos intensos. É minha bebida favorita!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juliana Costa',
    role: 'Professora de Yoga',
    image: '/testimonials/person3.svg',
    quote: 'A água de coco da Coco Tropical é simplesmente deliciosa e pura. Ofereço aos meus alunos após as aulas de yoga e todos adoram. Recomendo muito!',
    rating: 4,
  },
  {
    id: 4,
    name: 'Roberto Almeida',
    role: 'Chef de Cozinha',
    image: '/testimonials/person4.svg',
    quote: 'Além de consumir, utilizo a água de coco em várias receitas. A qualidade do produto é excepcional e o sabor é incomparável. Parabéns pelo excelente produto!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-[var(--primary-dark)]">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="subheading">
            Veja os depoimentos de quem já experimentou a qualidade da nossa água de coco
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-[var(--primary)] opacity-20">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[activeIndex].rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-xl italic text-gray-800 mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        activeIndex === index
                          ? 'bg-[var(--primary)]'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
