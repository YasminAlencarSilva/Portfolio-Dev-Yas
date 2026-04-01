import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Destaque – Hackathon Projeto Zelos | SENAI",
    issuer: "Serviço Nacional de Aprendizagem Industrial (SENAI)",
    date: "Dezembro de 2025",
    desc: "Participei do Hackathon promovido pelo SENAI integrando a equipe responsável pelo desenvolvimento do Projeto Zelos, um sistema web de gerenciamento de chamados desenvolvido para otimizar a comunicação entre clientes e técnicos.",
  },
  {
    icon: Medal,
    title: "Ganhadora Desafio de Redação do Diário do Grande ABC, Categoria IV",
    issuer: "Diário do Grande ABC",
    date: "Dezembro de 2025",
    desc: "Premiação conquistada na Categoria IV, destacando habilidades de escrita e argumentação. No total, 90.378 redações foram avaliadas. Com o tema \"Carta para o meu eu do futuro: onde me vejo daqui a 10 anos\", a edição deste ano registrou recorde de escolas inscritas, com 384 unidades participantes. Associado ao SESI São Caetano do Sul.",
  },
  {
    icon: Star,
    title: "Melhor Aluna – OLITEF",
    issuer: "Olimpíada do Tesouro Direto de Educação Financeira",
    date: "",
    desc: "Conteúdos avaliados: Finanças pessoais, Investimentos, Juros, Inflação, Planejamento financeiro. Resultado: Nota máxima na avaliação.",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="conquistas" title="Conquistas">
    <div className="max-w-4xl mx-auto space-y-6">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          className="glass-card p-6 md:p-8 hover:neon-border-glow transition-all duration-500 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:glow-purple group-hover:bg-primary/20 transition-all duration-300 shrink-0">
              <a.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-1">{a.title}</h3>
              <p className="text-xs font-mono text-primary mb-1">
                {a.issuer} {a.date && `• ${a.date}`}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{a.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
