import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography, buttons } from '../utils/styles';
import { theme } from '../utils/theme';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'comercial@setuponline.net.br',
      link: 'mailto:comercial@setuponline.net.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 4063-4100',
      link: 'tel:+551140634100'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Barão de Teffé, 1000 - Jd. Ana Maria, Jundiaí - SP, 13208-761',
      link: 'https://maps.google.com/?q=Rua+Barão+de+Teffé,+1000+-+Jd.+Ana+Maria,+Jundiaí+-+SP'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={typography.h2}>Entre em Contato</h2>
          <p className={`${typography.body} max-w-2xl mx-auto mt-4`}>
            Estamos prontos para ajudar sua empresa com as melhores soluções em TI
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={`${buttons.primary} w-full justify-center group`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enviar Mensagem</span>
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className={`${theme.gradients.primary} p-4 rounded-xl`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}

              <div className="mt-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6794134366386!2d-46.897899684906384!3d-23.185999884867395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2712e9c1147d%3A0x98b0b7f2f6b4f4e9!2sR.%20Bar%C3%A3o%20de%20Teff%C3%A9%2C%201000%20-%20Jardim%20Ana%20Maria%2C%20Jundia%C3%AD%20-%20SP%2C%2013208-761!5e0!3m2!1sen!2sbr!4v1645564882961!5m2!1sen!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}