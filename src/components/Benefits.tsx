import Image from 'next/image';

const benefits = [
  {
    title: 'Hidratação Natural',
    description: 'Rica em eletrólitos, a água de coco é uma excelente fonte de hidratação após atividades físicas.',
    icon: '/icons/hydration.svg',
  },
  {
    title: 'Baixa Caloria',
    description: 'Com poucas calorias e baixo teor de açúcar, é uma alternativa saudável às bebidas industrializadas.',
    icon: '/icons/calories.svg',
  },
  {
    title: 'Rica em Potássio',
    description: 'Contém mais potássio que uma banana, ajudando na função muscular e na pressão arterial.',
    icon: '/icons/potassium.svg',
  },
  {
    title: 'Antioxidantes',
    description: 'Possui propriedades antioxidantes que combatem os radicais livres e retardam o envelhecimento.',
    icon: '/icons/antioxidant.svg',
  },
  {
    title: 'Digestão Saudável',
    description: 'Ajuda a melhorar a digestão e pode aliviar problemas estomacais como azia e indigestão.',
    icon: '/icons/digestion.svg',
  },
  {
    title: 'Fortalece o Sistema Imunológico',
    description: 'Contém vitaminas e minerais que ajudam a fortalecer o sistema imunológico.',
    icon: '/icons/immune.svg',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-[var(--primary-dark)]">
            Benefícios da Água de Coco
          </h2>
          <p className="subheading">
            Descubra por que a água de coco é considerada uma das bebidas mais saudáveis e nutritivas da natureza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--primary-dark)]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[var(--primary-dark)] text-white p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-48 w-48 mx-auto">
                <Image
                  src="/images/coconut-cut.jpg"
                  alt="Coco cortado"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Você sabia?</h3>
              <p className="mb-4">
                A água de coco é naturalmente estéril dentro do coco e contém
                os mesmos eletrólitos encontrados no sangue humano, tornando-a
                uma bebida perfeitamente equilibrada para o nosso corpo.
              </p>
              <p>
                Durante a Segunda Guerra Mundial, a água de coco foi usada como
                substituto do plasma sanguíneo em transfusões de emergência,
                salvando muitas vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
