"use client"

import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8">Latest Articles</h2>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-primary mb-2 block">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground md:opacity-0 md:group-hover:opacity-100"
                  aria-label={`Read ${post.title}`}
                >
                  <span className="hidden sm:inline">Continue reading</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
