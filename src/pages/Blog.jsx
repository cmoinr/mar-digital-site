import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Palette, TrendingUp, Briefcase, Star, Play, BookOpen, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation('blog'); // Usar namespace 'blog'
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('categories.all'), icon: <Star className="h-5 w-5" /> },
    { id: 'web-ux', name: t('categories.webUx'), icon: <Globe className="h-5 w-5" /> },
    { id: 'branding', name: t('categories.branding'), icon: <Palette className="h-5 w-5" /> },
    { id: 'social-media', name: t('categories.socialMedia'), icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'business', name: t('categories.business'), icon: <Briefcase className="h-5 w-5" /> },
    { id: 'success-cases', name: t('categories.successCases'), icon: <Star className="h-5 w-5" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      type: 'blog',
      category: 'web-ux',
      title: t('posts.post1.title'),
      excerpt: t('posts.post1.excerpt'),
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: t('posts.post1.readTime'),
      hasDownload: true
    },
    {
      id: 2,
      type: 'vlog',
      category: 'social-media',
      title: t('posts.post2.title'),
      excerpt: t('posts.post2.excerpt'),
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      duration: t('posts.post2.duration'),
      hasDownload: false
    },
    {
      id: 3,
      type: 'blog',
      category: 'branding',
      title: t('posts.post3.title'),
      excerpt: t('posts.post3.excerpt'),
      image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: t('posts.post3.readTime'),
      hasDownload: true
    },
    {
      id: 4,
      type: 'blog',
      category: 'business',
      title: t('posts.post4.title'),
      excerpt: t('posts.post4.excerpt'),
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: t('posts.post4.readTime'),
      hasDownload: true
    },
    {
      id: 5,
      type: 'vlog',
      category: 'web-ux',
      title: t('posts.post5.title'),
      excerpt: t('posts.post5.excerpt'),
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      duration: t('posts.post5.duration'),
      hasDownload: false
    },
    {
      id: 6,
      type: 'blog',
      category: 'success-cases',
      title: t('posts.post6.title'),
      excerpt: t('posts.post6.excerpt'),
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: t('posts.post6.readTime'),
      hasDownload: false
    },
    {
      id: 7,
      type: 'vlog',
      category: 'branding',
      title: t('posts.post7.title'),
      excerpt: t('posts.post7.excerpt'),
      image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      duration: t('posts.post7.duration'),
      hasDownload: false
    },
    {
      id: 8,
      type: 'blog',
      category: 'social-media',
      title: t('posts.post8.title'),
      excerpt: t('posts.post8.excerpt'),
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: t('posts.post8.readTime'),
      hasDownload: true
    },
    {
      id: 9,
      type: 'blog',
      category: 'business',
      title: t('posts.post9.title'),
      excerpt: t('posts.post9.excerpt'),
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      readTime: t('posts.post9.readTime'),
      hasDownload: true
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = () => {
    toast({
      title: t('toasts.subscribe.title'),
      description: t('toasts.subscribe.description')
    });
  };

  const handlePostClick = (post) => {
    toast({
      title: post.type === 'vlog' ? t('toasts.vlog') : t('toasts.blogPost'),
      description: `"${post.title}" ${t('toasts.comingSoon')}`
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
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
              {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('hero.subtitle')}
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
                          <Play className="h-3 w-3" /> {t('types.vlog')}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" /> {t('types.blog')}
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
                    {post.type === 'vlog' ? t('actions.watchVideo') : t('actions.readMore')}
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
                {t('noResults')}
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
              {t('cta.title')} <span className="gradient-text">{t('cta.titleHighlight')}</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder={t('cta.placeholder')}
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all duration-300"
              />
              <Button
                onClick={handleSubscribe}
                className="px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:shadow-xl hover:shadow-[#00d4ff]/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                {t('cta.button')}
              </Button>
            </div>

            <p className="text-xs text-gray-500">
              {t('cta.disclaimer')}
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
                <span className="text-[#00d4ff] font-semibold">{t('closing.badge')}</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
              {t('closing.title')} <span className="gradient-text">{t('closing.titleHighlight')}</span>
            </h2>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t('closing.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => navigate('/servicios')}
                className="px-8 py-6 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:shadow-xl hover:shadow-[#00d4ff]/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                {t('closing.ctaServices')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate('/contacto')}
                variant="outline"
                className="px-8 py-6 border-2 border-[#00d4ff]/30 text-white hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] rounded-xl transition-all duration-300 text-lg"
              >
                {t('closing.ctaContact')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
