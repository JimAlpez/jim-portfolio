"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  shadowText: string;
  primaryText: string;
  secondaryText: string;
};

export default function SectionHeading({
  shadowText,
  primaryText,
  secondaryText,
}: SectionHeadingProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      viewport={{ once: true }}
      className="text-center space-y-2 py-2">
      <h2 className="text-3xl lg:text-4xl font-extrabold uppercase relative mb-8">
        <motion.span
          initial={{ scale: 0.5, x: "-50%", y: "-50%", opacity: 0 }}
          whileInView={{
            scale: 1,
            x: "-50%",
            y: "-50%",
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className={`text-5xl lg:text-7xl tracking-widest absolute top-1/2 left-1/2 ${
            theme === "light" ? "text-slate-200/50" : "!text-slate-900/20"
          }`}>
          {shadowText}
        </motion.span>
        <span className="z-10 drop-shadow-md">{primaryText}</span>{" "}
        <span className="z-10 drop-shadow-md text-secondary">
          {secondaryText}
        </span>
      </h2>
    </motion.div>
  );
}
