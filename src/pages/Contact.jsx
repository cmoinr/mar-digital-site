import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "El formulario de contacto no envía mensajes por ahora."
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Mar Digital</title>
        <meta name="description" content="Contáctanos para impulsar tu marca con diseño y estrategia digital. Estamos listos para ayudarte a crecer." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#075296] to-[#1fd0ff] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hablemos de tu próximo proyecto.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Estamos listos para escuchar tus ideas y ayudarte a transformarlas en resultados digitales impactantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 p-8 bg-white rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Información de Contacto
            </h2>
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-[#075296]" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@mardigital.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-[#075296]" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Teléfono</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-[#075296]" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Oficina</h3>
                <p className="text-gray-600">123 Calle Digital, Ciudad Creativa, País</p>
              </div>
            </div>
            <img alt="A modern office building with a sleek design" className="w-full h-48 object-cover rounded-lg mt-8" src="https://images.unsplash.com/photo-1520004434532-cd6680350777" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Envíanos un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-medium text-gray-700">Nombre Completo</Label>
                <Input id="name" type="text" placeholder="Tu nombre" className="mt-2 p-3 rounded-full border-gray-300 focus:border-[#0e88e2] focus:ring focus:ring-[#0e88e2]/20" />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" className="mt-2 p-3 rounded-full border-gray-300 focus:border-[#0e88e2] focus:ring focus:ring-[#0e88e2]/20" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-lg font-medium text-gray-700">Asunto</Label>
                <Input id="subject" type="text" placeholder="Asunto del mensaje" className="mt-2 p-3 rounded-full border-gray-300 focus:border-[#0e88e2] focus:ring focus:ring-[#0e88e2]/20" />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg font-medium text-gray-700">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows="5" className="mt-2 p-3 rounded-2xl border-gray-300 focus:border-[#0e88e2] focus:ring focus:ring-[#0e88e2]/20" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#075296] hover:bg-[#0e88e2] text-white font-bold py-3 text-lg rounded-full">
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;