import { PROJECTS } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/motion-primitives";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";
import type { ReactNode } from "react";
import { ContactCard } from "@/components/contact/contact-card";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-16 sm:px-10 sm:pt-44 sm:pb-20">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground/60 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <header className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium tracking-tight text-foreground/80">
                {project.iconLabel}
              </span>
            </div>
            
            <h1 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.5rem] lg:text-[4rem] max-w-[20ch]">
              {project.title}
            </h1>
            
            <p className="text-[16px] tracking-tight text-foreground/60">
              {project.meta}
            </p>
          </header>
        </FadeIn>


        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          <div className="md:col-span-2 flex flex-col gap-10">
            {/* Description */}
            <FadeIn delay={0.2} className="flex flex-col gap-4">
              <h2 className="text-[22px] font-semibold tracking-tight text-foreground">Project Overview</h2>
              <div className="text-[16px] leading-[1.7] text-foreground/75 space-y-4">
                <p>{project.description}</p>
              </div>
            </FadeIn>

            {/* Features & Capabilities */}
            {project.features && project.features.length > 0 && (
              <FadeIn delay={0.25} className="flex flex-col gap-4">
                <h2 className="text-[22px] font-semibold tracking-tight text-foreground">Features & Capabilities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-foreground/75">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 rounded-xl border border-foreground/5 bg-foreground/2 p-3">
                      <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {/* Architecture / Flow Chart */}
            <FadeIn delay={0.3} className="flex flex-col gap-4">
              <h2 className="text-[22px] font-semibold tracking-tight text-foreground">Architecture & Flow</h2>
              <div className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 p-6 sm:p-10 flex flex-col items-center">
                {project.flow?.map((row, i) => {
                  const nodes = Array.isArray(row) ? row : [row];
                  
                  return (
                    <FadeIn key={i} delay={0.4 + i * 0.1} className="flex flex-col items-center w-full">
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
                        {nodes.map((node, j) => (
                          <div key={node.title + j} className={`flex flex-col items-center justify-center p-4 w-full sm:w-64 rounded-xl border shadow-sm ${node.highlight ? 'border-blue-500/30 bg-blue-500/5' : 'border-foreground/15 bg-background'}`}>
                            <span className={`text-[15px] font-medium text-center ${node.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'}`}>
                              {node.title}
                            </span>
                            {node.subtitle && (
                              <span className={`text-[13px] text-center mt-0.5 ${node.highlight ? 'text-blue-600/70 dark:text-blue-400/70' : 'text-foreground/50'}`}>
                                {node.subtitle}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      {i < (project.flow?.length ?? 0) - 1 && (
                        <ArrowDown className="my-3 h-5 w-5 text-foreground/30" />
                      )}
                    </FadeIn>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <FadeIn delay={0.4} className="flex flex-col gap-8 md:border-l md:border-foreground/10 md:pl-8 lg:pl-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-foreground/50">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, i) => {
                  const colors = [
                    "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                    "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                    "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                    "bg-rose-500/10 text-rose-600 dark:text-rose-400",
                    "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
                  ];
                  return (
                    <span key={skill} className={`rounded-md px-2.5 py-1.5 text-[13px] font-medium ${colors[i % colors.length]}`}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider text-foreground/50">Key Features</h3>
                <ul className="flex flex-col gap-2 text-[15px] text-foreground/75">
                  {project.keyFeatures.map((kf, i) => (
                    <li key={i}>• {kf}</li>
                  ))}
                </ul>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
