import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Água de Coco Natural',
    description: 'Nossa água de coco pura, extraída diretamente do coco verde e envasada sem adição de conservantes.',
    price: 'R$ 9,90',
    image: '/images/coconut-drink.jpg',
    sizes: ['300ml', '500ml', '1L'],
    featured: true,
  },
  {
    id: 2,
    name: 'Água de Coco com Limão',
    description: 'A refrescante água de coco com um toque de limão natural para um sabor ainda mais revigorante.',
    price: 'R$ 10,90',
    image: '/images/coconut-lemon.jpg',
    sizes: ['300ml', '500ml'],
    featured: false,
  },
  {
    id: 3,
    name: 'Água de Coco com Abacaxi',
    description: 'Uma combinação tropical de água de coco com abacaxi, perfeita para os dias quentes.',
    price: 'R$ 10,90',
    image: '/images/coconut-pineapple.jpg',
    sizes: ['300ml', '500ml'],
    featured: false,
  },
  {
    id: 4,
    name: 'Kit Detox',
    description: 'Pacote com 7 unidades de água de coco natural para sua semana de desintoxicação.',
    price: 'R$ 59,90',
    image: '/images/coconut-detox.jpg',
    sizes: ['7x300ml'],
    featured: true,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-[var(--primary-dark)]">
            Nossos Produtos
          </h2>
          <p className="subheading">
            Água de coco de alta qualidade, disponível em diferentes apresentações para atender suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col ${
                product.featured ? 'ring-2 ring-[var(--primary)] ring-offset-2' : ''
              }`}
            >
              {product.featured && (
                <div className="bg-[var(--primary)] text-white text-sm font-bold py-1 px-4 absolute right-0 m-2 rounded-full">
                  Destaque
                </div>
              )}
              <div className="relative h-48 w-full bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover p-2 rounded-t-lg"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-[var(--primary-dark)]">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <p className="text-2xl font-bold text-[var(--primary-dark)]">{product.price}</p>
              </div>
              <div className="p-4 bg-gray-50">
                <Link
                  href="#contato"
                  className="w-full block text-center bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Comprar Agora
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-600">
            Não encontrou o que procurava? Entre em contato para saber sobre outros produtos e formatos disponíveis.
          </p>
          <Link
            href="#contato"
            className="inline-block bg-[var(--secondary)] hover:bg-[var(--primary-dark)] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
}
