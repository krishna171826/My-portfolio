import { useState } from 'react'
import { StarfieldBackground } from '../components/Background'
import { Footer } from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto w-full max-w-2xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-white/60 text-3xl">
            Parlons de votre projet
          </p>
        </div>

        {submitted && (
          <div className="mb-8 text-center text-green-300/90 font-mono text-sm">
            ✓ Message envoyé avec succès!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nom"
              className="w-full bg-transparent border-b border-white/20 px-0 py-2 font-mono text-sm text-white placeholder-white/40 transition focus:border-white focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/20 px-0 py-2 font-mono text-sm text-white placeholder-white/40 transition focus:border-white focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Message"
              className="w-full bg-transparent border-b border-white/20 px-0 py-2 font-mono text-sm text-white placeholder-white/40 transition focus:border-white focus:outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-8">
            <button
              type="submit"
              className="text-white font-mono text-sm group hover:text-white/70 transition"
            >
              Envoyer →
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  )
}
