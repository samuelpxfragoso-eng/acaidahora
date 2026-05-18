import { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Star, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  ChevronRight,
  MessageCircle,
  HelpCircle,
  Coffee,
  CupSoda,
  UtensilsCrossed,
  Sparkles,
  Soup,
  Beef,
  Sandwich,
  Cake,
  Beer,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Floating Informational Banner */}
      <div className="banner-gradient py-2 px-6 flex justify-center items-center gap-4 text-white overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [1000, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 font-black text-[10px] uppercase tracking-widest"
        >
          <span>🔥 O Açaí mais autêntico da Praia do Francês</span>
          <span>🛵 Peça pelo iFood ou WhatsApp</span>
          <span>✨ Experimente nosso Pistache Premium</span>
          <span>🏝️ Localizados no Coração da Vila</span>
        </motion.div>
      </div>

      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2 border-b border-acai/10' : 'bg-white/80 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="logo-shine logo-reflection logo-float bg-white rounded-full p-1 shadow-sm border border-acai/5">
              <img 
                src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777239013/WhatsApp_Image_2026-04-26_at_5.42.18_PM_1_avaoht.jpg" 
                alt="Açaí da Hora Logo" 
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className={`font-display font-black text-2xl uppercase tracking-tighter transition-colors text-acai`}>
              Açaí da Hora
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-black text-xs uppercase tracking-widest transition-colors text-acai/60 hover:text-indigo underline-offset-4 hover:underline`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.ifood.com.br/delivery/marechal-deodoro-al/acai-da-hora---praia-do-frances-frances/c5bd6f67-cdd1-4cee-837c-2fce2957688d?UTM_Medium=share" 
              target="_blank"
              className="bg-ifood text-white px-6 py-2 rounded-full font-black text-sm uppercase shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              iFood
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-acai"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-acai/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-acai py-2 border-b border-acai/5 font-black uppercase text-xs tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://www.ifood.com.br/delivery/marechal-deodoro-al/acai-da-hora---praia-do-frances-frances/c5bd6f67-cdd1-4cee-837c-2fce2957688d?UTM_Medium=share" 
                target="_blank"
                className="bg-ifood text-white p-3 rounded-xl font-black text-center mt-2 uppercase text-sm"
              >
                Pedir pelo iFood
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const mediaItems = [
    { type: 'image', url: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777583258/WhatsApp_Image_2026-04-30_at_6.03.03_PM_1_jyhq3d.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dqukldtq1/video/upload/v1777242483/video_Grok_00001__ceaxih.mp4" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
    }, 6000); // Trocando a cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-32 pb-20 overflow-hidden text-swap-fix">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left"
        >
          <div className="flex justify-center lg:justify-start mb-6">
            <span className="bg-pistache text-white px-3 py-1 rounded-md font-black text-xs uppercase tracking-widest shadow-sm">
              Novidade: Pistache Crocante
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-acai mb-6 font-black leading-[0.9]">
            O Açaí mais <br />
            <span className="text-indigo italic drop-shadow-sm">autêntico</span> <br />
            de Alagoas.
          </h1>
          <p className="text-lg md:text-xl text-acai/70 mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-tight">
            Agora em duas unidades! Descubra o frescor do nosso açaí premium com acompanhamentos selecionados e o toque exclusivo de <span className="text-indigo font-black underline decoration-pistache decoration-4 underline-offset-4">Pistache Premium</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <a href="#cardapio" className="bg-gold hover:bg-amber-400 text-acai px-8 py-4 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-tighter w-full sm:w-auto text-center">
              Ver Cardápio
            </a>
            <a 
              href="https://wa.me/5582991092725" 
              target="_blank"
              className="border-2 border-acai text-acai hover:bg-acai hover:text-white px-8 py-4 rounded-2xl font-black text-lg transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-tighter shadow-xl w-full sm:w-auto text-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Column: Rotating Media Block */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <motion.div
            key={currentMedia}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[400px] md:max-w-[600px] aspect-[5/3] rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-cream bg-acai group z-20"
          >
            {mediaItems[currentMedia].type === 'video' ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                key={mediaItems[currentMedia].url}
              >
                <source src={mediaItems[currentMedia].url} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full logo-shine logo-reflection">
                <img 
                  src={mediaItems[currentMedia].url} 
                  alt="Açaí da Hora Destaque"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo/5 rounded-full blur-[100px] -z-10" />
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-acai/30 hidden lg:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};



const CremesGourmetSection = () => {
  const cremes = ["Cupuaçu", "Ninho", "Ninho com Nutella", "Ninho com Oreo", "Paçoca"];
  
  return (
    <section className="py-20 px-6 bg-white border-b border-acai/5">
      <div className="max-w-3xl mx-auto text-center">
        {/* Featured Image with effects */}
        <div className="flex justify-center mb-8">
            <div className="logo-shine logo-reflection logo-float bg-white rounded-3xl p-1 shadow-2xl border border-acai/10 overflow-hidden w-64 md:w-96 h-auto">
              <img 
                src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778721509/WhatsApp_Image_2026-05-04_at_9.13.43_PM_xoawnc.jpg" 
                alt="Cremes Gourmet" 
                className="w-full h-auto rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
        </div>

        <span className="bg-pistache/10 text-pistache px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest mb-6 inline-block">
          Cremes Gourmet
        </span>
        <h2 className="text-4xl md:text-6xl text-acai font-black uppercase tracking-tighter leading-tight mb-6">
          Turbine seu <span className="text-indigo italic">Açaí</span>
        </h2>
        <p className="text-acai/60 font-medium mb-12">
          Adicione cremosidade extra com nossos sabores exclusivos preparados artesanalmente.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cremes.map((creme) => (
            <div key={creme} className="bg-cream px-6 py-3 rounded-2xl border border-acai/5 shadow-sm">
              <span className="font-black text-acai uppercase text-[10px] tracking-widest">{creme}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/5582991092725" 
            target="_blank"
            className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg transition-all hover:scale-105"
          >
            WhatsApp
          </a>
          <a 
            href="https://www.ifood.com.br/delivery/marechal-deodoro-al/acai-da-hora---praia-do-frances-frances/c5bd6f67-cdd1-4cee-837c-2fce2957688d?UTM_Medium=share" 
            target="_blank"
            className="bg-ifood text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg transition-all hover:scale-105"
          >
            iFood
          </a>
        </div>
      </div>
    </section>
  );
};

const FullWidthVideoHighlight = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-acai">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="https://res.cloudinary.com/dqukldtq1/video/upload/v1777242483/video_Grok_00015__1_eq5hqw.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center bg-black/20 backdrop-blur-sm p-12 rounded-[60px] border border-white/10"
        >
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
            Sinta a <span className="text-gold italic">Energia</span>
          </h2>
          <p className="text-white/80 font-medium text-lg md:text-2xl mt-4 tracking-widest uppercase">Puro Sabor de Alagoas</p>
        </motion.div>
      </div>
    </section>
  );
};

const FactorySection = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[9/16] max-w-[340px] mx-auto rounded-[40px] overflow-hidden shadow-2xl border-[10px] border-cream bg-acai relative group">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/dqukldtq1/video/upload/v1777245009/SnapInsta.to_AQNPeBmVVo2UJlNhGxq2v0Hm__MR9cywzXG04v-_0AUeXqSwWomdvcv1QhVUZI-IHoyp2_T9NTdFDGchowW30WwTIbe_Bqwn1qidJE0_fsef4i.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-acai/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-6 left-6 bg-gold text-acai font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-lg">100% Legítimo</div>
          </div>
          {/* Abstract decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pistache/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="bg-acai text-white px-4 py-1 rounded-md font-black text-xs uppercase tracking-widest mb-6 inline-block">Qualidade de Origem</span>
          <h2 className="text-5xl md:text-7xl text-acai font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Fábrica Própria <br /><span className="text-indigo italic">Açaí Legítimo</span>
          </h2>
          <div className="space-y-6 text-lg text-acai/70 font-medium leading-relaxed">
            <p>
              No <span className="text-acai font-extrabold uppercase">Açaí da Hora</span>, o controle de qualidade começa na nossa própria fábrica. Selecionamos os melhores frutos para garantir que você receba um produto 100% puro e autêntico.
            </p>
            <p>
              Diferente de açaís processados industrialmente, nossa produção foca na cremosidade natural e no sabor preservado, sem aditivos desnecessários. Sinta a diferença da textura a cada colherada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-cream/50 p-6 rounded-3xl border border-acai/5">
              <h4 className="font-black text-acai uppercase text-sm mb-2">Zero Gelo</h4>
              <p className="text-xs text-acai/60">Cremosidade pura do início ao fim.</p>
            </div>
            <div className="bg-cream/50 p-6 rounded-3xl border border-acai/5">
              <h4 className="font-black text-acai uppercase text-sm mb-2">Sabor Real</h4>
              <p className="text-xs text-acai/60">Legitimidade que você sente no paladar.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const categories = [
    { 
      id: 'acai', 
      name: '🍇 Açaí & Montagem', 
      icon: <Soup size={18} />,
      image: "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779061737/WhatsApp_Image_2026-05-17_at_8.44.45_PM_o0lepp.jpg",
      items: [
        { name: 'Tradicional P (2 comp.)', price: 'R$ 13,00', description: 'Açaí premium com 2 acompanhamentos e cobertura inclusos.', icon: <Soup size={20} /> },
        { name: 'Tradicional M (3 comp.)', price: 'R$ 18,00', description: 'Açaí premium com 3 acompanhamentos e cobertura inclusos.', icon: <Soup size={20} /> },
        { name: 'Tradicional G (4 comp.)', price: 'R$ 23,00', description: 'Açaí premium com 4 acompanhamentos e cobertura inclusos.', icon: <Soup size={20} /> },
        { name: 'Açaí Zero P', price: 'R$ 15,00', description: 'Açaí puro sem adição de açúcares.', icon: <Soup size={20} /> },
        { name: 'Açaí Zero M', price: 'R$ 20,00', description: 'Cremosidade e saúde em um só copo.', icon: <Soup size={20} /> },
        { name: 'Açaí Zero G', price: 'R$ 25,00', description: 'A opção ideal para quem cuida da dieta.', icon: <Soup size={20} /> },
        { name: 'Açaí Mix', price: 'R$ 15,00 / R$ 18,00', description: 'Nossa mistura especial batida e pronta para consumo.', icon: <Soup size={20} /> },
        { name: 'Super Mix', price: 'R$ 13,00 / R$ 16,00', description: 'O mix clássico que todo mundo ama.', icon: <Soup size={20} /> },
        { name: 'Acompanhamentos Grátis', price: 'Incluso', description: 'Banana, Granola, Flocos, Leite em Pó, Neston, Aveia, Amendoim, Paçoca, Ovomaltine e Sucrilhos.', icon: <Sparkles size={20} /> },
        { name: 'Pistache Premium', price: 'R$ 6,00', description: 'Pistache granulado torrado para a crocância perfeita.', featured: true, icon: <Star size={20} /> },
        { name: 'Adicionais de Cremes', price: 'R$ 5,00', description: 'Cupuaçu, Ninho, Ninho com Nutella, Ninho com Oreo e Paçoca.', featured: true, icon: <Cake size={20} /> },
        { name: 'Frutas (Morango/Kiwi)', price: 'R$ 4,00', description: 'Adicionais de frutas frescas picadas na hora.', icon: <Sparkles size={20} /> },
        { name: 'Extra Premium', price: 'R$ 4,00', description: 'Castaña, Leite em Pó adicional ou Leite Condensado extra.', icon: <Beef size={20} /> },
      ]
    },
    { 
      id: 'lanches', 
      name: '🥪 Lanches & Salgados', 
      icon: <Sandwich size={18} />,
      image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777242477/WhatsApp_Image_2026-04-26_at_6.53.34_PM_1_egvips.jpg",
      items: [
        { name: 'Sanduíche Natural', price: 'R$ 15,00', description: 'Opção leve com ingredientes selecionados.', icon: <Sandwich size={20} /> },
        { name: 'Salgados Variados', price: 'R$ 15,00', description: 'Quiches, empadas e empanadas artesanais.', icon: <UtensilsCrossed size={20} /> },
        { name: 'Misto Quente', price: 'R$ 14,00', description: 'Presunto e queijo derretidos no pão crocante.', icon: <Sandwich size={20} /> },
        { name: 'Queijo Quente', price: 'R$ 12,00', description: 'Aquele queijo esticando irresistível.', icon: <Sandwich size={20} /> },
        { name: 'Bolo do Dia', price: 'R$ 12,00', description: 'Nossos bolos caseiros feitos com amor.', icon: <Cake size={20} /> },
        { name: 'Pão na Chapa', price: 'R$ 8,00', description: 'Baguete quentinha com manteiga.', icon: <Sandwich size={20} /> },
      ]
    },
    { 
      id: 'bebidas', 
      name: '🥤 Bebidas', 
      icon: <CupSoda size={18} />,
      image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777242477/WhatsApp_Image_2026-04-26_at_6.53.34_PM_ki15xd.jpg",
      items: [
        { name: 'Heineken Long Neck', price: 'R$ 15,00', description: 'A cerveja premium holandesa bem gelada.', icon: <Beer size={20} /> },
        { name: 'Sucos de Laranja', price: 'R$ 12,00 / R$ 15,00', description: 'Espremido na hora (300ml / 500ml).', icon: <CupSoda size={20} /> },
        { name: 'Suco de Polpa', price: 'R$ 10,00 / R$ 14,00', description: 'Diversos sabores (300ml / 500ml).', icon: <CupSoda size={20} /> },
        { name: 'Vitaminas', price: 'R$ 12,00 / R$ 15,00', description: 'Frutas com leite (300ml / 500ml).', icon: <CupSoda size={20} /> },
        { name: 'Cerveja Lata', price: 'R$ 10,00', description: 'Heineken Lata ou marcas tradicionais.', icon: <Beer size={20} /> },
        { name: 'Refrigerantes', price: 'R$ 7,00', description: 'Coca-Cola, Guaraná e mais.', icon: <CupSoda size={20} /> },
        { name: 'Água de Coco', price: 'R$ 7,00', description: 'Hidratação natural da fruta.', icon: <Droplets size={20} /> },
        { name: 'Água Mineral', price: 'R$ 5,00 / R$ 6,00', description: 'Com ou sem gás.', icon: <Droplets size={20} /> },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('acai');

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <section id="cardapio" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-acai mb-4 uppercase font-black">Nossas Delícias</h2>
          <p className="text-gray-500 max-w-xl mx-auto italic">Tudo preparado na hora com o frescor que você merece.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'bg-indigo text-white shadow-xl scale-105' : 'bg-gray-100 text-acai/40 hover:bg-gray-200'}`}
            >
              {cat.icon}
              {cat.name.split(' ')[1] || cat.name}
            </button>
          ))}
        </div>

        {/* Category Header Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + '_img'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full h-48 md:h-64 rounded-[32px] overflow-hidden mb-12 shadow-lg ring-4 ring-acai/5"
          >
            <img 
              src={currentCategory?.image} 
              alt={currentCategory?.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {(currentCategory?.items as any[]).map((item, idx) => (
              <div 
                key={idx} 
                className={`p-5 border-b border-acai/5 hover:bg-cream/30 transition-colors ${item.featured ? 'bg-pistache/5 rounded-2xl border-none ring-1 ring-pistache ring-offset-2 my-6' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-acai text-white rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-acai uppercase tracking-tight flex items-center gap-2">
                        {item.name}
                        {item.featured && <span className="bg-pistache text-white text-[8px] px-2 py-0.5 rounded-full animate-pulse">Premium</span>}
                      </h3>
                      <p className="text-acai/60 text-[11px] font-medium leading-tight mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-display font-black text-indigo text-lg whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Categorized Call to Action Buttons */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/5582991092725" 
                target="_blank"
                className="btn-shine bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest text-center flex items-center justify-center gap-3 shadow-2xl transition-all hover:scale-[1.02]"
              >
                <MessageCircle size={20} /> Chamar no WhatsApp
              </a>
              <a 
                href="https://www.ifood.com.br/delivery/marechal-deodoro-al/acai-da-hora---praia-do-frances-frances/c5bd6f67-cdd1-4cee-837c-2fce2957688d?UTM_Medium=share" 
                target="_blank"
                className="btn-shine bg-ifood text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest text-center flex items-center justify-center gap-3 shadow-2xl transition-all hover:scale-[1.02]"
              >
                <ShoppingBag size={20} /> Fazer Pedido iFood
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Mariana Silva", rating: 5, comment: "O melhor açaí que já comi! A combinação com pistache é surreal de boa. O local no La Rue é super charmoso.", date: "Há 2 dias" },
    { name: "João Pedro", rating: 5, comment: "Atendimento nota 10. O açaí é muito cremoso e não é aquele gelo batido. Recomendo muito o de 700ml!", date: "Há 1 semana" },
    { name: "Bia Alagoas", rating: 4, comment: "Adorei a variedade de cremes. O de Cupuaçu com Açaí é a melhor pedida para o calor do Francês.", date: "Há 2 semanas" },
    { name: "Samuel Fragoso", rating: 5, comment: "Espetacular! A praticidade de pedir pelo whats e a qualidade do pistache deles é diferenciada demais.", date: "Há 3 dias" },
    { name: "Larissa Montes", rating: 5, comment: "Localização perfeita na Vila do Francês. Açaí zero super saboroso!", date: "Há 5 dias" },
    { name: "Roberto Cruz", rating: 5, comment: "Sempre que venho ao Francês passo aqui. O super mix de 500ml é gigante e muito recheado.", date: "Há 1 dia" }
  ];

  return (
    <section id="avaliacoes" className="py-24 px-6 bg-acai text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <span className="bg-pistache text-white px-3 py-1 rounded-md font-black text-xs uppercase tracking-widest mb-4 inline-block">Prova Social</span>
            <h2 className="text-5xl md:text-7xl leading-tight uppercase font-black tracking-tighter">Quem prova, <br /><span className="text-gold italic">vira fã!</span></h2>
            <div className="bg-white/5 p-6 rounded-2xl mt-8 border border-white/10 max-w-md">
              <p className="text-xs font-black uppercase tracking-widest text-gold mb-2">📢 Ajude o Açaí da Hora!</p>
              <p className="text-sm text-white/70 italic">
                Deixe seu comentário e sua foto no Google! Sua avaliação nos ajuda a crescer e levar mais qualidade para todos.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a 
              href="https://g.page/r/CY5AelCPBRQCEAE/review" 
              target="_blank"
              className="btn-shine bg-white text-acai px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl transition-all hover:bg-gold hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Avaliar Unidade Francês
              <ChevronRight size={18} />
            </a>
            <a 
              href="https://g.page/r/CY5AelCPBRQCEAE/review" 
              target="_blank"
              className="btn-shine bg-white text-acai px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl transition-all hover:bg-gold hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Avaliar Unidade Maceió
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex overflow-x-auto no-scrollbar gap-8 pb-12 snap-x snap-mandatory">
            <div className="flex gap-8">
              {reviews.map((rev, i) => (
                <div 
                  key={i}
                  className="bg-white text-acai p-10 rounded-[40px] shadow-2xl flex flex-col justify-between min-w-[320px] md:min-w-[400px] snap-center"
                >
                  <div>
                    <div className="flex gap-1 text-gold mb-6 text-xl">
                      {[...Array(rev.rating)].map((_, i) => <Star key={i} size={20} fill="#FFD700" color="#FFD700" />)}
                    </div>
                    <p className="text-xl font-medium italic mb-8 leading-tight">"{rev.comment}"</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-acai/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-cream border-2 border-pistache" />
                    <div>
                      <h4 className="font-black text-sm uppercase">{rev.name}</h4>
                      <span className="text-acai/40 text-[10px] font-bold uppercase tracking-widest">{rev.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Arraste para o lado para ver mais</p>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777245877/WhatsApp_Image_2026-04-26_at_8.23.08_PM_bw6v7s.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777245877/WhatsApp_Image_2026-04-26_at_8.23.09_PM_1_aohgva.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777245877/WhatsApp_Image_2026-04-26_at_8.23.09_PM_sdr6qn.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777245877/WhatsApp_Image_2026-04-26_at_8.23.09_PM_2_axhplz.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777245877/WhatsApp_Image_2026-04-26_at_8.23.09_PM_4_ntyk83.jpg",
    "https://res.cloudinary.com/dqukldtq1/image/upload/v1777245877/WhatsApp_Image_2026-04-26_at_8.23.09_PM_3_iq0xmh.jpg"
  ];

  return (
    <section id="instagram" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
             <span className="bg-acai text-white px-3 py-1 rounded-md font-black text-xs uppercase tracking-widest mb-4 inline-block">@acai_dahora</span>
             <h2 className="text-5xl md:text-7xl text-acai leading-[0.9] font-black uppercase tracking-tighter">Siga-nos no <br /><span className="text-indigo italic">Instagram</span></h2>
          </div>
          <a 
            href="https://www.instagram.com/acai_dahora?igsh=ZjM2eTYwcXpjYW95" 
            target="_blank"
            className="flex items-center gap-3 bg-acai text-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-indigo transition-all group"
          >
            Seguir no Instagram
            <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing">
          <motion.div 
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            className="flex gap-6 w-max py-4"
          >
            {images.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative w-[280px] md:w-[350px] aspect-square rounded-[40px] overflow-hidden shadow-xl border-4 border-white shrink-0 pointer-events-none"
              >
                <img 
                  src={img} 
                  alt={`Instagram Feed ${i}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-acai/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <Instagram className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Small hint for interaction */}
        <div className="mt-8 text-center">
          <p className="text-acai/20 text-[10px] font-black uppercase tracking-[0.4em]">Arraste para o lado para ver mais</p>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  const units = [
    {
      id: "frances",
      title: "Praia do Francês",
      address: "Rua carapeba, Lote 13/01, Galeria Lisboa (La Rue).",
      image: "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779060877/WhatsApp_Image_2026-05-17_at_4.26.42_PM_brgifq.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.398579973809!2d-35.842777!3d-9.771234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70138290f67a65b%3A0x633d7350764e526a!2sPraia%20do%20Franc%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
    },
    {
      id: "maceio",
      title: "Orla de Maceió",
      address: "Av. Álvaro Otacílio, Jatiúca (Próximo à Orla).",
      image: "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779060876/WhatsApp_Image_2026-05-17_at_8.17.54_PM_ahizvy.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2798606404284!2d-35.706173!3d-9.657271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701406834b6e51f!2zQXZuw61kYSBBbHZhcm8gT3RhY8OtbGlvLCBNYWNlaMOzIC0gQUw!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
    }
  ];

  return (
    <section id="localizacao" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-pistache text-white px-4 py-1 rounded-md font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-sm">
            Nossas Unidades
          </span>
          <h2 className="text-6xl md:text-7xl text-acai leading-tight font-black uppercase tracking-tighter">
            Onde encontrar o <br /><span className="text-indigo italic">Sabor da Hora</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {units.map((unit) => (
            <motion.div 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream rounded-[40px] overflow-hidden flex flex-col shadow-xl group border border-acai/5"
            >
              <div className="h-[350px] overflow-hidden">
                <img 
                  src={unit.image} 
                  alt={unit.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black text-acai uppercase tracking-tight mb-4 flex items-center gap-3">
                    <MapPin className="text-gold" size={28} />
                    {unit.title}
                  </h3>
                  <p className="text-acai/70 font-medium text-lg leading-relaxed mb-8 italic">
                    {unit.address}
                  </p>
                </div>
                <div className="flex flex-col gap-4 px-6 py-4 bg-white/50 rounded-2xl w-fit">
                    <Clock size={20} className="text-indigo" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-acai/40">Horário de Funcionamento</p>
                      <div className="text-xs font-black text-acai uppercase space-y-1">
                        {unit.id === "frances" ? (
                          <>
                            <p>Dom a Qui: 15h às 22h</p>
                            <p>Sex e Sáb: 15h às 23h</p>
                          </>
                        ) : (
                          <>
                            <p>Seg e Ter: 14h às 22h</p>
                            <p>Qua a Dom: 08h às 22h</p>
                          </>
                        )}
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Map Section */}
        <div className="h-[500px]">
           <div className="h-full rounded-[40px] overflow-hidden border-[8px] border-cream shadow-2xl relative">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl z-10 shadow-sm border border-acai/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-acai/40">Visite nossas unidades</p>
                <p className="text-xs font-black text-acai uppercase">Praia do Francês & Maceió</p>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125820.6710444983!2d-35.850000!3d-9.700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701406834b6e51f!2zTWFjZWnDsSwgQUw!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.1] grayscale-[0.2]"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

const QuickInfoBar = () => {
  const tags = ["Sem Lactose", "Entrega Imediata", "Frutas Frescas", "Pistache Torrado", "Montagem Express"];
  return (
    <div className="bg-acai text-white py-6 flex flex-wrap items-center px-8 gap-8 border-y border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 min-w-max">
        <MapPin size={20} className="text-gold" />
        <span className="text-sm font-black uppercase tracking-widest">Alagoas, Brasil</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map(tag => (
          <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-colors whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-4">
        <span className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">Siga-nos</span>
        <a href="https://www.instagram.com/acai_dahora?igsh=ZjM2eTYwcXpjYW95" target="_blank" className="font-display font-black text-sm text-gold hover:text-white transition-colors">@acai_dahora</a>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Onde vocês estão localizados?", a: "Estamos no complexo La Rue, na Praia do Francês. É um dos pontos mais charmosos da vila!" },
    { q: "Quais os tamanhos disponíveis?", a: "Temos potes variando de 200ml até 500ml, perfeitos para sua fome." },
    { q: "O açaí contém xarope de guaraná?", a: "Nosso açaí é do tipo premium, batido com o mínimo de adição para manter a cremosidade e o sabor autêntico." },
    { q: "Vocês entregam em toda a região?", a: "Sim! Entregamos em toda a Praia do Francês e arredores exclusivamente via iFood." },
    { q: "Quais as opções de frutas?", a: "Temos frutas sempre frescas: Banana, morango e kiwi. Tudo selecionado diariamente." },
    { q: "Têm opções sem lactose?", a: "Sim, nosso açaí é base fruta, totalmente livre de derivados de leite em sua forma pura." },
    { q: "Aceitam cartões e PIX?", a: "Com certeza. Aceitamos todas as bandeiras de cartão de crédito, débito e também pagamentos via PIX para sua comodidade." },
    { q: "O pistache é doce ou salgado?", a: "Utilizamos pistache torrado e granulado com um toque levemente salgado para criar o contraste perfeito com o doce do açaí e do creme." },
    { q: "Posso personalizar meu adicional?", a: "Com certeza! Nosso lema é: monte do seu jeito. Temos mais de 20 opções de acompanhamentos." }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-acai">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-5xl md:text-7xl text-acai mb-4 leading-none">Perguntas <br /><span className="text-indigo italic">Frequentes</span></h2>
          <p className="text-acai/50 font-bold uppercase tracking-widest text-[10px] mt-4">Tudo o que você precisa saber</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[24px] border border-acai/5 shadow-sm transition-all duration-300 hover:shadow-md ${openIndex === i ? 'ring-2 ring-indigo border-transparent' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-start gap-4"
              >
                <span className="font-black text-acai leading-tight text-lg">{faq.q}</span>
                <ChevronDown 
                  size={24} 
                  className={`text-gold shrink-0 transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-acai/60 font-medium leading-relaxed italic"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoogleImportance = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <div className="card-vibrant p-8 md:p-16 border-4 border-gold/20 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-pistache/10 rounded-full blur-3xl animate-pulse" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-acai text-gold px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-8">
              <Star size={14} fill="currentColor" />
              Sua voz é nosso combustível
              <Star size={14} fill="currentColor" />
            </div>
            
            <h2 className="text-4xl md:text-6xl text-acai font-black uppercase tracking-tighter leading-[0.9] mb-8">
              A Importância da sua <br /><span className="text-indigo italic">Avaliação no Google</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-acai/70 font-medium leading-relaxed">
                O seu feedback no Google é o coração da nossa açaiteria! 🌟 Quando você nos avalia, não está apenas deixando um comentário, você está ajudando o <span className="text-acai font-black uppercase">Açaí da Hora</span> a:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-acai/5">
                    <Sparkles className="text-gold" size={24} />
                  </div>
                  <h4 className="font-black text-acai uppercase text-[10px] tracking-widest">Atrair Turistas</h4>
                  <p className="text-[10px] text-acai/50 uppercase font-bold mt-1">Sermos recomendados na Vila</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-acai/5">
                    <UtensilsCrossed className="text-indigo" size={24} />
                  </div>
                  <h4 className="font-black text-acai uppercase text-[10px] tracking-widest">Aprimorar o Sabor</h4>
                  <p className="text-[10px] text-acai/50 uppercase font-bold mt-1">Ouvimos cada sugestão sua</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-acai/5">
                    <Star className="text-pistache" size={24} />
                  </div>
                  <h4 className="font-black text-acai uppercase text-[10px] tracking-widest">Engajar a Equipe</h4>
                  <p className="text-[10px] text-acai/50 uppercase font-bold mt-1">Elogios motivam nosso time</p>
                </div>
              </div>

              <p className="text-acai/60 italic font-medium">
                "Nosso objetivo é ser o melhor açaí da Praia do Francês, e sua nota 5 estrelas nos coloca um passo mais perto desse sonho."
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4">
              <motion.a 
                href="https://g.page/r/CY5AelCPBRQCEAE/review" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-shine bg-acai text-white px-12 py-6 rounded-[30px] font-black uppercase text-sm tracking-widest shadow-2xl flex items-center gap-4 group"
              >
                Deixar minha Avaliação Agora
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <p className="text-[10px] font-black text-acai/30 uppercase tracking-[0.3em]">Leva menos de 1 minuto!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-acai text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="logo-shine logo-reflection logo-float bg-white rounded-full p-1 shadow-sm border border-white/10">
              <img 
                src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777239013/WhatsApp_Image_2026-04-26_at_5.42.18_PM_1_avaoht.jpg" 
                alt="Açaí da Hora Logo" 
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter">Açaí da Hora</span>
          </div>
          <p className="text-white/60 max-w-sm leading-relaxed mb-6 italic">
            "Onde cada colherada é uma viagem ao sabor autêntico do Francês."
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/acai_dahora?igsh=ZjM2eTYwcXpjYW95" 
              target="_blank"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-acai transition-all"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/5582991092725" 
              target="_blank"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-acai transition-all"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-pistache uppercase tracking-widest text-xs">Links Rápidos</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Início</a></li>
            <li><a href="#cardapio" className="text-white/60 hover:text-white transition-colors">Cardápio</a></li>
            <li><a href="#avaliacoes" className="text-white/60 hover:text-white transition-colors">Avaliações</a></li>
            <li><a href="#localizacao" className="text-white/60 hover:text-white transition-colors">Onde estamos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-pistache uppercase tracking-widest text-xs">Contatos</h4>
          <ul className="space-y-4 text-white/60">
            <li>Marechal Deodoro, Alagoas</li>
            <li>contato@acaidahora.com.br</li>
            <li>(82) 99999-9999</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© {new Date().getFullYear()} Açaí da Hora. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ na Praia do Francês.</p>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/5582991092725"
      target="_blank"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-float shadow-2xl"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

const FloatingIFood = () => {
  return null;
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative" translate="no">
      <Navbar />
      <Hero />
      <CremesGourmetSection />
      <FullWidthVideoHighlight />
      <MenuSection />
      <Reviews />
      <FactorySection />
      <Gallery />
      <QuickInfoBar />
      <LocationSection />
      <FAQ />
      <GoogleImportance />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
