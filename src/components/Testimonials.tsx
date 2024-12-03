import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CTO, TechCorp',
    content: 'A parceria com a Setuponline transformou completamente nossa infraestrutura de TI. O suporte é excepcional e as soluções são sempre inovadoras.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    name: 'Ana Santos',
    role: 'Diretora de TI, Grupo Inovação',
    content: 'Excelente experiência com a equipe da Setuponline. Profissionais altamente capacitados e comprometidos com resultados.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    name: 'Roberto Oliveira',
    role: 'CEO, Nexus Solutions',
    content: 'As soluções em cloud computing da Setuponline nos ajudaram a reduzir custos e aumentar a eficiência operacional.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            A satisfação dos nossos clientes é o melhor indicador do nosso sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}