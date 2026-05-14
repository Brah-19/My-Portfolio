export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  intro: string
  sections: {
    heading: string
    body: string[]
  }[]
  takeaway: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "from-bootcamp-to-first-tech-job",
    title: "From Bootcamp to Landing Your First Tech Job",
    excerpt:
      "My journey through the ALX Software Development program and the habits that made frontend development feel real.",
    date: "March 2024",
    readTime: "8 min read",
    category: "Career",
    intro:
      "Bootcamp life has a funny way of turning ordinary days into tiny survival missions. One moment you are learning Git, the next you are debugging a layout at midnight and wondering why one div has decided to start a private rebellion. But that pressure also teaches you something valuable: how to keep moving when the answer is not obvious yet.",
    sections: [
      {
        heading: "The First Big Shift",
        body: [
          "Before ALX, I thought becoming a developer was mostly about knowing the right syntax. After a few projects, I realized the real skill is learning how to think through messy problems without panicking. Syntax matters, but patience, curiosity, and the ability to break a problem into smaller pieces matter even more.",
          "Frontend development made that lesson very visible. If spacing is wrong, users see it. If a button feels confusing, users feel it. That instant feedback pushed me to care about details, accessibility, and the small moments that make an interface feel calm instead of stressful.",
        ],
      },
      {
        heading: "Projects Made It Click",
        body: [
          "The biggest growth came from building. Tutorials gave me direction, but projects gave me judgment. Every project asked the same quiet question: can you turn an idea into something someone can actually use?",
          "That is where I learned to read documentation with a purpose, ask better questions, and stop treating errors like failure. An error is often just the app explaining where your mental model needs a little repair.",
        ],
      },
      {
        heading: "What Helped Me Stand Out",
        body: [
          "I started treating my portfolio like a product, not a storage room for screenshots. Each section needed to answer a question: what can I build, how do I think, and why would someone trust me with real work?",
          "I also learned to explain my decisions. A good developer is not only the person who writes code; it is the person who can tell a clear story about tradeoffs, constraints, and why the final solution makes sense.",
        ],
      },
    ],
    takeaway:
      "The first tech job is not won by magic. It is built through consistent practice, honest projects, clear communication, and the willingness to improve one small detail at a time.",
  },
  {
    slug: "designing-frontend-experiences-that-feel-alive",
    title: "Designing Frontend Experiences That Feel Alive",
    excerpt:
      "A practical look at making interfaces feel polished, useful, and memorable without overloading the user.",
    date: "February 2025",
    readTime: "10 min read",
    category: "Frontend",
    intro:
      "A good frontend is more than a pretty screen. It is a conversation between the user and the product. Every color, button, delay, hover state, and empty space says something. The fun part is making all those tiny details speak the same language.",
    sections: [
      {
        heading: "Start With The Feeling",
        body: [
          "Before opening the code editor, I like to ask what the interface should feel like. Should it feel fast and focused? Friendly and playful? Serious and reliable? That decision shapes the layout, the spacing, the motion, and even the words on the screen.",
          "When the feeling is clear, design choices become easier. You stop adding decoration just because there is space, and you start building moments that support the user's next action.",
        ],
      },
      {
        heading: "Make The Main Action Obvious",
        body: [
          "Users should not need a treasure map to understand what to do next. A strong frontend guides attention with hierarchy: clear headings, useful contrast, predictable buttons, and enough breathing room for the important parts to stand out.",
          "This does not mean everything should be loud. Most screens become better when a few elements lead and the rest politely support them.",
        ],
      },
      {
        heading: "Polish Lives In The Small Stuff",
        body: [
          "A hover state that responds smoothly, a card that keeps its spacing on mobile, a button label that sounds human, a loading state that does not jump around: these details are small until they are missing.",
          "The best frontend work often feels invisible. People may not point at the alignment or the motion curve, but they feel the difference when the page behaves with care.",
        ],
      },
      {
        heading: "Build For Real People",
        body: [
          "Real users are distracted, busy, impatient, and using different devices. That means accessibility, responsiveness, and readability are not bonus features. They are part of the main work.",
          "I try to check whether the design still works when the screen is narrow, the text is longer than expected, the user is moving fast, or the page has no data yet. That is where an interface proves itself.",
        ],
      },
    ],
    takeaway:
      "Frontend becomes exciting when design and code stop competing. The screen starts to feel alive when every detail helps the user feel oriented, confident, and ready to continue.",
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
