import { motion } from "framer-motion";
import React from "react";

// Props para el componente AnimatedText
interface AnimatedTextProps {
  children: React.ReactNode; // Contenido del texto animado
  className?: string; // Clases adicionales para personalizar estilos
  initial?: object; // Configuración inicial de la animación (opcional)
  animate?: object; // Configuración de la animación final (opcional)
  transition?: object; // Configuración de la transición (opcional)
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  initial = { opacity: 0, y: 20 }, // Valores por defecto
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8 },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
