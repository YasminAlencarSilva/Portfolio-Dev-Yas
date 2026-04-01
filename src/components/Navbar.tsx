import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formação", href: "#formacao" },
  { label: "Cursos", href: "#cursos" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass glow-purple-sm py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
       <motion.img
  src="/LOGO.png"
  alt="Logo Yasmin"
  className="h-16 w-auto object-contain"
  animate={{
    y: [0, -8, 0],
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    filter:
      "drop-shadow(0 0 12px rgba(168, 85, 247, 1)) drop-shadow(0 0 30px rgba(168, 85, 247, 0.7))",
  }}
/>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full glow-purple-sm" />
            </a>
          ))}
         <motion.a
  href="/CurrículoDev-YasminAlencar.pdf" 
  download
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-primary"

  whileHover={{
    scale: 1.05,
    y: -2,
  }}

  whileTap={{
    scale: 0.95,
  }}

  transition={{ type: "spring", stiffness: 200 }}

  style={{
    border: "1px solid rgba(168,85,247,0.5)",
    boxShadow:
      "0 0 10px rgba(168,85,247,0.5), 0 0 20px rgba(168,85,247,0.3)",
  }}
>
  <motion.div
    whileHover={{ rotate: -15 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Download size={16} />
  </motion.div>

  Download CV
</motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden neon-border"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/CurrículoDev-YasminAlencar.pdf" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg neon-border-glow text-primary hover:bg-primary/10 transition-all mt-2"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
