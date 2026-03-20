/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";

type Language = "en" | "es";

const translations = {
  en: {
    // Header
    nav: {
      howItWorks: "How It Works",
      projects: "Projects",
      vision: "Vision",
      pricing: "Pricing",
      team: "Team",
      joinWaitlist: "Join Waitlist",
    },
    // Hero
    hero: {
      tagline: "Beta launching 2026 · Early Access",
      title1: "Build Your Own Engineering Tools",
      title2: "with AI",
      description:
        "The platform where construction professionals create custom AI applications, from budget estimates to 3D models, without writing code.",
      vibeEngineering: "Vibe Engineering is here.",
      cta1: "Get Early Access →",
      cta2: "Read Our Master Plan",
    },
    // Metrics
    metrics: {
      yearsBIM: "Years in BIM/VDC",
      documentedROI: "Documented ROI",
      professionalsTrained: "Professionals Trained",
      activeDashboards: "Active Dashboards",
    },
    // How It Works
    howItWorks: {
      label: "How It Works",
      title: "From Conversation to Custom Tool",
      step: "Step",
      steps: [
        {
          title: "Tell Us Your Problem",
          desc: "Start a conversation via WhatsApp or the platform. Describe your workflow, upload PDFs, share your project challenges. Our agents listen and learn.",
        },
        {
          title: "We Build Your Tool",
          desc: "Our AI agents design a custom application tailored to your specific needs: budget trackers, quantity takeoffs, schedule monitors, BIM processors.",
        },
        {
          title: "It Works For You 24/7",
          desc: "Your tool monitors, processes, alerts, and reports. It learns your patterns, aligns with project objectives, and becomes more useful every day.",
        },
      ],
    },
    // Projects
    projects: {
      label: "Built on INFRATEK",
      title: "Real Tools, Real Projects",
      description:
        "Every tool below was created on our platform. Each one solves a specific problem for a real company.",
      items: [
        {
          name: "WARI",
          tagline: "AI Employee for Construction",
          desc: "Autonomous agent that monitors projects 24/7. Reads drawings, tracks budgets, alerts risks, documents everything in La Plaza, the social feed for construction intelligence.",
          status: "In Development",
        },
        {
          name: "Jarvis / BIMSearch",
          tagline: "RFP Intelligence System",
          desc: "Scans government portals (SAM.gov, state procurement) for BIM/VDC opportunities. Qualifies leads, scores relevance, and delivers them to your pipeline.",
          status: "Live. Paid Client",
        },
        {
          name: "WAGI",
          tagline: "Construction Intelligence Platform",
          desc: "Web Assembly AI platform where project data flows between agents. Cost tracking, planning, scheduling, all connected through a common data environment.",
          status: "In Development",
        },
        {
          name: "Your Tool",
          tagline: "Built for your specific workflow",
          desc: "Quantity takeoffs? Schedule optimization? Document processing? Compliance checking? Tell us your problem and we'll build the solution on our platform.",
          status: "Join the Waitlist →",
        },
      ],
    },
    // Vision
    vision: {
      label: "Our Master Plan",
      title: "What We Believe",
      intro1: "Before we tell you",
      how: "how",
      intro2: ", we need to tell you",
      why: "why",
      p1: "The construction industry is a $13 trillion global machine running on processes that haven't fundamentally changed in decades. The rework, the busted budgets, the blown schedules: these aren't unavoidable costs. They're data problems. And data problems are solvable.",
      p2: "We believe that project managers and superintendents should be strategic leaders, not full-time firefighters. Your expertise should solve the unique challenges of a project, not get buried in spreadsheets and paperwork.",
      stage1Title: "Stage 1: We Start Where It Hurts Most",
      conductorsHat: "\"The Conductor's Hat\"",
      stage1Desc:
        "Each project needs ONE operator, a person who puts on the conductor's hat and learns to pilot the AI system. It's not about replacing humans. It's about giving every professional the power to build tools that were impossible before.",
      stage2Title: "Stage 2: The Platform Opens",
      stage2Desc:
        "Like Replit democratized coding, INFRATEK democratizes engineering software. You don't need a development team. You need a conversation and a clear objective. Our agents handle the rest.",
      stage3Title: "Stage 3: The Ecosystem",
      stage3Desc:
        "A marketplace of AI tools built by the industry, for the industry. The best quantity takeoff agent. The best schedule optimizer. The best compliance checker. All sharing data through a common environment, all improving together.",
      stage4Title: "Stage 4: The Future (7-10 Years)",
      stage4Desc1:
        "Every construction software company will sell agents, not applications. Autodesk, Procore, Trimble: they'll all become agent companies. INFRATEK is building this future",
      stage4Desc2: "today",
      quote:
        "\"If you've ever watched a brilliant superintendent spend their day buried in paperwork instead of leading... if you've ever wondered why construction productivity has gone backward while every other industry has surged forward... if you believe this essential, civilization-building industry deserves better than the status quo. then let's build it together.\"",
      closing: "Let's not waste it.",
    },
    // Economics
    economics: {
      title: "The Economics of AI Agents",
      headers: {
        metric: "Metric",
        traditional: "Traditional",
        infratek: "INFRATEK.AI",
      },
      rows: [
        ["Time to Build a Tool", "3-6 Months", "Days"],
        ["Cost Structure", "Dev Team ($150K+/yr)", "Platform Fee"],
        ["Customization", "Generic SaaS", "Built for YOUR workflow"],
        ["Scalability", "Hiring Bottleneck", "On Demand"],
        ["Data Integration", "Manual / Siloed", "Automatic / Connected"],
      ],
    },
    // Pricing
    pricing: {
      label: "Early Access",
      title: "Be First In Line",
      description:
        "We're opening beta access in waves. Sign up to reserve your spot.",
      waitlist: {
        label: "You're here",
        name: "Waitlist",
        price: "Free",
        subtitle: "7-day free trial upon access",
        features: [
          "Position based on signup order and referrals",
          "Access opens in waves, 2026",
          "50 credits to explore the platform",
          "Share your referral link. each signup moves you up 5 spots",
        ],
      },
      founding: {
        label: "50 spots only",
        name: "Founding Member",
        originalPrice: "$199",
        price: "$99",
        subtitle: "+ LinkedIn repost of our demo",
        features: [
          "Skip the waitlist, immediate beta access",
          "100 credits to build and test your tools",
          "Hands-on support from the founder",
          "50% off your subscription, permanently",
          "Direct input on what we build next",
        ],
        cta: "Claim Your Spot. $99 →",
      },
      design: {
        label: "5 partnerships only",
        name: "Design Partner",
        price: "$1K/mo",
        subtitle: "Custom engagement per user",
        features: [
          "Custom workflow integration for your team",
          "Dedicated human operator (the founder)",
          "Unlimited credits during partnership",
          "Tools designed specifically for your projects",
          "50% off subscription for 24 months",
        ],
        cta: "Book a Discovery Call →",
      },
    },
    // Team
    team: {
      label: "The Team",
      title: "Built by Someone Who's Been on the Jobsite",
      founder: {
        name: "Sergio Villanueva Meyer",
        role: "Founder & CEO",
        achievements: [
          "15+ years leading BIM/VDC implementation across LATAM and USA",
          "Stanford VDC Certificate · CPMAI · B.Arch + M.S. Construction Management (University of Florida)",
          "Built the FIRST BIM department in Peru (COSAPI). $2.5M documented ROI, 50+ professionals trained",
          "Multi-agent AI systems architect. pioneering agentic infrastructure for AEC",
        ],
        bio: "Sergio has lived the 3 AM spreadsheet panic. He's built BIM departments from zero, trained teams across continents, and documented millions in ROI. Now he's building the platform that puts that same power in everyone's hands, powered by AI agents that never sleep.",
      },
    },
    // Course
    course: {
      label: "Coming Soon",
      title: "Machine Learning for Construction",
      description:
        "From a single neuron to prompt engineering. SVG, gradient descent, normalization, optimization, all explained for construction professionals. Context engineering for the AEC industry.",
      cta: "Get Notified →",
    },
    // Waitlist section
    waitlistSection: {
      title: "Join the Waitlist",
      description:
        "We're opening access in waves. Sign up to reserve your spot.",
      referral: "Refer colleagues to move up. each referral jumps you 5 positions.",
      loading: "Waitlist widget loading...",
      poweredBy: "Powered by",
      customIntegration: "Need a custom integration for your team?",
      bookCall: "Book a Discovery Call",
    },
    // Footer
    footer: {
      copyright: "© 2026",
      company: "INFRATEK LLC",
      tagline: ". Designing agentic infrastructure for AEC.",
      linkedin: "LinkedIn",
      contact: "Contact",
    },
  },
  es: {
    // Header
    nav: {
      howItWorks: "Cómo Funciona",
      projects: "Proyectos",
      vision: "Visión",
      pricing: "Precios",
      team: "Equipo",
      joinWaitlist: "Únete a la Lista",
    },
    // Hero
    hero: {
      tagline: "Lanzamiento beta 2026 · Acceso Anticipado",
      title1: "Construye Tus Propias Herramientas de Ingeniería",
      title2: "con IA",
      description:
        "La plataforma donde los profesionales de la construcción crean aplicaciones de IA personalizadas, desde estimaciones de presupuesto hasta modelos 3D, sin escribir código.",
      vibeEngineering: "La Ingeniería Conversacional llegó.",
      cta1: "Acceso Anticipado →",
      cta2: "Lee Nuestro Plan Maestro",
    },
    // Metrics
    metrics: {
      yearsBIM: "Años en BIM/VDC",
      documentedROI: "ROI Documentado",
      professionalsTrained: "Profesionales Capacitados",
      activeDashboards: "Dashboards Activos",
    },
    // How It Works
    howItWorks: {
      label: "Cómo Funciona",
      title: "De Conversación a Herramienta Personalizada",
      step: "Paso",
      steps: [
        {
          title: "Cuéntanos Tu Problema",
          desc: "Inicia una conversación por WhatsApp o la plataforma. Describe tu flujo de trabajo, sube PDFs, comparte los desafíos de tu proyecto. Nuestros agentes escuchan y aprenden.",
        },
        {
          title: "Construimos Tu Herramienta",
          desc: "Nuestros agentes de IA diseñan una aplicación personalizada a tus necesidades específicas: rastreadores de presupuesto, cuantificaciones, monitores de cronograma, procesadores BIM.",
        },
        {
          title: "Trabaja Para Ti 24/7",
          desc: "Tu herramienta monitorea, procesa, alerta e informa. Aprende tus patrones, se alinea con los objetivos del proyecto y se vuelve más útil cada día.",
        },
      ],
    },
    // Projects
    projects: {
      label: "Construido en INFRATEK",
      title: "Herramientas Reales, Proyectos Reales",
      description:
        "Cada herramienta a continuación fue creada en nuestra plataforma. Cada una resuelve un problema específico para una empresa real.",
      items: [
        {
          name: "WARI",
          tagline: "Empleado IA para Construcción",
          desc: "Agente autónomo que monitorea proyectos 24/7. Lee planos, rastrea presupuestos, alerta riesgos, documenta todo en La Plaza. el feed social para inteligencia de construcción.",
          status: "En Desarrollo",
        },
        {
          name: "Jarvis / BIMSearch",
          tagline: "Sistema de Inteligencia RFP",
          desc: "Escanea portales gubernamentales (SAM.gov, licitaciones estatales) en busca de oportunidades BIM/VDC. Califica prospectos, puntúa relevancia y los entrega a tu pipeline.",
          status: "Activo. Cliente de Pago",
        },
        {
          name: "WAGI",
          tagline: "Plataforma de Inteligencia para Construcción",
          desc: "Plataforma de IA Web Assembly donde los datos del proyecto fluyen entre agentes. Seguimiento de costos, planificación, programación, todo conectado a través de un entorno de datos común.",
          status: "En Desarrollo",
        },
        {
          name: "Tu Herramienta",
          tagline: "Construida para tu flujo de trabajo específico",
          desc: "¿Cuantificaciones? ¿Optimización de cronogramas? ¿Procesamiento de documentos? ¿Verificación de cumplimiento? Cuéntanos tu problema y construiremos la solución en nuestra plataforma.",
          status: "Únete a la Lista →",
        },
      ],
    },
    // Vision
    vision: {
      label: "Nuestro Plan Maestro",
      title: "Lo Que Creemos",
      intro1: "Antes de decirte",
      how: "cómo",
      intro2: ", necesitamos decirte",
      why: "por qué",
      p1: "La industria de la construcción es una máquina global de $13 billones que funciona con procesos que no han cambiado fundamentalmente en décadas. El retrabajo, los presupuestos reventados, los cronogramas volados: no son costos inevitables. Son problemas de datos. Y los problemas de datos tienen solución.",
      p2: "Creemos que los gerentes de proyecto y superintendentes deberían ser líderes estratégicos, no bomberos de tiempo completo. Tu experiencia debería resolver los desafíos únicos de un proyecto, no quedar enterrada en hojas de cálculo y papeleo.",
      stage1Title: "Etapa 1: Empezamos Donde Más Duele",
      conductorsHat: "\"El Sombrero del Conductor\"",
      stage1Desc:
        "Cada proyecto necesita UN operador, una persona que se ponga el sombrero del conductor y aprenda a pilotar el sistema de IA. No se trata de reemplazar humanos. Se trata de darle a cada profesional el poder de construir herramientas que antes eran imposibles.",
      stage2Title: "Etapa 2: La Plataforma Se Abre",
      stage2Desc:
        "Así como Replit democratizó la programación, INFRATEK democratiza el software de ingeniería. No necesitas un equipo de desarrollo. Necesitas una conversación y un objetivo claro. Nuestros agentes se encargan del resto.",
      stage3Title: "Etapa 3: El Ecosistema",
      stage3Desc:
        "Un marketplace de herramientas de IA construido por la industria, para la industria. El mejor agente de cuantificación. El mejor optimizador de cronogramas. El mejor verificador de cumplimiento. Todos compartiendo datos a través de un entorno común, todos mejorando juntos.",
      stage4Title: "Etapa 4: El Futuro (7-10 Años)",
      stage4Desc1:
        "Cada empresa de software de construcción venderá agentes, no aplicaciones. Autodesk, Procore, Trimble: todos se convertirán en empresas de agentes. INFRATEK está construyendo este futuro",
      stage4Desc2: "hoy",
      quote:
        "\"Si alguna vez has visto a un superintendente brillante pasar su día enterrado en papeleo en lugar de liderar... si alguna vez te has preguntado por qué la productividad de la construcción ha ido hacia atrás mientras todas las demás industrias han avanzado... si crees que esta industria esencial, constructora de civilización, merece algo mejor que el status quo, entonces construyámoslo juntos.\"",
      closing: "No lo desperdiciemos.",
    },
    // Economics
    economics: {
      title: "La Economía de los Agentes de IA",
      headers: {
        metric: "Métrica",
        traditional: "Tradicional",
        infratek: "INFRATEK.AI",
      },
      rows: [
        ["Tiempo para Construir una Herramienta", "3-6 Meses", "Días"],
        ["Estructura de Costos", "Equipo de Dev ($150K+/año)", "Tarifa de Plataforma"],
        ["Personalización", "SaaS Genérico", "Construido para TU flujo"],
        ["Escalabilidad", "Cuello de Botella de Contratación", "Bajo Demanda"],
        ["Integración de Datos", "Manual / Aislado", "Automático / Conectado"],
      ],
    },
    // Pricing
    pricing: {
      label: "Acceso Anticipado",
      title: "Sé el Primero en la Fila",
      description:
        "Estamos abriendo acceso beta en oleadas. Regístrate para reservar tu lugar.",
      waitlist: {
        label: "Estás aquí",
        name: "Lista de Espera",
        price: "Gratis",
        subtitle: "7 días de prueba gratis al acceder",
        features: [
          "Posición basada en orden de registro y referidos",
          "El acceso abre en oleadas. 2026",
          "50 créditos para explorar la plataforma",
          "Comparte tu enlace de referido; cada registro te sube 5 lugares",
        ],
      },
      founding: {
        label: "Solo 50 lugares",
        name: "Miembro Fundador",
        originalPrice: "$199",
        price: "$99",
        subtitle: "+ Repost en LinkedIn de nuestro demo",
        features: [
          "Salta la lista de espera, acceso beta inmediato",
          "100 créditos para construir y probar tus herramientas",
          "Soporte directo del fundador",
          "50% de descuento en tu suscripción, permanentemente",
          "Input directo en lo que construimos después",
        ],
        cta: "Reclama Tu Lugar. $99 →",
      },
      design: {
        label: "Solo 5 asociaciones",
        name: "Socio de Diseño",
        price: "$1K/mes",
        subtitle: "Compromiso personalizado por usuario",
        features: [
          "Integración de flujo de trabajo personalizada para tu equipo",
          "Operador humano dedicado (el fundador)",
          "Créditos ilimitados durante la asociación",
          "Herramientas diseñadas específicamente para tus proyectos",
          "50% de descuento en suscripción por 24 meses",
        ],
        cta: "Agenda una Llamada de Descubrimiento →",
      },
    },
    // Team
    team: {
      label: "El Equipo",
      title: "Construido por Alguien que Ha Estado en la Obra",
      founder: {
        name: "Sergio Villanueva Meyer",
        role: "Fundador & CEO",
        achievements: [
          "15+ años liderando implementación BIM/VDC en LATAM y USA",
          "Stanford VDC Certificate · CPMAI · B.Arch + M.S. Construction Management (University of Florida)",
          "Construyó el PRIMER departamento BIM en Perú (COSAPI). $2.5M ROI documentado, 50+ profesionales capacitados",
          "Arquitecto de sistemas de IA multi-agente. pionero en infraestructura agéntica para AEC",
        ],
        bio: "Sergio ha vivido el pánico de las 3 AM con hojas de cálculo. Ha construido departamentos BIM desde cero, capacitado equipos en varios continentes y documentado millones en ROI. Ahora está construyendo la plataforma que pone ese mismo poder en las manos de todos, impulsada por agentes de IA que nunca duermen.",
      },
    },
    // Course
    course: {
      label: "Próximamente",
      title: "Machine Learning para Construcción",
      description:
        "Desde una sola neurona hasta ingeniería de prompts. SVG, descenso de gradiente, normalización, optimización, explicado para profesionales de la construcción. Ingeniería de contexto para la industria AEC.",
      cta: "Recibe Notificaciones →",
    },
    // Waitlist section
    waitlistSection: {
      title: "Únete a la Lista de Espera",
      description:
        "Estamos abriendo acceso en oleadas. Regístrate para reservar tu lugar.",
      referral: "Refiere colegas para avanzar; cada referido te sube 5 posiciones.",
      loading: "Cargando widget de lista de espera...",
      poweredBy: "Powered by",
      customIntegration: "¿Necesitas una integración personalizada para tu equipo?",
      bookCall: "Agenda una Llamada de Descubrimiento",
    },
    // Footer
    footer: {
      copyright: "© 2026",
      company: "INFRATEK LLC",
      tagline: ". Diseñando infraestructura agéntica para AEC.",
      linkedin: "LinkedIn",
      contact: "Contacto",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("infratek-lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLang(savedLang);
    }
  }, []);

  // Save language preference and update document lang attribute
  useEffect(() => {
    localStorage.setItem("infratek-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  const metricsData = [
    { metric: "15+", label: t.metrics.yearsBIM },
    { metric: "$2.5M", label: t.metrics.documentedROI },
    { metric: "50+", label: t.metrics.professionalsTrained },
    { metric: "14", label: t.metrics.activeDashboards },
  ];

  const howItWorksData = [
    { step: "1", ...t.howItWorks.steps[0] },
    { step: "2", ...t.howItWorks.steps[1] },
    { step: "3", ...t.howItWorks.steps[2] },
  ];

  return (
    <main className="min-h-screen">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-cream-dark)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/infratek-logo-icon.png"
              alt="INFRATEK"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="text-xl font-semibold tracking-wide text-[var(--color-charcoal)]">
              INFRATEK<span className="text-[var(--color-accent)]">.AI</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal-light)]">
            <a href="#how" className="hover:text-[var(--color-accent)] transition">
              {t.nav.howItWorks}
            </a>
            <a href="#projects" className="hover:text-[var(--color-accent)] transition">
              {t.nav.projects}
            </a>
            <a href="#vision" className="hover:text-[var(--color-accent)] transition">
              {t.nav.vision}
            </a>
            <a href="#pricing" className="hover:text-[var(--color-accent)] transition">
              {t.nav.pricing}
            </a>
            <a href="#team" className="hover:text-[var(--color-accent)] transition">
              {t.nav.team}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] hover:border-[var(--color-charcoal-light)] transition text-sm"
              aria-label="Toggle language"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-charcoal-light)]">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className={lang === "en" ? "font-semibold text-[var(--color-charcoal)]" : "text-[var(--color-charcoal-light)]"}>
                EN
              </span>
              <span className="text-[var(--color-charcoal-light)]">|</span>
              <span className={lang === "es" ? "font-semibold text-[var(--color-charcoal)]" : "text-[var(--color-charcoal-light)]"}>
                ES
              </span>
            </button>
            <a
              href="#waitlist"
              className="bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--color-accent-dark)] transition"
            >
              {t.nav.joinWaitlist}
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-6">
          {t.hero.tagline}
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 text-[var(--color-charcoal)]">
          {t.hero.title1}
          <br />
          <span className="text-[var(--color-accent)]">{t.hero.title2}</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-charcoal-light)] max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description} <em>{t.hero.vibeEngineering}</em>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[var(--color-accent-dark)] transition shadow-lg shadow-[var(--color-accent)]/20"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#vision"
            className="border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[var(--color-charcoal)] hover:text-white transition"
          >
            {t.hero.cta2}
          </a>
        </div>
      </section>

      {/* ─── METRICS BAR ─── */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metricsData.map((item) => (
            <div key={item.label}>
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-accent)]">
                {item.metric}
              </p>
              <p className="text-sm text-[var(--color-charcoal-light)] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
          {t.howItWorks.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-[var(--color-charcoal)]">
          {t.howItWorks.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {howItWorksData.map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">
                {idx === 0 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                )}
              </div>
              <div className="text-sm text-[var(--color-accent)] font-semibold mb-2">
                {t.howItWorks.step} {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-charcoal)]">
                {item.title}
              </h3>
              <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
            {t.projects.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-charcoal)]">
            {t.projects.title}
          </h2>
          <p className="text-[var(--color-charcoal-light)] mb-16 max-w-2xl">
            {t.projects.description}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-[var(--color-cream-dark)] p-8 hover:border-[var(--color-accent)]/30 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-[var(--color-charcoal)]">
                    {project.name}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.status.includes("Live") || project.status.includes("Activo")
                        ? "bg-green-100 text-green-700"
                        : project.status.includes("Join") || project.status.includes("Únete")
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE VISION / MASTER PLAN ─── */}
      <section id="vision" className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
          {t.vision.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[var(--color-charcoal)]">
          {t.vision.title}
        </h2>

        <div className="space-y-6 text-[var(--color-charcoal)] leading-relaxed text-lg">
          <p>
            {t.vision.intro1} <em>{t.vision.how}</em>{t.vision.intro2} <em>{t.vision.why}</em>.
          </p>

          <p>{t.vision.p1}</p>

          <p>{t.vision.p2}</p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            {t.vision.stage1Title}
          </h3>
          <p className="text-[var(--color-accent)] italic">
            {t.vision.conductorsHat}
          </p>
          <p>{t.vision.stage1Desc}</p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            {t.vision.stage2Title}
          </h3>
          <p>{t.vision.stage2Desc}</p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            {t.vision.stage3Title}
          </h3>
          <p>{t.vision.stage3Desc}</p>

          <h3 className="text-2xl font-semibold pt-8 text-[var(--color-charcoal)]">
            {t.vision.stage4Title}
          </h3>
          <p>
            {t.vision.stage4Desc1} <em>{t.vision.stage4Desc2}</em>.
          </p>

          <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 mt-8">
            <p className="italic">{t.vision.quote}</p>
          </div>

          <p className="font-semibold text-xl pt-4">{t.vision.closing}</p>
        </div>
      </section>

      {/* ─── ECONOMICS ─── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[var(--color-charcoal)]">
            {t.economics.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-cream-dark)]">
                  <th className="py-4 pr-6 text-[var(--color-charcoal-light)] text-sm uppercase tracking-wider">
                    {t.economics.headers.metric}
                  </th>
                  <th className="py-4 pr-6 text-[var(--color-charcoal-light)] text-sm uppercase tracking-wider">
                    {t.economics.headers.traditional}
                  </th>
                  <th className="py-4 text-[var(--color-accent)] text-sm uppercase tracking-wider">
                    {t.economics.headers.infratek}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-charcoal)]">
                {t.economics.rows.map(([metric, trad, infra]) => (
                  <tr
                    key={metric}
                    className="border-b border-[var(--color-cream-dark)]"
                  >
                    <td className="py-4 pr-6 font-medium">{metric}</td>
                    <td className="py-4 pr-6 text-[var(--color-charcoal-light)]">
                      {trad}
                    </td>
                    <td className="py-4 font-semibold text-[var(--color-accent)]">
                      {infra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4 text-center">
          {t.pricing.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-[var(--color-charcoal)]">
          {t.pricing.title}
        </h2>
        <p className="text-[var(--color-charcoal-light)] text-center mb-16 max-w-xl mx-auto">
          {t.pricing.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Waitlist */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--color-cream-dark)]">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-charcoal-light)] mb-4">
              {t.pricing.waitlist.label}
            </p>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--color-charcoal)]">
              {t.pricing.waitlist.name}
            </h3>
            <p className="text-3xl font-bold text-[var(--color-charcoal)] mb-2">
              {t.pricing.waitlist.price}
            </p>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
              {t.pricing.waitlist.subtitle}
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-charcoal)]">
              {t.pricing.waitlist.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Founding Member */}
          <div className="bg-white rounded-xl p-8 shadow-md border-2 border-[var(--color-accent)] relative">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold mb-4">
              {t.pricing.founding.label}
            </p>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--color-charcoal)]">
              {t.pricing.founding.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm line-through text-[var(--color-charcoal-light)]">
                {t.pricing.founding.originalPrice}
              </span>
              <span className="text-3xl font-bold text-[var(--color-accent)]">
                {t.pricing.founding.price}
              </span>
            </div>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
              {t.pricing.founding.subtitle}
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-charcoal)]">
              {t.pricing.founding.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="block mt-8 bg-[var(--color-accent)] text-white text-center py-3 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition"
            >
              {t.pricing.founding.cta}
            </a>
          </div>

          {/* Design Partner */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[var(--color-cream-dark)]">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-charcoal-light)] mb-4">
              {t.pricing.design.label}
            </p>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--color-charcoal)]">
              {t.pricing.design.name}
            </h3>
            <p className="text-3xl font-bold text-[var(--color-charcoal)] mb-2">
              {t.pricing.design.price}
            </p>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
              {t.pricing.design.subtitle}
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-charcoal)]">
              {t.pricing.design.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:sergio@infratek.ai?subject=Design%20Partner%20Inquiry"
              className="block mt-8 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-center py-3 rounded-lg font-medium hover:bg-[var(--color-charcoal)] hover:text-white transition"
            >
              {t.pricing.design.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal-light)] mb-4">
            {t.team.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[var(--color-charcoal)]">
            {t.team.title}
          </h2>

          <div className="text-left bg-[var(--color-cream)] rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-[var(--color-charcoal)]">
              {t.team.founder.name}
            </h3>
            <p className="text-[var(--color-accent)] font-medium mb-6">
              {t.team.founder.role}
            </p>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              {t.team.founder.achievements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-[var(--color-cream-dark)] mt-8 pt-6">
              <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                {t.team.founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COURSE TEASER ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-[var(--color-charcoal)] text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent-light)] mb-3">
              {t.course.label}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t.course.title}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t.course.description}
            </p>
            <a
              href="#waitlist"
              className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition"
            >
              {t.course.cta}
            </a>
          </div>
          <div className="opacity-15">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-white">
              <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-1 7.87V17a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.13A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z" />
              <path d="M10 21v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" />
              <path d="M9 17h6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── WAITLIST ─── */}
      <section id="waitlist" className="bg-white py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-charcoal)]">
            {t.waitlistSection.title}
          </h2>
          <p className="text-[var(--color-charcoal-light)] mb-8">
            {t.waitlistSection.description}
            <br />
            {t.waitlistSection.referral}
          </p>
          {/* Placeholder for GetWaitlist embed */}
          <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-cream-dark)]">
            <p className="text-[var(--color-charcoal-light)] text-sm mb-4">
              {t.waitlistSection.loading}
            </p>
            <p className="text-xs text-[var(--color-charcoal-light)]">
              {t.waitlistSection.poweredBy}{" "}
              <a
                href="https://getwaitlist.com"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                getwaitlist.com
              </a>
            </p>
          </div>
          <p className="mt-6 text-sm text-[var(--color-charcoal-light)]">
            {t.waitlistSection.customIntegration}{" "}
            <a
              href="mailto:sergio@infratek.ai"
              className="text-[var(--color-accent)] underline"
            >
              {t.waitlistSection.bookCall}
            </a>
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 text-center text-sm text-[var(--color-charcoal-light)]">
        <p>
          {t.footer.copyright}{" "}
          <a
            href="/"
            className="text-[var(--color-accent)] hover:underline"
          >
            {t.footer.company}
          </a>
          {t.footer.tagline}
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://linkedin.com/company/infratek"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-accent)] transition"
          >
            {t.footer.linkedin}
          </a>
          <a
            href="mailto:sergio@infratek.ai"
            className="hover:text-[var(--color-accent)] transition"
          >
            {t.footer.contact}
          </a>
        </div>
      </footer>
    </main>
  );
}
