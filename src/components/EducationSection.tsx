import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "2026 – 2028",
  },
  {
    title: "Curso Técnico em Desenvolvimento de Sistemas – SENAI",
    period: "2024 – 2025",
  },
  {
    title: "Ensino Fundamental e Médio – SESI",
    period: "2014 – 2025",
  },
];

const EducationSection = () => (
  <SectionWrapper id="formacao" title="Formação Acadêmica">
    <div className="max-w-2xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

      {education.map((item, i) => (
        <motion.div
          key={item.title}
          className="relative pl-16 md:pl-20 mb-10 last:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          {/* Dot */}
          <motion.div
            className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary glow-purple"
            whileInView={{ scale: [0, 1.3, 1] }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
          />

          <div className="glass-card p-5 hover:neon-border-glow transition-all duration-300">
            <span className="font-mono text-xs text-primary mb-1 block">{item.period}</span>
            <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
              <GraduationCap size={16} className="text-primary" />
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
