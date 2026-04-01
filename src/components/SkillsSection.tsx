import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  Code2, Database, Palette, FileText, Globe, Smartphone,
  GitBranch, Layers, PenTool, BarChart3, FileSpreadsheet, Monitor
} from "lucide-react";

const devSkills = [
  { name: "HTML", pct: 90, icon: Globe },
  { name: "CSS", pct: 88, icon: Palette },
  { name: "JavaScript", pct: 82, icon: Code2 },
  { name: "React", pct: 80, icon: Layers },
  { name: "Next.js", pct: 70, icon: Monitor },
  { name: "Responsividade e Mobile-First", pct: 85, icon: Smartphone },
  { name: "Consumo de APIs", pct: 78, icon: Globe },
  { name: "Git e GitHub", pct: 80, icon: GitBranch },
];

const designSkills = [
  "Canva", "Photoshop", "Criação de identidade visual",
  "Edição e tratamento de imagens", "Design para redes sociais",
  "Composição visual e teoria das cores", "Tipografia e hierarquia visual",
];

const managementSkills = [
  "Gestão de projetos", "Planejamento e cronogramas",
  "Controle de prazos, orçamento e escopo", "Documentação e relatórios de projeto",
  "Pacote Office (Word, Excel, PowerPoint)", "Planilhas (Excel / Google Sheets)",
];

const ProgressBar = ({ name, pct, icon: Icon, index }: { name: string; pct: number; icon: typeof Code2; index: number }) => (
  <motion.div
    className="mb-5"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
  >
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-primary" />
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <span className="text-xs font-mono text-primary">{pct}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full gradient-purple glow-purple-sm"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const SkillCard = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    className="glass-card px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:neon-border-glow transition-all duration-300"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{ scale: 1.03 }}
  >
    {skill}
  </motion.div>
);

const SkillsSection = () => (
  <SectionWrapper id="habilidades" title="Habilidades">
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Dev Skills */}
      <motion.div
        className="glass-card p-6 md:p-8 neon-border-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="text-primary" size={20} />
          <h3 className="text-lg font-heading font-semibold text-foreground">Desenvolvimento Web</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {devSkills.map((s, i) => (
            <ProgressBar key={s.name} {...s} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Database */}
      <motion.div
        className="glass-card p-6 neon-border-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Database className="text-primary" size={20} />
          <h3 className="text-lg font-heading font-semibold text-foreground">Banco de Dados</h3>
        </div>
        <div className="flex items-center gap-2">
          <Database size={14} className="text-primary" />
          <span className="text-sm text-foreground">MySQL</span>
          <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden max-w-xs">
            <motion.div
              className="h-full rounded-full gradient-purple glow-purple-sm"
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <span className="text-xs font-mono text-primary">65%</span>
        </div>
      </motion.div>

      {/* Design */}
      <motion.div
        className="glass-card p-6 md:p-8 neon-border-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-6">
          <PenTool className="text-primary" size={20} />
          <h3 className="text-lg font-heading font-semibold text-foreground">UI / Design</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {designSkills.map((s, i) => <SkillCard key={s} skill={s} index={i} />)}
        </div>
      </motion.div>

      {/* Management */}
      <motion.div
        className="glass-card p-6 md:p-8 neon-border-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-6">
          <FileSpreadsheet className="text-primary" size={20} />
          <h3 className="text-lg font-heading font-semibold text-foreground">Gestão e Documentação</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {managementSkills.map((s, i) => <SkillCard key={s} skill={s} index={i} />)}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
