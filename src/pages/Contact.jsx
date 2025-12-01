import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from 'lucide-react';
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

  // Servicios disponibles
  const services = [
    'Diseño y Desarrollo Web',
    'Branding & Diseño Gráfico',
    'Social Media & Copywriting',
    'Marketing Digital & Ads',
    'Consultoría en Modelos de Negocio',
    'Transformación Digital',
    'Optimización & Performance',
    'Otro / No estoy seguro'
  ];

  // Rangos de presupuesto
  const budgetRanges = [
    'Menos de $500 USD',
    '$500 - $1,000 USD',
    '$1,000 - $2,500 USD',
    '$2,500 - $5,000 USD',
    '$5,000 - $10,000 USD',
    'Más de $10,000 USD',
    'Prefiero no decir / A definir'
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Mar Digital</title>
        <meta name="description" content="Contáctanos para impulsar tu marca con diseño y estrategia digital. Estamos listos para ayudarte a crecer." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0066ff] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Conversemos de tu Proyecto
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              Cuéntanos tu visión y te responderemos con una <strong className="text-[#00d4ff]">propuesta personalizada</strong> en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Left Column: Contact Info & Alternatives */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Formas de Contacto</h2>
              <div className="space-y-4">
                <a href="mailto:hola@mardigital.com" className="group block p-6 rounded-2xl card-futuristic hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Email</div>
                      <div className="text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors">hola@mardigital.com</div>
                    </div>
                  </div>
                </a>
                
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl card-futuristic hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">WhatsApp</div>
                      <div className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">+1 (555) 123-4567</div>
                    </div>
                  </div>
                </a>

                <div className="block p-6 rounded-2xl card-futuristic">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-md">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Ubicación</div>
                      <div className="text-lg font-bold text-white">Remote / Global</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Calendly Alternative */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] text-white shadow-xl">
                <Calendar className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-3">¿Prefieres agendar una videollamada?</h3>
                <p className="text-blue-50 mb-6 leading-relaxed">
                  Reserva un espacio en nuestro calendario para una consulta inicial de 30 minutos completamente gratis.
                </p>
                <a 
                  href="https://calendly.com/mardigital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-white text-[#0066ff] font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Agendar Reunión</span>
                  <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl card-futuristic">
                <h3 className="text-lg font-bold text-white mb-4">¿Qué puedes esperar?</h3>
                <ul className="space-y-3">
                  {[
                    'Respuesta inicial en menos de 24 horas',
                    'Propuesta personalizada a tu proyecto',
                    'Timeline y presupuesto transparente',
                    'Sin compromiso ni costos ocultos'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#00d4ff] shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-24 p-8 lg:p-10 card-futuristic"
            >
              <h2 className="text-3xl font-bold text-white mb-2">Cuéntanos tu Proyecto</h2>
              <p className="text-gray-400 mb-8">Completa el formulario y te contactaremos pronto</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-300">Nombre completo *</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Juan Pérez" 
                      required
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-300">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="juan@empresa.com" 
                      required
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                </div>

                {/* WhatsApp y Empresa */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="whatsapp" className="text-sm font-semibold text-gray-300">
                      WhatsApp <span className="text-gray-500 font-normal">(opcional)</span>
                    </Label>
                    <Input 
                      id="whatsapp" 
                      type="tel" 
                      placeholder="+1 555 123 4567" 
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-300">Empresa *</Label>
                    <Input 
                      id="company" 
                      type="text" 
                      placeholder="Mi Empresa S.A." 
                      required
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                </div>

                {/* Servicio de Interés */}
                <div>
                  <Label htmlFor="service" className="text-sm font-semibold text-gray-300">Servicio de interés *</Label>
                  <select 
                    id="service" 
                    name="service" 
                    required
                    className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all outline-none"
                  >
                    <option value="" className="bg-[#0a0a0f]">Selecciona un servicio...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#0a0a0f]">{service}</option>
                    ))}
                  </select>
                </div>

                {/* Presupuesto Estimado */}
                <div>
                  <Label htmlFor="budget" className="text-sm font-semibold text-gray-300">Presupuesto estimado *</Label>
                  <select 
                    id="budget" 
                    name="budget" 
                    required
                    className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all outline-none"
                  >
                    <option value="" className="bg-[#0a0a0f]">Selecciona un rango...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#0a0a0f]">{range}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-300">Cuéntanos sobre tu proyecto *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe tu proyecto, objetivos, desafíos actuales y cualquier información relevante que quieras compartir..." 
                    rows="5"
                    required
                    className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 resize-none transition-all" 
                  />
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy" 
                    required
                    className="mt-1 w-5 h-5 rounded border-2 border-[#00d4ff]/30 bg-[#0a0a0f] text-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
                    Acepto la <a href="/privacidad" className="text-[#00d4ff] hover:text-[#0088ff] font-semibold underline">política de privacidad</a> y autorizo el uso de mis datos para que Mar Digital me contacte sobre mi consulta. *
                  </label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-futuristic py-5 text-lg rounded-2xl"
                >
                  📨 Enviar Mensaje
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                {/* Privacy Note */}
                <p className="text-center text-xs text-gray-500 leading-relaxed">
                  Protegemos tu privacidad. Nunca compartiremos tu información con terceros.
                  <br />Solo la usaremos para responder a tu consulta y enviarte propuestas relevantes.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;