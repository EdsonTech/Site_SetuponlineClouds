import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { containers, typography } from '../utils/styles';
import { theme } from '../utils/theme';

const certifications = [
  {
    icon: Shield,
    title: 'Microsoft Gold Partner',
    description: 'Parceiro certificado com competências Gold em Cloud Platform e Datacenter',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'VMware Enterprise Partner',
    description: 'Parceiro Enterprise com especialização em virtualização e cloud',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: CheckCircle,
    title: 'Dell Titanium Partner',
    description: 'Parceiro Titanium com expertise em soluções de infraestrutura',
    gradient: 'from-gray-700 to-gray-800'
  }
];

const partnerships = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    name: 'Microsoft',
    level: 'Gold Partner',
    specialties: ['Azure', 'Microsoft 365', 'Security']
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
    name: 'VMware',
    level: 'Enterprise Partner',
    specialties: ['vSphere', 'NSX', 'vSAN']
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
    name: 'Dell',
    level: 'Titanium Partner',
    specialties: ['Servers', 'Storage', 'Networking']
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
    name: 'Cisco',
    level: 'Gold Partner',
    specialties: ['Networking', 'Security', 'Collaboration']
  }
];

export function TechPartners() {
  return (
    <section className={`${theme.gradients.secondary} py-20 text-white`}>
      <div className={containers.section}>
        <AnimatedSection className="text-center mb-16">
          <h2 className={`${typography.h2} text-white`}>
            Parcerias Estratégicas
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Trabalhamos com os líderes globais em tecnologia para entregar as melhores soluções
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${cert.gradient} p-1 rounded-2xl`}
              >
                <div className="bg-gray-900 p-8 rounded-2xl h-full">
                  <div className="inline-flex p-3 rounded-lg bg-white/10 text-white mb-6">
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {partnerships.map((partner, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-800 transition-colors"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">{partner.name}</h4>
                <p className="text-sm text-blue-400 mb-4">{partner.level}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {partner.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}