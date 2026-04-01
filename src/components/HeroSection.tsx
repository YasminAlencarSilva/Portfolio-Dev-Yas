import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const codeLines = [
  'const yasmin = {',
  '  name: "Yasmin Alencar",',
  '  role: "Front-End Developer",',
  '  skills: ["React", "Next.js", "TypeScript"],',
  '  passion: "Creating beautiful UIs",',
  '};',
  '',
  'function buildAmazingUI() {',
  '  return (',
  '    <div className="portfolio">',
  '      <Header />',
  '      <Projects />',
  '      <Contact />',
  '    </div>',
  '  );',
  '}',
  '',
  'export default buildAmazingUI;',
];

// 🔊 Som de digitação
const typingSound = new Audio("/sounds/typing.mp3");
typingSound.volume = 0.10;
typingSound.playbackRate = 1.5;

// ✨ Hook com múltiplos textos + loop + som limitado
const useTypingEffect = (texts: string[], speed = 20, delay = 200) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // ⏱️ desliga o som após 20s
  useEffect(() => {
    const timer = setTimeout(() => {
      setSoundEnabled(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[textIndex];

    const playSound = () => {
      if (!soundEnabled) return;

      try {
        typingSound.currentTime = 0;
        typingSound.play();
      } catch {}
    };

    const handleTyping = () => {
      if (!isDeleting) {
        // DIGITANDO
        if (displayed.length < currentText.length) {
          setDisplayed(currentText.slice(0, displayed.length + 1));
          playSound();
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 600);
          return;
        }
      } else {
        // APAGANDO (rápido)
        if (displayed.length > 0) {
          setDisplayed(currentText.slice(0, displayed.length - 1));
          playSound();
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
      }

      timeout = setTimeout(handleTyping, isDeleting ? 10 : speed);
    };

    timeout = setTimeout(handleTyping, delay);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex, texts, speed, delay, soundEnabled]);

  return displayed;
};

const HeroSection = () => {
  const roles = [
    "Front-End Developer",
    "Web Developer",
    "UI Designer",
    "UX Designer",
  ];

  const typedTitle = useTypingEffect(roles, 20, 200);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background de código */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
        <div className="animate-code-scroll font-mono text-xs leading-6 text-primary whitespace-pre">
          {[...Array(4)].map((_, rep) => (
            <div key={rep}>
              {codeLines.map((line, i) => (
                <div key={`${rep}-${i}`}>{line}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Partículas */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-mono text-sm text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"// Olá, eu sou"}
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground text-glow-white mb-4">
            Yasmin Alencar
          </h1>

          {/* 💻 DIGITAÇÃO */}
          <div className="h-10 md:h-12 flex items-center justify-center">
            <span className="text-xl md:text-3xl font-mono gradient-text text-glow">
              {typedTitle}
              <span className="animate-pulse-neon ml-0.5">|</span>
            </span>
          </div>

          <motion.p
            className="max-w-2xl mx-auto mt-6 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Desenvolvedora Web / Desenvolvedora Front-End em formação, apaixonada por criar
            interfaces modernas, intuitivas e responsivas. Focada em experiência do usuário,
            design tecnológico e desenvolvimento de soluções digitais eficientes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <a
              href="#projetos"
              className="px-8 py-3 rounded-lg font-medium gradient-purple text-primary-foreground glow-purple hover:glow-purple-intense transition-all duration-300"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-3 rounded-lg font-medium neon-border-glow text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Contato
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary/50" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;