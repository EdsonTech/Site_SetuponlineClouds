import React from 'react';
import { Cloud, Shield, Cpu, Users, Server, Code, Database, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography, buttons } from '../utils/styles';
import { theme } from '../utils/theme';

const services = [
  {
    icon: Server,
    title: 'Infraestrutura de TI',
    description: 'Soluções completas em infraestrutura, servidores, redes e suporte técnico especializado.',
    features: [
      'Servidores Dell EMC',
      'Storage Enterprise',
      'Virtualização VMware',
      'Backup e Replicação',
      'Monitoramento 24x7'
    ],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Migração e gerenciamento de serviços em nuvem, garantindo segurança e disponibilidade.',
    features: [
      'Microsoft Azure',
      'AWS',
      'Private Cloud',
      'Backup em Nuvem',
      'Disaster Recovery'
    ],
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Desenvolvimento de sistemas, sites e aplicativos personalizados para sua empresa.',
    features: [
      'Sistemas Web',
      'Aplicativos Mobile',
      'APIs',
      'Integrações',
      'Automação'
    ],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Administração, otimização e manutenção de bancos de dados empresariais.',
    features: [
      'SQL Server',
      'Oracle',
      'PostgreSQL',
      'MongoDB',
      'Redis'
    ],
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Proteção contra ameaças, backup em nuvem e políticas de segurança.',
    features: [
      'Firewall UTM',
      'Email Security',
      'Endpoint Protection',
      'SOC as a Service',
      'Conformidade LGPD'
    ],
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Network,
    title: 'Redes',
    description: 'Projeto e implementação de redes corporativas seguras e eficientes.',
    features: [
      'SD-WAN',
      'MPLS',
      'VPN Corporativa',
      'Wi-Fi Empresarial',
      'Monitoramento'
    ],
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Consultoria',
    description: 'Consultoria especializada em TI para otimizar seus processos e reduzir custos.',
    features: [
      'Análise de Infraestrutura',
      'Planejamento Estratégico',
      'Gestão de Projetos',
      'Governança de TI',
      'Transformação Digital'
    ],
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Cpu,
    title: 'Automação',
    description: 'Automação de processos e integração de sistemas para maior produtividade.',
    features: [
      'RPA',
      'Workflows',
      'Integração de Sistemas',
      'BI & Analytics',
      'IoT'
    ],
    gradient: 'from-pink-500 to-pink-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={typography.h2}>
            Nossos Serviços
          </h2>
          <p className={`${typography.body} max-w-3xl mx-auto mt-4`}>
            Soluções completas em TI para empresas de todos os portes, 
            com foco em inovação e resultados
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <motion.a
                    href="#contact"
                    className={`${buttons.outline} w-full justify-center group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      animate={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30,
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}