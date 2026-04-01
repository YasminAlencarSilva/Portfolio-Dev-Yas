import { motion } from "framer-motion";

const DevAvatar = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* 💜 glow */}
      <div className="absolute w-[260px] h-[260px] bg-purple-600/25 blur-[90px] rounded-full" />

      <svg
        width="260"
        height="260"
        viewBox="0 0 200 200"
        className="relative z-10"
      >
        {/* 🎨 gradiente cabelo */}
        <defs>
          <linearGradient id="hairBlonde" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>

        {/* 💛 CABELO (MENOR + PENTEADO BONITO) */}
        <motion.path
          d="
            M70 65 
            Q100 15 130 65 
            L130 115 
            Q115 135 100 130 
            Q85 135 70 115 Z
          "
          fill="url(#hairBlonde)"
          animate={{
            d: [
              "M70 65 Q100 15 130 65 L130 115 Q115 135 100 130 Q85 135 70 115 Z",
              "M68 67 Q100 13 132 67 L132 117 Q117 138 100 132 Q83 138 68 117 Z",
              "M70 65 Q100 15 130 65 L130 115 Q115 135 100 130 Q85 135 70 115 Z",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 💇‍♀️ FRANJA LATERAL */}
        <path
          d="M85 60 Q100 40 115 60 Q105 70 95 68 Z"
          fill="url(#hairBlonde)"
        />

        {/* ✨ MECHA SUAVE */}
        <motion.path
          d="M85 75 Q100 50 115 75"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          fill="none"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* 👩 ROSTO */}
        <circle cx="100" cy="75" r="26" fill="#f1c27d" />

        {/* 👀 OLHOS */}
        <motion.g
          animate={{ scaleY: [1, 0.15, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ transformOrigin: "center" }}
        >
          <ellipse cx="90" cy="75" rx="3" ry="2" fill="#111" />
          <ellipse cx="110" cy="75" rx="3" ry="2" fill="#111" />
        </motion.g>

        {/* 😊 BOCA */}
        <path
          d="M92 88 Q100 95 108 88"
          stroke="#7c2d12"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* 👕 CORPO */}
        <rect x="70" y="105" width="60" height="45" rx="14" fill="#6d28d9" />

        {/* 💻 NOTEBOOK */}
        <rect x="50" y="125" width="100" height="45" rx="8" fill="#0a0a0a" />
        <rect x="55" y="130" width="90" height="30" rx="6" fill="#111" />

        {/* 💻 CÓDIGO */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x="60"
            y={135 + i * 8}
            height="3"
            rx="2"
            fill={i === 0 ? "#a855f7" : "#c084fc"}
            animate={{ width: [25, 60, 25] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* 🟣 CURSOR */}
        <motion.rect
          x="115"
          y="133"
          width="2"
          height="12"
          fill="#e9d5ff"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* ✋ BRAÇOS */}
        <motion.rect
          x="65"
          y="110"
          width="10"
          height="30"
          rx="6"
          fill="#f1c27d"
          animate={{ rotate: [0, 10, 0] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <motion.rect
          x="125"
          y="110"
          width="10"
          height="30"
          rx="6"
          fill="#f1c27d"
          animate={{ rotate: [0, -10, 0] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* ✨ PARTÍCULAS */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={70 + i * 10}
            cy="125"
            r="2"
            fill="#a855f7"
            animate={{
              y: [0, -25],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default DevAvatar;