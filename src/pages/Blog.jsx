import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Palette, TrendingUp, Briefcase, Star, Play, BookOpen, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: <Star className="h-5 w-5" /> },
    { id: 'web-ux', name: 'Diseño Web & UX', icon: <Globe className="h-5 w-5" /> },
    { id: 'branding', name: 'Branding & Creatividad', icon: <Palette className="h-5 w-5" /> },
    { id: 'social-media', name: 'Social Media & Publicidad', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'business', name: 'Estrategia & Negocios', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'success-cases', name: 'Casos de Éxito', icon: <Star className="h-5 w-5" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      type: 'blog',
      category: 'web-ux',
      title: 'Cómo crear una landing que convierta',
      excerpt: 'Descubre los elementos clave que toda landing page necesita para transformar visitas en clientes reales.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: '5 min',
      hasDownload: true
    },
    {
      id: 2,
      type: 'vlog',
      category: 'social-media',
      title: '3 claves para crecer en Instagram con Ads',
      excerpt: 'Video tutorial: aprende a configurar campañas efectivas en Meta Ads para aumentar tu alcance.',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      duration: '2:30 min',
      hasDownload: false
    },
    {
      id: 3,
      type: 'blog',
      category: 'branding',
      title: 'Identidad de marca: más que un logo bonito',
      excerpt: 'Por qué el branding estratégico es la clave para diferenciarte en un mercado saturado.',
      image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: '7 min',
      hasDownload: true
    },
    {
      id: 4,
      type: 'blog',
      category: 'business',
      title: 'De la idea al modelo de negocio rentable',
      excerpt: 'Guía práctica para transformar tu emprendimiento en una empresa con estrategia y números claros.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: '10 min',
      hasDownload: true
    },
    {
      id: 5,
      type: 'vlog',
      category: 'web-ux',
      title: 'UX: el secreto de las webs que venden',
      excerpt: 'Video: descubre cómo el diseño centrado en el usuario mejora las conversiones de tu sitio web.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      duration: '3:00 min',
      hasDownload: false
    },
    {
      id: 6,
      type: 'blog',
      category: 'success-cases',
      title: 'Caso de éxito: De 0 a 10K seguidores en 3 meses',
      excerpt: 'Cómo ayudamos a una marca local a multiplicar su presencia digital con estrategia y contenido de valor.',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: '6 min',
      hasDownload: false
    },
    {
      id: 7,
      type: 'vlog',
      category: 'branding',
      title: 'Cómo elegir los colores perfectos para tu marca',
      excerpt: 'Tutorial rápido sobre psicología del color y cómo aplicarla en tu identidad visual.',
      image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      duration: '2:15 min',
      hasDownload: false
    },
    {
      id: 8,
      type: 'blog',
      category: 'social-media',
      title: 'Copywriting que vende: fórmulas probadas',
      excerpt: 'Las técnicas de redacción persuasiva que usamos para convertir textos en ventas.',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: '8 min',
      hasDownload: true
    },
    {
      id: 9,
      type: 'blog',
      category: 'business',
      title: 'SEO local: haz que te encuentren en Google',
      excerpt: 'Estrategias prácticas para posicionar tu negocio en las búsquedas locales.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: '9 min',
      hasDownload: true
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = () => {
    toast({
      title: "¡Gracias por tu interés! 🎉",
      description: "La función de suscripción estará disponible pronto."
    });
  };

  const handlePostClick = (post) => {
    toast({
      title: post.type === 'vlog' ? "🎥 Video próximamente" : "📖 Artículo próximamente",
      description: `"${post.title}" estará disponible muy pronto.`
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Aprende y haz crecer tu marca | Mar Digital</title>
        <meta name="description" content="Tips, guías y tendencias sobre diseño, branding, marketing digital y estrategia de negocios. Contenido práctico para impulsar tu empresa." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Aprende y haz crecer <span className="gradient-text">tu marca</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              En Mar Digital compartimos tips, guías y tendencias sobre diseño, branding, 
              marketing digital y estrategia de negocios. Contenido práctico que puedes 
              aplicar hoy mismo para impulsar tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-[#12121a] border-y border-white/5 sticky top-20 z-40 backdrop-blur-xl bg-[#12121a]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white shadow-lg shadow-[#00d4ff]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handlePostClick(post)}
                className="card-futuristic rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl ${
                      post.type === 'vlog'
                        ? 'bg-[#0066ff]/80 text-white'
                        : 'bg-[#00d4ff]/80 text-[#0a0a0f]'
                    }`}>
                      {post.type === 'vlog' ? (
                        <span className="flex items-center gap-1">
                          <Play className="h-3 w-3" /> Vlog
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" /> Blog
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Duration/Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/60 backdrop-blur-xl text-white">
                      {post.type === 'vlog' ? post.duration : post.readTime}
                    </span>
                  </div>

                  {/* Download Icon */}
                  {post.hasDownload && (
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-[#00d4ff]/90 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Download className="h-5 w-5 text-[#0a0a0f]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#00d4ff] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                    {post.type === 'vlog' ? 'Ver video' : 'Leer más'}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No hay contenido disponible en esta categoría aún.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Newsletter Section */}
      <section className="section-padding bg-[#12121a] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff] rounded-full blur-[200px] opacity-5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] mx-auto mb-6">
              <Mail className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Suscríbete para recibir <span className="gradient-text">nuestras guías gratuitas</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Únete a nuestra comunidad y recibe contenido exclusivo, recursos descargables 
              y las últimas tendencias directamente en tu correo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all duration-300"
              />
              <Button
                onClick={handleSubscribe}
                className="px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:shadow-xl hover:shadow-[#00d4ff]/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Suscribirme
              </Button>
            </div>

            <p className="text-xs text-gray-500">
              📧 Sin spam. Solo contenido de valor. Cancela cuando quieras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Message Section */}
      <section className="section-padding bg-[#0a0a0f] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="inline-block">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066ff]/10 to-[#00d4ff]/10 border border-[#00d4ff]/20">
                <Briefcase className="h-6 w-6 text-[#00d4ff]" />
                <span className="text-[#00d4ff] font-semibold">Nuestro compromiso</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Nuestro objetivo es que no solo tengas servicios, 
              sino también <span className="gradient-text">conocimiento que potencie tu marca</span>
            </h2>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              En Mar Digital creemos que el conocimiento es poder. Por eso compartimos todo lo que 
              sabemos para que puedas tomar mejores decisiones, entender el proceso y hacer crecer 
              tu negocio de manera estratégica y sostenible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => navigate('/servicios')}
                className="px-8 py-6 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:shadow-xl hover:shadow-[#00d4ff]/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                Ver nuestros servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate('/contacto')}
                variant="outline"
                className="px-8 py-6 border-2 border-[#00d4ff]/30 text-white hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] rounded-xl transition-all duration-300 text-lg"
              >
                Hablemos de tu proyecto
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
