import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  fullDesc: string;
  techs: string[];
  color: string;
  cover: string;
}

// ✅ NOVO (mídia)
interface Media {
  type: "image" | "video";
  src: string;
}

const projects: Project[] = [
  {
    title: "Milkmoo – Site Recriado",
    desc: "Recriação completa do site Milkmoo com design moderno e responsividade.",
    fullDesc: "Recriação completa do site Milkmoo, com foco em design moderno, responsividade e experiência do usuário. Interface limpa, catálogos interativos e performance otimizada para e-commerce.",
    techs: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-black/70 to-black/40",
     cover: "/milkmoo.png",
  },
  {
    title: "Zelos – Sistema SENAI",
    desc: "Sistema de chamados com painéis para cliente, técnico e admin.",
    fullDesc: "Sistema de chamados com painéis para cliente, técnico e administrador. Permite abertura, acompanhamento e gestão de chamados de forma ágil e organizada.",
    techs: ["React", "Node.js", "MySQL", "Next.js"],
    color: "from-black/70 to-black/40",
     cover: "/zelos.png",
  },
  {
    title: "Sabor Mexicano – Restaurante",
    desc: "Sistema web para restaurante com painel administrativo.",
    fullDesc: "Sistema web para restaurante desenvolvido em PHP com painel administrativo para gerenciamento de cardápio, pedidos e reservas.",
    techs: ["PHP", "MySQL", "HTML", "CSS"],
    color: "from-black/70 to-black/40",
     cover: "/mexicano1.png",
  },
  {
    title: "ByYoung Finance – Controle Financeiro",
    desc: "Dashboard financeiro com controle de receitas e despesas.",
    fullDesc: "Dashboard financeiro com controle de receitas e despesas e gráficos interativos.",
    techs: ["React", "Chart.js", "CSS", "JavaScript"],
    color: "from-black/70 to-black/40",
     cover: "/young3.png", 
  },
  {
    title: "Molli – Ponto de Venda e Matriz",
    desc: "Sistema avançado de ponto de venda com múltiplas filiais.",
    fullDesc: "Sistema avançado de ponto de venda desenvolvido com Node.js e Next.js com suporte a múltiplas filiais.",
    techs: ["Node.js", "Next.js", "MySQL", "React"],
    color: "from-black/70 to-black/40",
      cover: "/molli.png",
  },
  {
    title: "Veranny – E-commerce de piscinas",
    desc: "E-commerce moderno com API de produtos, filtros e carrinho.",
    fullDesc: "E-commerce moderno que consome uma API de produtos de piscinas. Sistema responsivo com filtros de produtos, carrinho de compras e integração com métodos de pagamento.",
    techs: ["React", "API REST", "CSS", "JavaScript"],
    color: "from-black/70 to-black/40",
     cover: "/verrany.png",
  }
];

const projectMedia: Record<string, Media[]> = {
  "Milkmoo – Site Recriado": [
    { type: "video", src: "MilkyMoo.mp4" },
  ],
  "ByYoung Finance – Controle Financeiro": [
    { type: "video", src: "/youngfinance.mp4" },
    { type: "image", src: "/young2.png" },
     { type: "image", src: "/young3.png" },
  ],
  "Loja de Piscinas – E-commerce": [
    { type: "image", src: "/verrany.png" },
     { type: "image", src: "/verrany1.png" },
     { type: "image", src: "/verrany3.png" },
  ],
  "Zelos – Sistema SENAI": [
    { type: "image", src: "/zelos.png" },
     { type: "image", src: "/zelos2.jfif" },
     { type: "image", src: "/zelos3.png" },
  ],
  "Comida Mexicana – Restaurante": [
    { type: "image", src: "/mexicano1.png" },
     { type: "image", src: "/mexicano2.png" },
      { type: "image", src: "/mexicano3.png" },
       { type: "image", src: "/mexicano4.png" },
  ],
  "Molli – Ponto de Venda e Matriz": [
    { type: "image", src: "/molli.png" },
     { type: "image", src: "/molli1.png" },
     { type: "image", src: "/molli2.png" },
  ],
};

const ProjectCard = ({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) => (
  <motion.div
    className="glass-card overflow-hidden group hover:neon-border-glow transition-all duration-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
   <div className="h-40 relative overflow-hidden">
  {/* IMAGEM */}
  <img
    src={project.cover}
    className="w-full h-full object-cover"
  />

  {/* GRADIENT */}
  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`} />

  {/* TÍTULO */}
  <span className="absolute bottom-3 left-3 text-white font-bold text-sm z-10">
    {project.title.split("–")[0]}
  </span>
</div>

    <div className="p-5">
      <h3 className="font-heading font-semibold text-foreground mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((t) => (
          <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary neon-border">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/YasminAlencarSilva" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
          <Github size={14} /> GitHub
        </a>
        <button
          onClick={onOpen}
          className="flex items-center gap-1 text-xs text-primary hover:text-neon-purple-glow transition-colors"
        >
          <ExternalLink size={14} /> Ver Projeto
        </button>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [slide, setSlide] = useState(0);
  const slides = projectMedia[project.title] || [];

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div className="relative glass-card neon-border-glow max-w-5xl w-full max-h-[140vh] overflow-y-auto p-6 md:p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>

       
        <div className={`h-[50vh] rounded-lg bg-gradient-to-br ${project.color} mb-6 relative overflow-hidden flex items-center justify-center`}>
          
          {slides.length > 0 && (
            <>
              {slides[slide].type === "image" ? (
                <img src={slides[slide].src} className="w-full h-full object-contain" />
              ) : (
                <video
                  key={slides[slide].src}
                  src={slides[slide].src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              <button
                onClick={() => setSlide((s) => (s > 0 ? s - 1 : slides.length - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => setSlide((s) => (s < slides.length - 1 ? s + 1 : 0))}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <ChevronRight size={18} />
              </button>

              <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                {slide + 1} / {slides.length}
              </span>
            </>
          )}
        </div>

        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{project.fullDesc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((t) => (
            <span key={t} className="text-xs font-mono px-3 py-1 rounded-md bg-primary/10 text-primary neon-border">
              {t}
            </span>
          ))}
        </div>

        <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg neon-border-glow text-primary text-sm hover:bg-primary/10 transition-all">
          <Github size={16} /> Ver no GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projetos" title="Projetos">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} onOpen={() => setSelected(p)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;