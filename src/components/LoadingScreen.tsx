import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-heading font-bold gradient-text text-glow">
        {"<YAS/>"}
      </div>
      <motion.div
        className="mt-6 h-0.5 bg-primary rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
    <motion.p
      className="mt-4 font-mono text-sm text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Carregando...
    </motion.p>
  </motion.div>
);

export default LoadingScreen;
