"use client";

import { motion } from "framer-motion";

import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/lib/data";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { LiaAwardSolid } from "react-icons/lia";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";

export default function ExperienceSection() {
  const { theme } = useTheme();

  return (
    <Section sectionView="Experience" id="experience">
      <div className="px-4 py-20 overflow-hidden">
        <SectionHeading
          primaryText="Awesome"
          secondaryText="Journey"
          shadowText="Experience"
        />
        <div className="space-y-20">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-5">
              <LiaGraduationCapSolid className="text-secondary text-6xl" />{" "}
              <h3 className="text-3xl font-bold">Education</h3>
            </motion.div>
            <div className="px-4 space-y-8">
              {EDUCATION_DATA.map((item, i) => template(item, i, theme))}
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-5">
              <LiaAwardSolid className="text-secondary text-6xl" />{" "}
              <h3 className="text-3xl font-bold">Experiences</h3>
            </motion.div>
            <div className="px-4 space-y-8">
              {EXPERIENCE_DATA.map((item, i) => template(item, i, theme))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const template = (item: any, i: number, theme: any) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.2 * i,
        },
      }}
      viewport={{ once: true }}
      key={i}
      className="flex items-start gap-6">
      <div className="mt-2 rounded-full h-4 w-4 bg-secondary ring-offset-4 ring-1 animate-bounce"></div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold">{item.title}</h4>
        <h5
          className={`text-lg italic font-medium ${
            theme === "light" ? "text-primary/70" : "text-slate-50/70"
          }`}>
          {item.subTitle}
        </h5>
        <div className="text-sm font-medium text-secondary flex items-center gap-2 mt-4">
          <FaCalendarAlt /> <span className="italic">{item.date}</span>
        </div>
        {item.taskList && (
          <div className="space-y-3 mt-4">
            <p className="italic text-sm font-medium text-secondary">Tasks:</p>
            <ul className="space-y-2 list-disc pl-5">
              {item.taskList.map((task: any, i: number) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};
