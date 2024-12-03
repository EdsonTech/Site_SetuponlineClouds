import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const achievements = [
  'Mais de 15 anos de experiência no mercado',
  'Equipe altamente qualificada e certificada',
  'Parceiros dos principais fabricantes de TI',
  'Atendimento personalizado e dedicado',
  'Suporte técnico 24x7x365',
  'Projetos entregues com excelência'
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Setuponline
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Desde 2008, a Setuponline tem se destacado no mercado de TI, oferecendo soluções 
              inovadoras e serviços de alta qualidade para empresas de todos os portes. Nossa 
              missão é impulsionar a transformação digital dos nossos clientes, garantindo 
              eficiência, segurança e competitividade.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Com uma equipe altamente qualificada e certificada, estamos preparados para 
              enfrentar os desafios tecnológicos mais complexos, sempre com foco na 
              excelência e na satisfação dos nossos clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div 
              className="aspect-square rounded-2xl overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}