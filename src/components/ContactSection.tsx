import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contato" title="Contato">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            Tem um projeto em mente ou quer bater um papo? Entre em contato!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:yalencar491@gmail.com"
              className="flex items-center gap-3 glass-card p-4 hover:neon-border-glow transition-all group"
            >
              <Mail className="text-primary group-hover:glow-purple-sm" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">yalencar491@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 glass-card p-4">
              <MapPin className="text-primary" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Localização</p>
                <p className="text-sm text-foreground">Santo André – Vila Aquilino, SP</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/yasmin-alencar-ab4a743aa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass-card p-4 hover:neon-border-glow transition-all group"
            >
              <Linkedin className="text-primary group-hover:glow-purple-sm" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm text-foreground">Yasmin Alencar</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card p-6 neon-border-glow space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="text-xs font-mono text-muted-foreground mb-1 block">Nome</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground mb-1 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground mb-1 block">Mensagem</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              placeholder="Sua mensagem..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium gradient-purple text-primary-foreground glow-purple hover:glow-purple-intense transition-all duration-300"
          >
            <Send size={16} />
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
