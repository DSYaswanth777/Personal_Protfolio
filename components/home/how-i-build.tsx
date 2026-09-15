"use client";;
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";

import { HOW_I_BUILD_STEPS as STEPS } from "@/data/portfolio";

export function HowIBuild(): ReactNode {
  return (
    <section className="mx-auto w-full max-w-275 px-6 sm:px-10 py-12 sm:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-16 sm:pb-14"
      >
        <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
          How I Build Web Apps
        </h2>
        <p className="max-w-[40ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
          My end-to-end approach to designing and deploying robust frontend architectures.
        </p>
      </motion.div>

      <div className="mx-auto max-w-160 border border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        {/* Animated background gradient to make it look active */}
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        
        <div className="flex flex-col items-center relative z-10">
          {STEPS.map((s, i) => (
            <motion.div 
              key={s.step} 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center w-full"
            >
              <div className="flex w-full items-center justify-between gap-4 rounded-2xl bg-background border border-foreground/5 p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-[15px] font-semibold text-foreground/70">
                    {s.step}
                  </span>
                  <span className="text-[17px] font-semibold tracking-tight text-foreground sm:text-[18px]">
                    {s.title}
                  </span>
                </div>
                <span className="text-right text-[14px] text-foreground/60 sm:text-[15px] max-w-[50%]">
                  {s.description}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="py-2 text-foreground/20">
                  <ArrowDown className="h-5 w-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
