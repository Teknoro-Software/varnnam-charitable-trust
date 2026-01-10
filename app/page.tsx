"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Working towards a more equitable and just society",
    description:
      "Varnnam Charitable Trust supports long-term initiatives that strengthen communities, institutions, and systems across India.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Strengthening communities through sustained action",
    description:
      "We partner with grassroots organisations to create lasting social and economic impact.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Building systems that enable inclusive growth",
    description:
      "Our work focuses on education, healthcare, livelihoods, and social equity.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop",
  },
];


const areasConfig = [
  {
    label: "Healthcare",
    image: "/images/areas/healthcare.jpg",
    color: "#2E7D32",
    icon: (
      <path d="M12 21s-6-4.35-6-9a6 6 0 0112 0c0 4.65-6 9-6 9z" />
    ),
  },
  {
    label: "Nutrition",
    image: "/images/areas/nutrition.jpg",
    color: "#EF6C00",
    icon: (
      <path d="M4 3h16v2H4zm2 4h12v14H6z" />
    ),
  },
  {
    label: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    color: "#1565C0",
    icon: (
      <path d="M12 3L2 9l10 6 10-6-10-6zm0 13l-8-5v6l8 5 8-5v-6l-8 5z" />
    ),
  },
  {
    label: "WaSH",
    image: "/images/areas/wash.jpg",
    color: "#00838F",
    icon: (
      <path d="M12 2s5 6 5 10a5 5 0 11-10 0c0-4 5-10 5-10z" />
    ),
  },
  {
    label: "Livelihood",
    image: "/images/areas/livelihood.jpg",
    color: "#6D4C41",
    icon: (
      <path d="M3 7h18v13H3zM16 3H8v4h8z" />
    ),
  },
  {
    label: "Digital Transformation",
    image: "/images/areas/digital.jpg",
    color: "#512DA8",
    icon: (
      <path d="M4 4h16v12H4zm2 14h12v2H6z" />
    ),
  },
  {
    label: "Migration and Urban Habitat",
    image: "/images/areas/urban.jpg",
    color: "#455A64",
    icon: (
      <path d="M3 11h18v10H3zM7 3h4v8H7zm6 0h4v8h-4z" />
    ),
  },
  {
    label: "Social Justice and Inclusion",
    image: "/images/areas/social.jpg",
    color: "#C62828",
    icon: (
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    ),
  },
  {
    label: "Environment and Energy",
    image: "/images/areas/energy.jpg",
    color: "#2E7D32",
    icon: (
      <path d="M12 2C8 6 6 9 6 12a6 6 0 0012 0c0-3-2-6-6-10z" />
    ),
  },
  {
    label: "Skill Development",
    image: "/images/areas/skill.jpg",
    color: "#0277BD",
    icon: (
      <path d="M14 2l2 4-4 8-4-2 6-10zM4 20h16v2H4z" />
    ),
  },
  {
    label: "Arts and Culture",
    image: "/images/areas/arts.jpg",
    color: "#8E24AA",
    icon: (
      <path d="M12 3a4 4 0 110 8 4 4 0 010-8zm-7 16c0-4 14-4 14 0v1H5z" />
    ),
  },
  {
    label: "Sports",
    image: "/images/areas/sports.jpg",
    color: "#F4511E",
    icon: (
      <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
    ),
  },
  {
    label: "Disaster Relief and Rehabilitation",
    image: "/images/areas/relief.jpg",
    color: "#5D4037",
    icon: (
      <path d="M12 2l10 9h-3v9H5v-9H2z" />
    ),
  },
  {
    label: "Institutions",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    color: "#37474F",
    icon: (
      <path d="M3 10l9-6 9 6v2H3zm2 2h2v8H5zm6 0h2v8h-2zm6 0h2v8h-2z" />
    ),
  },
  {
    label: "Individual Grants Programme",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    color: "#6A1B9A",
    icon: (
      <path d="M12 2l6 6h-4v6h-4V8H6z" />
    ),
  },
];


const voices = [
  {
    name: "Ratan Tata",
    role: "Former Chairman, Tata Sons",
    image: "/images/ratantata.jpg",
    quote:
      "Founded more than a century ago, the Tata Trusts are a unique vehicle for undertaking social good. On this solemn occasion, we rededicate ourselves to carrying on our developmental and philanthropic initiatives and continuing to play our part in nation building.",
  },
  {
    name: "Ratan Tata",
    role: "Former Chairman, Tata Sons",
    image: "/images/ratantata.jpg",
    quote:
      "Philanthropy is not about charity but about solving problems in a sustainable way and empowering communities.",
  },
  {
    name: "Ratan Tata",
    role: "Former Chairman, Tata Sons",
    image: "/images/ratantata.jpg",
    quote:
      "Strong public education systems are the foundation for equitable growth and opportunity.",
  },

];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
const latestContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const latestItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
const textVariants: Variants = {
  enter: {
    opacity: 0,
    y: 30,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants: Variants = {
  enter: {
    opacity: 0,
    scale: 1.05,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
const imagevVariants: Variants = {
  inactive: {
    scale: 0.95,
    opacity: 0.6,
  },
  active: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const quoteVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};



export default function Page() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev - 1 + voices.length) % voices.length);

  const next = () =>
    setActive((prev) => (prev + 1) % voices.length);


  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % slides.length);
      }
      if (e.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <main className="bg-white text-[#1f1f1f]">

      {/* ===== HERO CAROUSEL ===== */}
      <section id="home" className="bg-[#f7f7f7] overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-6 py-[72px] md:py-[96px] grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[72px] items-center">

          {/* LEFT TEXT */}
          <div className="relative min-h-[260px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <h1 className="text-[28px] md:text-[44px] leading-[1.2] font-semibold tracking-tight">
                  {slides[active].title}
                </h1>

                <p className="mt-4 md:mt-6 text-[15px] md:text-[18px] leading-[1.6] text-[#4b4b4b] max-w-[520px]">
                  {slides[active].description}
                </p>

                <div className="mt-6 md:mt-10">
                  <button className="bg-[#c62828] text-white text-[14px] font-medium px-6 py-3 rounded transition">
                    Explore our work
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[360px] overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={slides[active].image}
                alt=""
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center gap-2 pb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-[6px] w-[6px] rounded-full transition ${index === active ? "bg-[#c62828]" : "bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* ARROWS (DESKTOP ONLY) */}
        <button
          aria-label="Previous slide"
          onClick={() =>
            setActive((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-700 transition"
        >
          ‹
        </button>

        <button
          aria-label="Next slide"
          onClick={() =>
            setActive((prev) => (prev + 1) % slides.length)
          }
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-700 transition"
        >
          ›
        </button>
      </section>



      {/* ===== LATEST ===== */}
      <section id="latest" className="bg-white">
        <motion.div
          className="max-w-[1150px] mx-auto px-6 py-[96px]"
          variants={latestContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Heading */}
          <motion.div
            variants={latestItem}
            className="flex items-center text-center justify-between mb-12"
          >
            <h2 className="relative inline-block text-4xl font-light tracking-tight">
              Latest
              <span className="absolute left-0 -bottom-4 h-[4px] w-12 bg-[#c62828]" />
            </h2>

            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="text-[14px] font-medium text-[#c62828]"
            >
              View all →
            </motion.a>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={latestContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-[48px]"
          >
            {/* FEATURE STORY */}
            <motion.article
              variants={latestItem}
              className="md:col-span-2"
            >
              <motion.div
                className="h-[360px] mb-6 overflow-hidden"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: false }}
              >
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </motion.div>

              <p className="text-[12px] text-gray-500 mb-2">
                Programme update
              </p>

              <h3 className="text-[22px] font-semibold leading-snug mb-3 max-w-[520px]">
                Strengthening public education systems for long-term impact
              </h3>

              <p className="text-[15px] text-gray-600 max-w-[520px]">
                Supporting state-level initiatives that improve governance,
                learning outcomes, and teacher capacity.
              </p>
            </motion.article>

            {/* SECONDARY STORIES */}
            <motion.div
              variants={latestContainer}
              className="space-y-[40px]"
            >
              {[1, 2].map((i) => (
                <motion.article
                  key={i}
                  variants={latestItem}
                >
                  <motion.div
                    className="h-[160px] mb-4 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <img
                      src={`https://images.unsplash.com/photo-15${90 + i}113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop`}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </motion.div>

                  <p className="text-[12px] text-gray-500 mb-1">
                    Insight
                  </p>

                  <h4 className="text-[16px] font-semibold leading-snug">
                    Advancing equitable access to healthcare services
                  </h4>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* ===== AREAS OF WORK ===== */}
      <section id="work" className="bg-[#f7f7f7]">
        <motion.div
          className="mx-auto px-6 text-center py-[75px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Heading */}
          <motion.h2
            variants={item}
            className="relative inline-block text-5xl font-light mb-14 tracking-tight"
          >
            Areas of work
            <span className="absolute left-0 -bottom-4 h-[4px] w-24 bg-[#c62828]" />
          </motion.h2>

          {/* Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]"
          >
            {areasConfig.map((area) => (
              <motion.div
                key={area.label}
                variants={item}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative h-[240px] overflow-hidden rounded-lg cursor-pointer"
              >
                {/* Image */}
                <img
                  src={area.image}
                  alt={area.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Framer Motion overlay */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ backgroundColor: `${area.color}99` }}
                />

                {/* Icon + label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: area.color }}
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      {area.icon}
                    </svg>
                  </motion.div>

                  <span className="text-white text-[14px] font-semibold drop-shadow-sm">
                    {area.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>



      {/* ===== IMPACT / STORIES ===== */}
      {/* <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-[104px]">

          <div className="mb-16">
            <h2 className="relative inline-block text-[28px] font-semibold tracking-tight">
              Impact 
              <span className="absolute left-0 -bottom-2 h-[2px] w-12 bg-[#c62828]" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">

            <article className="md:col-span-2">
              <div className="h-[360px] mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-[12px] uppercase tracking-wide text-gray-500 mb-2">
                Impact story
              </p>

              <h3 className="text-[22px] font-semibold leading-snug mb-3 max-w-[520px]">
                Strengthening public education systems for long-term outcomes
              </h3>

              <p className="text-[15px] leading-[1.7] text-gray-600 max-w-[560px]">
                Working closely with state governments and local partners, our
                programmes focus on improving governance, classroom practices,
                and student learning outcomes at scale.
              </p>
            </article>

            <div className="space-y-[40px]">
              {[1, 2].map((i) => (
                <article key={i}>
                  <div className="h-[160px] mb-4 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="text-[12px] uppercase tracking-wide text-gray-500 mb-1">
                    Programme update
                  </p>

                  <h4 className="text-[16px] font-semibold leading-snug">
                    Advancing equitable access to essential services
                  </h4>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section> */}
      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="relative inline-block text-[36px] font-light mb-8 tracking-tight">
              About Varnnam Trust
              <span className="absolute left-0 -bottom-3 h-[4px] w-14 bg-[#c62828]" />
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4b4b4b] mb-6 max-w-[520px]">
              In a country that is home to the world’s second-largest population, when one of its largest
              organisations happens to be a philanthropic institution, it raises hopes for a promising and
              sustainable future.
            </p>

            <p className="text-[16px] leading-[1.9] text-[#4b4b4b] mb-10 max-w-[520px]">
              Varnnam Charitable Trust symbolises humanitarianism and personifies the force that advances
              social and economic development through long-term initiatives.
            </p>

            <h3 className="text-[20px] font-semibold mb-4">
              A dream that lives on
            </h3>

            <p className="text-[16px] leading-[1.9] text-[#4b4b4b] mb-10 max-w-[520px]">
              Founded on the belief that true nation-building lies in empowering people, our journey
              continues to focus on education, livelihoods, healthcare, and social justice.
            </p>

            <button className="bg-[#c62828] text-white text-[14px] px-6 py-3 rounded hover:opacity-90 transition">
              Know more
            </button>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="grid grid-cols-3 gap-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img
              src="/images/about/leader.jpg"
              alt=""
              className="h-[420px] w-full object-cover grayscale"
            />
            <img
              src="/images/about/building.jpg"
              alt=""
              className="h-[420px] w-full object-cover grayscale"
            />
            <div className="relative">
              <img
                src="/images/about/community.jpg"
                alt=""
                className="h-[420px] w-full object-cover grayscale"
              />

              <div className="absolute bottom-4 right-4">
                <button className="bg-[#c62828] text-white text-[13px] px-4 py-2">
                  Trust History
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>



      {/* ===== PHASE 4: VOICES ===== */}
      <section id="voices" className="bg-[#d7261e] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-[64px] md:py-[75px]">

          {/* Background SVG */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none">
            <svg
              viewBox="0 0 1440 140"
              className="w-full h-[90px] md:h-[140px] opacity-15"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#ffffff">
                <rect x="0" y="80" width="180" height="40" />
                <rect x="220" y="60" width="140" height="60" />
                <rect x="400" y="90" width="200" height="30" />
                <rect x="640" y="50" width="160" height="70" />
                <rect x="840" y="80" width="180" height="40" />
                <rect x="1060" y="60" width="140" height="60" />
                <rect x="1240" y="90" width="200" height="30" />
              </g>
            </svg>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.45 }}
            className="text-center text-[22px] md:text-[28px] font-medium mb-12 md:mb-16"
          >
            Voices
          </motion.h2>

          {/* Carousel */}
          <div className="relative flex items-center justify-center mb-12 md:mb-16">

            {/* Left Arrow (Desktop only) */}
            <button
              onClick={prev}
              className="hidden md:block absolute left-0 text-4xl hover:opacity-70 transition"
            >
              ‹
            </button>

            {/* Images */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10">
              {voices.map((v, i) => (
                <motion.div
                  key={i}
                  variants={imageVariants}
                  animate={i === active ? "active" : "inactive"}
                  className="relative"
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-[120px] h-[150px] sm:w-[160px] sm:h-[200px] md:w-[200px] md:h-[240px] object-cover rounded-2xl"
                  />

                  {/* Overlay for inactive */}
                  {i !== active && (
                    <motion.div
                      className="absolute inset-0 bg-[#d7261e]/70 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Arrow (Desktop only) */}
            <button
              onClick={next}
              className="hidden md:block absolute right-0 text-4xl hover:opacity-70 transition"
            >
              ›
            </button>
          </div>

          {/* Quote */}
          <div className="max-w-[900px] mx-auto text-center px-2">

            <div className="relative h-[140px] sm:h-[120px] md:h-[150px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  variants={quoteVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute inset-0 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.7]"
                >
                  “{voices[active].quote}”
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="relative h-[22px] mt-4 md:mt-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active + "-author"}
                  variants={quoteVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute inset-0 text-[13px] md:text-[14px] font-medium"
                >
                  — {voices[active].name}, {voices[active].role}
                </motion.p>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
