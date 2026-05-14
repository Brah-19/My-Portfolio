"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    period: "November 2024 - March 2025",
    role: "Frontend Developer Intern",
    company: "Vandzilah Technology",
    location: "Accra, Ghana",
    highlights: [
      "Designed and built scalable user interfaces for web platforms, improving navigation and ease of use for informal retailers seeking inventory financing.",
      "Built and optimized an admin dashboard with dynamic tables for user, credit, and transaction data, reducing data retrieval time by 50%.",
      "Developed an interactive loan application dashboard that reduced application processing time by 40%.",
      "Technologies: Next.js, React, Tailwind CSS, TypeScript.",
    ],
  },
  {
    period: "March 2024 - October 2024",
    role: "Web Development Intern",
    company: "iBrand Ghana",
    location: "Accra, Ghana",
    highlights: [
      "Created and maintained websites using HTML, CSS, and JavaScript to build visual elements and core functionality.",
      "Identified and fixed bugs to keep websites working smoothly across different browsers and devices.",
      "Collaborated with web designers to bring creative concepts to life and match desired design standards.",
      "Updated and maintained websites to keep them secure, current, and compatible with modern web standards.",
    ],
  },
  {
    period: "May 2024 - August 2024",
    role: "Database Design and Analysis Intern",
    company: "Glof Company",
    location: "Accra, Ghana",
    highlights: [
      "Designed and analyzed databases to support efficient data storage and retrieval.",
      "Organized and structured data for businesses and organizations.",
    ],
  },
  {
    period: "March 2024 - February 2026",
    role: "Professional Driver",
    company: "Uber",
    location: "Accra, Ghana",
    highlights: [
      "Maintained a 4.9+ star rating by providing safe, punctual, and professional ride-sharing service.",
      "Applied strong urban navigation, passenger safety, vehicle cleanliness, and customer service skills.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8">Work Experience</h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
          >
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
              <Briefcase size={24} />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-foreground">
                {exp.role}
              </h3>
              <p className="text-muted-foreground text-sm">
                {exp.company} - {exp.location}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                {exp.period}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
