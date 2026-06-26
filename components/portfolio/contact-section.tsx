"use client"

import { useState } from "react"
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Twitter } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8">Contact me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {"I'm currently open to new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out!"}
          </p>
          <div className="space-y-4">
            <a href="mailto:emmanuelopare763@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
              <span>emmanuelopare763@gmail.com</span>
            </a>
            <a
              href="https://wa.me/233540319135"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle size={18} />
              <span>+233 (0) 540 319 135</span>
            </a>
            <a
              href="https://www.instagram.com/mr._immanuel?igsh=OHhjZ2RuNTF0bDkx&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a
              href="https://x.com/oparexoxo?s=11"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={18} />
              <span>X</span>
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-opare-717066285?"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} />
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
          <textarea
            placeholder="Message"
            required
            rows={4}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
