import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { blogPosts, getBlogPost } from "@/lib/blog-posts"

type BlogPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Blog post not found",
    }
  }

  return {
    title: `${post.title} | Toks`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10 md:px-10 md:py-16">
        <Link
          href="/#blog"
          className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to articles
        </Link>

        <header className="mb-10 border-b border-border pb-8">
          <span className="mb-4 block text-sm font-semibold text-primary">
            {post.category}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="space-y-8 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="text-xl leading-9 text-foreground md:text-2xl">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="rounded-xl border border-primary/20 bg-primary/10 p-6 text-foreground">
            <p className="font-semibold text-primary">Final thought</p>
            <p className="mt-3 leading-8">{post.takeaway}</p>
          </div>
        </div>
      </article>
    </main>
  )
}
