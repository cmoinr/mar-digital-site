import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '@/utils/api';
import { executeRecaptcha } from '@/utils/recaptcha';

const Contact = () => {
  const { t } = useTranslation('contact');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar al backend (sin reCAPTCHA por ahora)
      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        recaptchaToken: 'dev-bypass'
      });

      if (response.success) {
        toast({
          title: '✅ Mensaje enviado',
          description: response.message
        });

        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: '❌ Error',
        description: error.message || 'No pudimos enviar tu mensaje. Intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Servicios disponibles
  const services = [
    t('form.service.option1'),
    t('form.service.option2'),
    t('form.service.option3'),
    t('form.service.option4'),
    t('form.service.option5'),
    t('form.service.option6'),
    t('form.service.option7'),
    t('form.service.option8')
  ];

  // Rangos de presupuesto
  const budgetRanges = [
    t('form.budget.option1'),
    t('form.budget.option2'),
    t('form.budget.option3'),
    t('form.budget.option4'),
    t('form.budget.option5'),
    t('form.budget.option6'),
    t('form.budget.option7')
  ];

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
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
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('hero.subtitle')} <strong className="text-[#00d4ff]">{t('hero.subtitleHighlight')}</strong> {t('hero.subtitleEnd')}
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
              <h2 className="text-2xl font-bold text-white mb-6">{t('methods.title')}</h2>
              <div className="space-y-4">
                <a href="mailto:hola@mardigital.com" className="group block p-6 rounded-2xl card-futuristic hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{t('methods.email.label')}</div>
                      <div className="text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors">{t('methods.email.value')}</div>
                    </div>
                  </div>
                </a>
                
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl card-futuristic hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{t('methods.phone.label')}</div>
                      <div className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{t('methods.phone.value')}</div>
                    </div>
                  </div>
                </a>

                <div className="block p-6 rounded-2xl card-futuristic">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-md">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{t('methods.address.label')}</div>
                      <div className="text-lg font-bold text-white">{t('methods.address.value')}</div>
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
                <h3 className="text-xl font-bold mb-3">{t('schedule.title')}</h3>
                <p className="text-blue-50 mb-6 leading-relaxed">
                  {t('schedule.description')}
                </p>
                <a 
                  href="https://calendly.com/mardigital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-white text-[#0066ff] font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>{t('schedule.button')}</span>
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
              <h2 className="text-3xl font-bold text-white mb-2">{t('form.title')}</h2>
              <p className="text-gray-400 mb-8">{t('form.subtitle')}</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-300">{t('form.name.label')} *</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder={t('form.name.placeholder')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-300">{t('form.email.label')} *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder={t('form.email.placeholder')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                </div>

                {/* WhatsApp y Empresa */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-300">
                      {t('form.phone.label')}
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder={t('form.phone.placeholder')}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-300">{t('form.company.label')} *</Label>
                    <Input 
                      id="company" 
                      type="text" 
                      placeholder={t('form.company.placeholder')}
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-3 rounded-xl border-2 border-[#00d4ff]/20 bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all" 
                    />
                  </div>
                </div>

                {/* Servicio de Interés */}
                <div>
                  <Label htmlFor="service" className="text-sm font-semibold text-gray-300">{t('form.service.label')} *</Label>
                  <select 
                    id="service" 
                    value={formData.service}
                    onChange={handleInputChange}
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
                  <Label htmlFor="budget" className="text-sm font-semibold text-gray-300">{t('form.budget.label')} *</Label>
                  <select 
                    id="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
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
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-300">{t('form.message.label')} *</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('form.message.placeholder')}
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
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
                  disabled={isSubmitting}
                  className="w-full btn-futuristic py-5 text-lg rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t('form.submitting')}
                    </>
                  ) : (
                    <>
                      📨 {t('form.submit')}
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
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