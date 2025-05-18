import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Seleção dos Cocos',
    description: 'Selecionamos apenas os melhores cocos verdes, no ponto ideal de maturação para garantir o sabor perfeito.',
    icon: '/icons/selection.svg',
  },
  {
    id: 2,
    title: 'Extração Cuidadosa',
    description: 'Utilizamos técnicas que preservam todos os nutrientes e o sabor natural da água de coco.',
    icon: '/icons/extraction.svg',
  },
  {
    id: 3,
    title: 'Filtragem Natural',
    description: 'Nosso processo de filtragem mantém todas as propriedades naturais sem adicionar conservantes.',
    icon: '/icons/filtration.svg',
  },
  {
    id: 4,
    title: 'Envase Higiênico',
    description: 'Embalamos em condições controladas para garantir a máxima pureza e frescor do produto.',
    icon: '/icons/packaging.svg',
  },
  {
    id: 5,
    title: 'Entrega Rápida',
    description: 'Entregamos rapidamente para garantir que você receba o produto sempre fresco e no ponto ideal.',
    icon: '/icons/delivery.svg',
  },
];

export default function Process() {
  return (
    <section className="section bg-[var(--primary-dark)] text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-white">
            Como Produzimos
          </h2>
          <p className="subheading text-[var(--text-light)]">
            Conheça o processo cuidadoso que garante a qualidade superior da nossa água de coco
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="bg-white rounded-full p-4 mb-4 shadow-lg">
                  <div className="relative h-12 w-12">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full w-full">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-[var(--text-light)]">{step.description}</p>
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-xl font-bold h-8 w-8 rounded-full flex items-center justify-center">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="max-w-2xl mx-auto mb-8">
            Nossa missão é entregar a água de coco mais pura e saborosa, preservando todos os benefícios que a natureza oferece. Cada etapa do nosso processo é cuidadosamente monitorada para garantir a excelência do produto final.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-[var(--primary-dark)] hover:bg-[var(--text-light)] font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Conheça Nossa Fazenda
          </a>
        </div>
      </div>
    </section>
  );
}
