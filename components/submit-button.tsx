"use client";

import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTheme } from "@/context/theme-context";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="group w-fit">
      <button
        type="submit"
        disabled={pending}
        className={`group transition-all font-medium border-2 border-secondary px-5 py-2 rounded-full flex items-center gap-2 ${
          theme === "light"
            ? "text-slate-50 bg-primary"
            : "text-primary bg-slate-50"
        } ${
          pending
            ? "text-opacity-50 bg-primary/70"
            : "hover:scale-110 hover:shadow-lg hover:text-slate-50 hover:bg-secondary"
        }`}>
        Submit
        {pending ? (
          <AiOutlineLoading3Quarters className="text-lg opacity-70 animate-spin" />
        ) : (
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </button>
    </motion.div>
  );
}
