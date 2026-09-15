import type { ReactNode } from "react";
import { SKILLS } from "@/data/portfolio";

export function SkillsMarquee(): ReactNode {
  const half = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, half);
  const row2 = SKILLS.slice(half);

  return (
    <section className="w-full py-8">
      <div 
        className="relative mx-auto flex w-full max-w-5xl flex-col gap-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Row 1: Scrolling Left */}
        <div className="flex w-full overflow-hidden">
          <div className="flex min-w-max items-center animate-marquee">
            {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <div key={index} className="flex items-center px-4 sm:px-6">
                <span className="rounded-full border border-foreground/10 bg-foreground/5 px-5 py-2 text-[14px] font-medium tracking-tight text-foreground/80 shadow-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-full overflow-hidden">
          <div className="flex min-w-max items-center animate-marquee-reverse">
            {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <div key={index} className="flex items-center px-4 sm:px-6">
                <span className="rounded-full border border-foreground/10 bg-foreground/5 px-5 py-2 text-[14px] font-medium tracking-tight text-foreground/80 shadow-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
