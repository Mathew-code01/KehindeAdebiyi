// app/page.js

import Image from "next/image";

export default function BirthdayPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden font-sans">
      {/* SECTION 1: THE HERO (Enhanced Visibility) */}
      <section className="relative h-screen max-h-[700px] md:max-h-[850px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Kehinde Adebiyi"
            fill
            priority
            className="object-cover opacity-70" // Increased from 20 to 80 for visibility
          />

          {/* Professional Color Wash: 
              This adds a slight blue/purple tint so the white clothes 
              look "expensive" and different from the page background 
          */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-white/20 to-white"></div>

          {/* Subtle Vignette: 
              Darkens the very edges to keep the focus on his face 
          */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(255,255,255,0.8)]"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 space-y-6 md:space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.8em] text-blue-700 font-black drop-shadow-sm">
              Kehindeadebiyi.org
            </span>
            <div className="h-px w-8 bg-blue-300 mx-auto"></div>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter text-slate-900 leading-[1.1] drop-shadow-sm">
            World <br />
            <span className="font-serif italic text-purple-700">
              Adebiyi&apos;s
            </span>{" "}
            Day
          </h1>

          <p className="text-[10px] md:text-xs font-bold text-slate-600 max-w-md mx-auto leading-relaxed tracking-[0.4em] uppercase bg-white/40 backdrop-blur-sm py-2 rounded-full">
            A Tribute to Leadership & Mentorship
          </p>

          <div className="pt-12">
            <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MENTOR (WHITE SECTION) */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-700">
              <Image
                src="/mentor-1.jpg"
                alt="Kehinde Adebiyi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            {/* Minimalist Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-slate-100 p-8 rounded-2xl shadow-2xl hidden lg:block transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-black">
                Legacy
              </p>
              <p className="text-lg font-serif italic text-slate-900 mt-1">
                Kehinde Adebiyi
              </p>
            </div>
          </div>

          <div className="space-y-8 md:pr-8">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-purple-600 font-bold">
              The Mentor
            </h2>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              A Vision Built <br /> on Resilience.
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
              True leadership is not about being in charge, but about taking
              care of those in your charge. To a mentor whose guidance has
              redefined excellence.
            </p>
            <div className="flex gap-4 pt-4 items-center">
              <div className="h-px w-8 bg-slate-300"></div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                Mentor . Brother . Leader
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BROTHERHOOD (SOFT PURPLE ZEBRA) */}
      <section className="bg-[#FAF9FF] py-20 md:py-32 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">
              The Bond
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
              Shared Journey & Brotherhood.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-700">
              <Image
                src="/brother-1.jpg"
                alt="Brotherhood"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-700 md:-translate-y-8">
              <Image
                src="/brother-2.jpg"
                alt="Mentorship"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-700">
              <Image
                src="/mentor-2.jpg"
                alt="Impact"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIALS (BETTER UI) */}
      <section className="py-24 md:py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight">
              Celebrate{" "}
              <span className="font-serif italic text-purple-600">
                Adebiyi.
              </span>
            </h2>
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black">
              Send your wishes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["LinkedIn", "Instagram", "WhatsApp", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="py-8 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group"
              >
                <span className="text-[10px] tracking-widest uppercase text-slate-400 group-hover:text-blue-600 transition-colors font-black">
                  {social}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER: GLASSMORPHISM */}
      <footer className="bg-[#0A0A0B] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-8">
          <p className="text-white text-[10px] tracking-[1.5em] uppercase opacity-30">
            Kehindeadebiyi.org
          </p>
          <div className="h-px w-24 bg-white/10"></div>
          <p className="text-white/20 text-[9px] tracking-[0.8em] font-bold uppercase">
            A Legacy of Excellence — 2026
          </p>
        </div>
      </footer>
    </main>
  );
}