import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "" }: Props) => (
  <section id={id} className={`py-20 md:py-28 relative ${className}`}>
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-xs text-primary mb-2 block">{"// " + id}</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-glow-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-4 mx-auto w-20 h-0.5 gradient-purple rounded-full glow-purple-sm" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
