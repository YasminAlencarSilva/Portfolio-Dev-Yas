import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code2, Palette, Zap } from "lucide-react";
import DevAvatar from "./DevAvatar";

const highlights = [
  {
    icon: Code2,
    label: "Desenvolvimento Web",
    desc: "React, Next.js, TypeScript e arquiteturas modernas",
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    desc: "Interfaces modernas, intuitivas e centradas no usuário",
  },
  {
    icon: Zap,
    label: "Performance",
    desc: "Aplicações rápidas, otimizadas e escaláveis",
  },
];

// 💜 tecnologias
const techs = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];

// 🔥 animações
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <SectionWrapper id="sobre" title="Sobre Mim">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* 🔥 CARD PRINCIPAL */}
        <motion.div
          variants={item}
          className="glass-card p-8 md:p-12 neon-border-glow relative overflow-hidden"
        >

          {/* 💜 glow animado */}
          <motion.div
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{
              background: "rgba(168, 85, 247, 0.25)",
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

            {/* 👩 AVATAR */}
            <motion.div variants={item}>
              <DevAvatar />
            </motion.div>

            {/* 📝 TEXTO */}
            <div className="text-center md:text-left max-w-xl">

              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Engenharia de Software & Experiências Digitais
              </h2>

              

            <motion.p
  className="text-lg mb-4 text-muted-foreground"
  initial={{ width: 0 }}
  animate={{ width: ["0%", "100%", "0%"] }}
  transition={{
    duration: 12, // mais lento (aumente se quiser ainda mais devagar)
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
  }}
  style={{
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: "2px solid #a855f7",
  }}
>
  Sou <span className="text-primary font-semibold">Yasmin Alencar</span>, desenvolvedora Front-End.
</motion.p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Crio <span className="text-primary">experiências digitais modernas</span>,
                focadas em performance, design e usabilidade.Transformo ideias em soluções reais que conectam
                 tecnologia e pessoas.
              </p>

            

              {/* 🚀 BADGES */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {techs.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(168,85,247,0.6)",
                    }}
                    className="px-4 py-1 text-sm rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

        {/* 🧊 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {highlights.map((itemData) => (
            <motion.div
              key={itemData.label}
              variants={item}
              className="glass-card p-6 text-center relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(168,85,247,0.15), transparent 70%)",
                }}
              />

              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <itemData.icon
                  className="mx-auto mb-4 text-primary"
                  size={30}
                />
              </motion.div>

              <h3 className="font-semibold text-foreground mb-2 text-lg">
                {itemData.label}
              </h3>

              <p className="text-sm text-muted-foreground">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;