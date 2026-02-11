"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Brain, Users, Coffee, MapPin, Shield, Sun, Menu, X, CheckCircle2 } from "lucide-react";

export default function Home() {
  // State for Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-emerald-900 tracking-tight z-50 relative">
            Dr. Maya Reynolds, PsyD
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <Link href="#about" className="hover:text-emerald-800 transition">About</Link>
            <Link href="#services" className="hover:text-emerald-800 transition">Specialties</Link>
            <Link href="#office" className="hover:text-emerald-800 transition">My Office</Link>
            <Link href="#faq" className="hover:text-emerald-800 transition">FAQ</Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link href="#contact" className="bg-emerald-900 text-stone-50 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors shadow-sm">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="md:hidden z-50 relative text-emerald-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Overlay Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
               <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-emerald-900">About</Link>
               <Link href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-emerald-900">Specialties</Link>
               <Link href="#office" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-emerald-900">My Office</Link>
               <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-emerald-900">FAQ</Link>
               <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-emerald-900 text-stone-50 px-8 py-3 rounded-full text-lg font-medium">Book Consultation</Link>
            </div>
          )}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-800 text-xs font-bold uppercase tracking-widest rounded-full">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            In-Person & Telehealth (CA)
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-emerald-950">
            Quiet the noise. <br />
            <span className="text-emerald-700 italic font-medium">Find your ground.</span>
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
            Specialized therapy for high-achievers in Santa Monica navigating anxiety, burnout, and complex trauma. A space to slow down and reconnect with yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#contact" className="px-8 py-4 bg-emerald-900 text-stone-50 rounded-full hover:bg-emerald-800 transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10">
              Schedule Free Call <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="px-8 py-4 border border-emerald-900 text-emerald-900 rounded-full hover:bg-emerald-50 transition flex items-center justify-center">
              View Specialties
            </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="order-1 md:order-2 relative h-[600px] w-full">
          <div className="absolute inset-0 bg-stone-200 rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
              alt="Dr. Maya Reynolds Therapy Session"
              fill
              className="object-cover object-[50%_20%] hover:scale-105 transition duration-1000"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">How We Can Work Together</h2>
            <p className="text-stone-600 text-lg">Integrative care combining CBT, EMDR, and somatic approaches.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-stone-100 group cursor-default">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-3">Anxiety & Panic</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                For those who feel "functional" on the outside but quietly struggle with constant worry, tension, or a sense that they are always bracing for something to go wrong.
              </p>
              <Link href="#contact" className="text-emerald-700 font-semibold text-sm hover:underline flex items-center gap-1">
                Book Session <ArrowRight size={14}/>
              </Link>
            </div>

            <div className="p-8 bg-stone-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-stone-100 group cursor-default">
              <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-3">Trauma & EMDR</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Whether it's single-incident trauma or complex, long-standing patterns. We prioritize safety and stabilization to help you feel more regulated in daily life.
              </p>
              <Link href="#contact" className="text-emerald-700 font-semibold text-sm hover:underline flex items-center gap-1">
                Book Session <ArrowRight size={14}/>
              </Link>
            </div>

            <div className="p-8 bg-stone-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-stone-100 group cursor-default">
              <div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-3">Professional Burnout</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Support for entrepreneurs and creatives who feel disconnected after years of pushing through stress. Develop sustainable ways of living and working.
              </p>
              <Link href="#contact" className="text-emerald-700 font-semibold text-sm hover:underline flex items-center gap-1">
                Book Session <ArrowRight size={14}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* PROFILE IMAGE - Uses local 'profile.jpg' */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image 
              src="/profile.jpg" 
              alt="Dr. Maya Reynolds Portrait"
              fill
              className="object-cover object-top"
            />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950">
              Meet Dr. Maya Reynolds
            </h2>
            <h3 className="text-emerald-700 font-medium text-lg uppercase tracking-wide">Licensed Clinical Psychologist</h3>
            
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p className="italic font-serif text-xl text-emerald-900 border-l-4 border-amber-400 pl-4 my-6">
                "I believe therapy works best when clients feel respected, understood, and actively involved in the process."
              </p>
              <p>
                I am a licensed clinical psychologist based in Santa Monica, California. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted or emotionally on edge.
              </p>
              <p>
                My approach is warm, collaborative, and grounded. I integrate evidence-based methods such as Cognitive-Behavioral Therapy (CBT), EMDR, and body-oriented techniques to help you understand both the emotional and physiological roots of your experience.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-stone-200">
                 <div className="text-3xl font-bold text-emerald-800">PsyD</div>
                 <div className="text-sm font-medium text-stone-500 uppercase tracking-wider mt-1">Doctorate in Psychology</div>
               </div>
               <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-stone-200">
                 <div className="text-3xl font-bold text-emerald-800">CA</div>
                 <div className="text-sm font-medium text-stone-500 uppercase tracking-wider mt-1">Licensed in California</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">Common Questions</h2>
            <p className="text-stone-600">Things you might want to know before your first session.</p>
            </div>
            
            <div className="space-y-6">
            {[
                { q: "Do you offer in-person sessions?", a: "Yes, I offer in-person therapy from my Santa Monica office. I also provide secure telehealth sessions for clients located anywhere in California." },
                { q: "What is your approach to trauma?", a: "I use a paced approach emphasizing safety and stabilization first. We may use EMDR or body-oriented techniques to help process past experiences without overwhelming you." },
                { q: "Do you accept insurance?", a: "I am an out-of-network provider. I can provide a superbill for you to submit to your insurance for potential reimbursement." }
            ].map((item, i) => (
                <div key={i} className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-emerald-200 transition">
                <h3 className="text-lg font-serif font-bold text-emerald-900 mb-2">{item.q}</h3>
                <p className="text-stone-600">{item.a}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

   {/* --- OUR OFFICE SECTION (Fixed: Perfectly Aligned) --- */}
      <section id="office" className="py-24 bg-emerald-900 text-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT: Text Content */}
          <div className="md:col-span-5 space-y-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">A Calm, Grounding Space</h2>
                <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
            </div>
            
            <p className="text-emerald-100 text-lg leading-relaxed opacity-90">
              My office in Santa Monica is a quiet, private space designed to feel calm and grounding. With natural light and an uncluttered environment, the space itself helps you feel more at ease the moment you arrive.
            </p>

            <ul className="space-y-6 mt-4">
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-emerald-800/50 rounded-lg text-amber-400 group-hover:bg-emerald-800 transition">
                    <Sun size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Natural Light</h4>
                    <p className="text-sm text-emerald-200 leading-relaxed">A bright, airy environment that supports clarity and connection.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-emerald-800/50 rounded-lg text-amber-400 group-hover:bg-emerald-800 transition">
                    <Shield size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Private & Uncluttered</h4>
                    <p className="text-sm text-emerald-200 leading-relaxed">Designed to minimize distraction and maximize safety.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-emerald-800/50 rounded-lg text-amber-400 group-hover:bg-emerald-800 transition">
                    <MapPin size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Santa Monica</h4>
                    <p className="text-sm text-emerald-200 leading-relaxed">Conveniently located at 123th Street 45 W.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: Image Gallery (Symmetrical & Aligned) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Row of 2 Images - Perfectly Aligned */}
            <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800/30">
                    <Image 
                      src="/office1.jpg" 
                      alt="Dr. Maya Reynolds Therapy Office Seating" 
                      fill 
                      className="object-cover hover:scale-105 transition duration-700"
                    />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800/30">
                    <Image 
                      src="/office2.jpg" 
                      alt="Dr. Maya Reynolds Office Decor" 
                      fill 
                      className="object-cover hover:scale-105 transition duration-700"
                    />
                </div>
            </div>

            {/* Quote Box - Full Width below images */}
            <div className="p-6 bg-emerald-800/80 backdrop-blur-sm rounded-2xl border border-emerald-700 text-center">
                <p className="text-emerald-100 italic text-lg">"Clients often share that the space itself helps them feel more at ease when they arrive."</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-emerald-950 text-emerald-200/60 py-20 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
                <span className="text-3xl font-serif font-bold text-stone-50 block">Dr. Maya Reynolds, PsyD</span>
                <p className="max-w-sm text-emerald-200/80 leading-relaxed">
                  Helping high-achievers find insight, resilience, and a stronger relationship with themselves.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Practice</h4>
                <ul className="space-y-3 text-sm">
                    <li><Link href="#about" className="hover:text-white transition flex items-center gap-2"><CheckCircle2 size={12}/> About Dr. Reynolds</Link></li>
                    <li><Link href="#services" className="hover:text-white transition flex items-center gap-2"><CheckCircle2 size={12}/> Specialties</Link></li>
                    <li><Link href="#office" className="hover:text-white transition flex items-center gap-2"><CheckCircle2 size={12}/> My Office</Link></li>
                    <li><Link href="#faq" className="hover:text-white transition flex items-center gap-2"><CheckCircle2 size={12}/> FAQ</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                        <Coffee size={18} className="text-amber-500"/>
                        <span>hello@drmaya.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ArrowRight size={18} className="text-amber-500"/>
                        <span>(555) 123-4567</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-amber-500 shrink-0"/>
                        <span>123th Street 45 W<br/>Santa Monica, CA 90401</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-emerald-900 text-xs text-center flex flex-col md:flex-row justify-between items-center text-emerald-400/50">
            <p>© 2026 Dr. Maya Reynolds Psychology. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-emerald-200">Privacy Policy</Link>
                <Link href="#" className="hover:text-emerald-200">Terms of Service</Link>
            </div>
        </div>
      </footer>
    </main>
  );
}