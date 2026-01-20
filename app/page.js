// app/page.js

// app/page.js
import Image from "next/image";

export default function BirthdayPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden font-sans">
      
      {/* SECTION 1: THE CELEBRATION HERO */}
      <section className="relative h-screen max-h-[750px] md:max-h-[900px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Kehinde Adebiyi Celebration"
            fill
            priority
            className="object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white/10 to-white"></div>
        </div>

        <div className="relative z-10 space-y-8 max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-4">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[1em] text-blue-800 font-black drop-shadow-sm ml-[1em]">
              Celebrating A Milestone
            </span>
            <div className="h-px w-8 bg-blue-300 mx-auto"></div>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter text-slate-900 leading-[0.95]">
            World <br />
            <span className="font-serif italic text-purple-700">
              Adebiyi&apos;s
            </span>{" "}
            Day
          </h1>

          <p className="text-[9px] md:text-[10px] font-bold text-slate-500 max-w-sm mx-auto leading-relaxed tracking-[0.5em] uppercase py-4 border-y border-slate-100/50 mt-8">
            Honoring a Legacy of Wisdom and Grace
          </p>

          <div className="pt-16">
            <div className="w-px h-20 bg-gradient-to-b from-blue-600 to-transparent mx-auto animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MAN OF THE MOMENT (White) */}
      <section className="py-32 md:py-48 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
              <Image
                src="/mentor-1.jpg"
                alt="Kehinde Adebiyi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-xl border border-slate-100 p-6 rounded-lg shadow-xl hidden lg:block">
              <p className="text-[9px] uppercase tracking-widest text-blue-600 font-black">Born to Lead</p>
              <p className="text-base font-serif italic text-slate-900">Est. 19XX</p> 
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-purple-600 font-black">The Tribute</h2>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.1]">
                A Lifetime of <br /> <span className="italic font-serif text-blue-800">Inspiration.</span>
              </h3>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light max-w-md">
              Today we don&apos;t just celebrate a date on the calendar; we celebrate the man who has spent years lifting others, mentoring minds, and building a brotherhood that spans across borders.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">
               <span className="text-blue-600 px-3 py-1 border border-blue-100 rounded-full">Chapter One: Wisdom</span>
               <span className="px-3 py-1 border border-slate-100 rounded-full">Chapter Two: Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MEMORIES (Zebra - Deep Blur Dark) */}
      <section className="bg-[#0A0A0C] py-32 md:py-48 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-blue-400 font-black">The Memories</h2>
              <h3 className="text-4xl md:text-5xl font-light text-white tracking-tighter leading-tight">
                Years of <span className="font-serif italic text-slate-400">Pure Joy.</span>
              </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { src: "/brother-1.jpg", label: "Family" },
              { src: "/brother-2.jpg", label: "Friendship" },
              { src: "/mentor-2.jpg", label: "Victory" }
            ].map((img, idx) => (
              <div key={idx} className={`group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 transition-all duration-700 ${idx === 1 ? 'md:-translate-y-12' : ''}`}>
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <p className="text-white text-[10px] uppercase tracking-[0.4em] font-black">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SEND WISHES (White) */}
      <section className="py-32 md:py-48 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 tracking-tighter leading-tight">
              Share the love. <br />
              <span className="font-serif italic text-blue-600">Send your wishes</span>
            </h2>
            <div className="h-px w-16 bg-blue-100 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["WhatsApp", "Instagram", "LinkedIn", "Call"].map((social) => (
              <a
                key={social}
                href="#"
                className="py-10 rounded-xl border border-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 group"
              >
                <span className="text-[9px] tracking-[0.3em] uppercase text-slate-400 group-hover:text-slate-900 transition-colors font-black">
                  {social}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] py-24 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-12">
          <p className="text-white text-[11px] tracking-[1.5em] uppercase opacity-40 font-light">
            Kehindeadebiyi.org
          </p>
          <p className="text-white/30 text-[9px] tracking-[0.6em] font-bold uppercase text-center max-w-xs leading-loose">
            &quot;The best way to predict the future is to create it.&quot;
          </p>
          <p className="text-white/10 text-[8px] tracking-[0.2em] font-bold uppercase">
            Official Birthday Tribute &bull; 2026
          </p>
        </div>
      </footer>
    </main>
  );
}