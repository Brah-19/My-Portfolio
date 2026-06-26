"use client"

import { useState } from "react"
import { Brain, ChevronDown, Code2, Cpu, Database, Globe, Layout, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    summary: "Interfaces, apps, and polished user flows.",
    accent: "from-cyan-400/20 to-primary/10 text-cyan-200 border-cyan-300/20",
    skills: [
      { name: "HTML", Icon: Code2 },
      { name: "CSS", Icon: Layout },
      { name: "JavaScript", Icon: Terminal },
      { name: "React", Icon: Code2 },
      { name: "Next.js", Icon: Globe },
      { name: "Tailwind CSS", Icon: Cpu },
      { name: "TypeScript", Icon: Terminal },
      { name: "React Native", Icon: Layout },
      { name: "Vite", Icon: Cpu },
      { name: "Responsive UI", Icon: Layout },
    ],
  },
  {
    title: "Tools & Design",
    icon: Code2,
    summary: "Design, APIs, deployment, and workflow tools.",
    accent: "from-fuchsia-400/20 to-pink-400/10 text-fuchsia-200 border-fuchsia-300/20",
    skills: [
      { name: "Figma", Icon: Layout },
      { name: "Git", Icon: Terminal },
      { name: "GitHub", Icon: Globe },
      { name: "Postman", Icon: Terminal },
      { name: "VS Code", Icon: Code2 },
      { name: "Expo", Icon: Layout },
      { name: "Vercel", Icon: Globe },
      { name: "Paystack", Icon: Cpu },
      { name: "Swift Playgrounds", Icon: Terminal },
    ],
  },
  {
    title: "Backend & Other",
    icon: Database,
    summary: "Data, auth, APIs, and app foundations.",
    accent: "from-emerald-400/20 to-teal-400/10 text-emerald-200 border-emerald-300/20",
    skills: [
      { name: "Firebase", Icon: Cpu },
      { name: "Node.js", Icon: Terminal },
      { name: "Supabase", Icon: Database },
      { name: "Sanity CMS", Icon: Code2 },
      { name: "MongoDB", Icon: Database },
      { name: "Express.js", Icon: Terminal },
      { name: "Prisma", Icon: Database },
      { name: "PostgreSQL", Icon: Database },
      { name: "MySQL", Icon: Database },
      { name: "PHP", Icon: Terminal },
      { name: "REST APIs", Icon: Globe },
      { name: "Authentication", Icon: Database },
      { name: "Real-time Data", Icon: Database },
      { name: "Content APIs", Icon: Globe },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    summary: "Models, analysis, and smart product ideas.",
    accent: "from-amber-300/20 to-orange-400/10 text-amber-100 border-amber-300/20",
    skills: [
      { name: "Artificial Intelligence", Icon: Brain },
      { name: "Machine Learning", Icon: Cpu },
      { name: "Python", Icon: Terminal },
      { name: "Data Analysis", Icon: Database },
      { name: "Pandas", Icon: Database },
      { name: "NumPy", Icon: Cpu },
      { name: "Scikit-learn", Icon: Cpu },
      { name: "TensorFlow", Icon: Brain },
      { name: "PyTorch", Icon: Brain },
      { name: "Model Training", Icon: Cpu },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("")
  const [expandedCategory, setExpandedCategory] = useState("")

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
          <span className="w-8 h-px bg-primary/50" />
          I write;
        </h2>
        <p className="text-sm text-muted-foreground">A small stack for building clean, useful web things.</p>
      </div>

      <div className="grid gap-3">
        {skillCategories.map((category, index) => {
          const CategoryIcon = category.icon
          const isActive = activeCategory === category.title
          const isExpanded = expandedCategory === category.title
          const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, 4)
          const hiddenSkillsCount = category.skills.length - visibleSkills.length

          return (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-card/45 backdrop-blur-xl transition-all duration-300 hover:border-primary/25 hover:bg-card/65"
            >
              <button
                type="button"
                onClick={() => {
                  setActiveCategory((currentCategory) =>
                    currentCategory === category.title ? "" : category.title
                  )
                  setExpandedCategory("")
                }}
                className="relative z-10 flex w-full items-center justify-between gap-4 p-4 text-left"
                aria-expanded={isActive}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-gradient-to-br ${category.accent}`}>
                    <CategoryIcon size={18} />
                  </span>

                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                        {category.title}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                        0{index + 1}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {category.summary}
                    </span>
                  </span>
                </span>

                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : ""}`}
                />
              </button>

              {isActive && (
                <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="grid grid-cols-2 gap-2 border-t border-white/5 px-4 pb-4 pt-3 sm:grid-cols-4">
                    {visibleSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex min-h-10 items-center gap-2 rounded-lg border border-white/5 bg-background/35 px-2.5 py-2 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
                      >
                        <skill.Icon size={14} className="shrink-0 text-primary" />
                        <span className="text-xs font-semibold leading-tight text-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {category.skills.length > 4 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCategory(isExpanded ? "" : category.title)
                      }
                      className="mx-4 mb-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-xs font-bold text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Show less" : `Show ${hiddenSkillsCount} more`}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
