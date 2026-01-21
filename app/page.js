// app/page.js

// app/page.js
// app/page.js
// app/page.js
// app/page.js
import Image from "next/image";
import { Linkedin, Instagram, ArrowDown } from "lucide-react";

export default function BirthdayPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans">
      
      {/* SECTION 1: HERO - CINEMATIC IMPACT */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <Image
            src="/hero-bg.jpg" 
            alt="World Adebiyi Day"
            fill
            priority
            className="object-cover opacity-70 transition-transform duration-[10000ms] hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
        </div>

        <div className="relative z-10 space-y-8 max-w-5xl animate-in fade-in zoom-in-95 duration-1000">
          <div className="space-y-4">
             <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-white/30 backdrop-blur-md">
                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-blue-900 font-bold">
                  Celebrating Two Remarkable Lives
                </span>
             </div>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter text-slate-950 leading-[0.9]">
            World <br />
            <span className="font-serif italic text-blue-800 drop-shadow-sm">Adebiyi&apos;s</span> Day
          </h1>

          <div className="flex flex-col items-center gap-6 pt-8">
            <p className="text-[9px] md:text-[11px] font-medium text-slate-700 max-w-md leading-relaxed tracking-[0.3em] uppercase">
              Impact • Brotherhood • Excellence
            </p>
            <div className="flex flex-col items-center gap-4 animate-bounce mt-4">
               <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
               <ArrowDown className="w-4 h-4 text-slate-400 stroke-[1px]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRIBUTE - MENTORSHIP & IMPACT */}
      <section className="py-24 md:py-40 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
            <Image
              src="/mentor-1.jpg" 
              alt="Kehinde Adebiyi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-xl rounded-xl border border-white/20">
              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mb-1">Mentor & Advocate</p>
              <h4 className="text-xl font-serif italic text-slate-900">Kehinde Adebiyi</h4>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">A Life of Influence</h2>
                <h3 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Guidance Built <br /> on <span className="italic font-serif text-blue-700">Global Perspective.</span>
                </h3>
            </div>
            
            <div className="space-y-6 text-slate-500 text-sm md:text-base leading-relaxed font-light">
              <p>
                From the halls of <strong>Lagos State University (LASU)</strong> to the global academic stage at <strong>Indiana University</strong>, Kehinde Adebiyi has redefined what it means to lead with intellect and humility.
              </p>
              <p>
                As a prestigious <strong>Millennial Fellow</strong> and a fierce <strong>SSG advocate</strong>, his footprint is seen in the lives he has mentored and the systems he has championed for student leadership.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <p className="italic font-serif text-slate-400">&quot;Proof that purpose and excellence can coexist.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SHARED LEGACY (ZEBRA - DARK) */}
      <section className="bg-[#050505] py-24 md:py-40 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          <div className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-bold">Unity & Brotherhood</h2>
            <h3 className="text-4xl md:text-6xl font-light text-white tracking-tighter">
              One Birthday. <br /> <span className="font-serif italic text-slate-500">Shared Greatness.</span>
            </h3>
            <p className="text-white/40 text-[11px] md:text-sm max-w-lg mx-auto font-light leading-relaxed">
              Kehinde and Taiwo Adebiyi represent the perfect balance of vision and loyalty. Today we celebrate the strength that comes from their shared journey.
            </p>
          </div>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="/brother-1.jpg" 
              alt="Shared Legacy"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 w-full">
                <span className="text-[10px] uppercase tracking-[0.8em] text-white font-light">Brotherhood • Unity • Strength</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PERSONAL WISH (WHITE) */}
      <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-12">
            <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1]">
                  Happy Birthday, <br /> 
                  <span className="font-serif italic text-blue-700">Kehinde Adebiyi.</span>
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                  Your journey has shaped minds and opened doors for many. This domain is a small gift—a permanent home for your legacy and a reminder that your work truly matters.
                </p>
            </div>

            <div className="space-y-8">
               <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">Celebrate & Connect</p>
               <div className="flex flex-wrap gap-8">
                  {/* LinkedIn Button */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:border-[#0077b5] transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-xl">
                        <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors stroke-[1.5px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-900">LinkedIn</span>
                        <span className="text-[9px] text-slate-400">Professional Profile</span>
                    </div>
                  </a>

                  {/* Instagram Button */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-pink-200 group-hover:shadow-xl">
                        <Instagram className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors stroke-[1.5px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-900">Instagram</span>
                        <span className="text-[9px] text-slate-400">Personal Moments</span>
                    </div>
                  </a>
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative group">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-1000"></div>
             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/mentor-2.jpg" 
                  alt="Birthday Celebration"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] py-24 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-8">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <p className="text-white text-[10px] tracking-[1.5em] uppercase opacity-40 ml-[1.5em]">
            KEHINDEADEBIYI.ORG
          </p>
          <p className="text-white/20 text-[8px] tracking-[0.5em] font-medium uppercase">
            A Tribute to Excellence &bull; 2026
          </p>
        </div>
      </footer>
    </main>
  );
}