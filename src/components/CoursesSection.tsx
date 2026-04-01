import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { BookOpen, Award } from "lucide-react";

const courses = [
  "Excel Intermediário – Fundação Bradesco",
  "Excel Básico – Fundação Bradesco",
  "Pacote Microsoft Office 365 – SESI",
  "Microsoft AI-900 – SENAI",
  "Microsoft AZ-900 – SENAI",
  "Microsoft Power Platform Fundamentals (PL-900) – SENAI",
  "Fundamentos da Inteligência Artificial – SENAI",
  "Introdução à Segurança da Informação com IA – Fenix Systems",
  "LGPD – SENAI",
  "Web 3.0 – SENAI",
  "Fundamentos do Design Gráfico – Fundação Bradesco",
  "Design Gráfico – FASCS",
  "Comunicação Empresarial – Fundação Bradesco",
  "Atendimento ao Público – Fundação Bradesco",
  "Desvendando o 5G – SENAI",
  "Introdução à Administração – Fundação Bradesco",
  "Empreender SENAI",
  "Economia Circular – SENAI",
  "ESG – SENAI",
  "Indústria 4.0 – SENAI",
  "Segurança no Trabalho – SENAI",
  "Introdução a Python – Fundação Bradesco",
];

const CoursesSection = () => (
  <SectionWrapper id="cursos" title="Cursos Complementares">
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, i) => {
        const [name, institution] = course.split(" – ");
        return (
          <motion.div
            key={course}
            className="glass-card p-4 hover:neon-border-glow transition-all duration-300 group"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary group-hover:glow-purple-sm transition-all">
                {i < 6 ? <Award size={14} /> : <BookOpen size={14} />}
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground leading-snug">{name}</h4>
                {institution && (
                  <p className="text-xs text-muted-foreground mt-0.5">{institution}</p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default CoursesSection;
