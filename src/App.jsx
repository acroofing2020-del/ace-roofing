import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Wrench, Home, Sun, Droplets, CloudLightning, Hammer, Star, Check } from "lucide-react";
import { motion } from "framer-motion";

const BRAND = {
  name: "Ace Roofing",
  tagline: "From small repairs to complete new roofs.",
  phone: "07383009362",
  email: "acroofing2020@gmail.com",
  serviceAreas: ["Kent", "South West London"],
  hero: {
    headline: "All types of roofing covered — big or small",
    sub: "Trusted local roofers for everything from minor repairs to full new builds.",
  },
};

const SERVICES = [
  { icon: <Wrench />, title: "Small Roof Repairs", desc: "Quick fixes for leaks, missing tiles, and storm damage." },
  { icon: <Home />, title: "Complete New Roofs", desc: "Full roof builds with high-quality materials and workmanship." },
  { icon: <Sun />, title: "Flat Roofing", desc: "EPDM, fibreglass, and felt systems with long-lasting durability." },
  { icon: <Droplets />, title: "Guttering & Fascias", desc: "Installation and maintenance of gutters, soffits & fascias." },
  { icon: <CloudLightning />, title: "Roof Inspections", desc: "Comprehensive surveys with clear recommendations." },
  { icon: <Hammer />, title: "Maintenance Services", desc: "From moss removal to preventative treatments." },
];

const TESTIMONIALS = [
  { name: "Paul R.", text: "Ace Roofing replaced our entire roof with no fuss. Great price and a professional finish.", rating: 5 },
  { name: "Sophie L.", text: "Fixed a leak within 24 hours. Friendly and reliable team.", rating: 5 },
  { name: "Graham D.", text: "Highly recommend Ace Roofing. Honest advice and top-quality workmanship.", rating: 5 },
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>{BRAND.name} | Roofing in Kent & South West London</title>
        <meta name="description" content="From small roof repairs to complete new roofs, Ace Roofing covers all of Kent and South West London." />
      </Helmet>

      {/* HERO */}
      <section className="bg-teal-700 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">{BRAND.hero.headline}</h1>
        <p className="mb-6">{BRAND.hero.sub}</p>
        <a href="#quote" className="bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold">Get a free quote</a>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={i} className="bg-white rounded-2xl p-6 shadow" whileHover={{ scale: 1.05 }}>
              <div className="text-teal-600 mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="mb-3 italic">“{t.text}”</p>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} />)}
              </div>
              <p className="mt-2 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="quote" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Get a Free Quote</h2>
        {!submitted ? (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="max-w-xl mx-auto space-y-4"
          >
            <input className="w-full border p-3 rounded" placeholder="Your Name" required />
            <input className="w-full border p-3 rounded" type="email" placeholder="Your Email" required />
            <textarea className="w-full border p-3 rounded" rows="4" placeholder="Tell us about your roofing needs" required></textarea>
            <button type="submit" className="bg-teal-700 text-white px-6 py-3 rounded-lg">Submit</button>
          </form>
        ) : (
          <p className="text-center text-green-600 font-bold">Thank you! We'll get back to you soon.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-900 text-white py-10 text-center">
        <p className="mb-2">{BRAND.name} | {BRAND.tagline}</p>
        <p className="flex justify-center gap-4">
          <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1"><Phone size={16}/> {BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1"><Mail size={16}/> {BRAND.email}</a>
        </p>
        <p className="mt-2"><MapPin size={16} className="inline"/> Serving {BRAND.serviceAreas.join(" & ")}</p>
      </footer>
    </>
  );
}
