"use client"

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface TextContainerProps {
  children: ReactNode;
  className?: string;
}

export default function TextContainer({children, className}: TextContainerProps) {
    return(
        <motion.div 
            className={className}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}