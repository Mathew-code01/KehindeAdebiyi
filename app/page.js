// app/page.js

// app/page.js
// app/page.js
// app/page.js
// app/page.js

// app/page.js
// app/page.js
// app/page.js
import Image from "next/image";
import { Linkedin, Instagram, ArrowDown, Play } from "lucide-react";

export default function BirthdayPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-poppins">
      {/* SECTION 1: HERO - BIRTHDAY CELEBRATION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/twins-hero.jpg"
            alt="The Adebiyi Twins"
            fill
            priority
            /* Added the class here - also added 'scale-110' as a base to prevent edges showing */
            className="object-cover opacity-90 animate-ken-burns scale-110"
          />
          {/* Adjusted professional overlay: Fades out sooner so bottom text is clear */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/10"></div>
        </div>

        {/* Content remains relative to stay above the moving image */}
        <div className="relative z-10 space-y-6 max-w-5xl animate-in fade-in zoom-in-95 duration-1000">
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-slate-900 leading-[0.9] drop-shadow-sm">
            World <br />
            <span className="text-blue-700">Adebiyi&apos;s</span> Day
          </h1>

          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="inline-block px-8 py-3 rounded-full border-2 border-blue-600 bg-white shadow-xl animate-pulse">
              <span className="text-sm md:text-lg uppercase tracking-widest text-blue-800 font-bold">
                Happy Birthday to the Amazing Twins
              </span>
            </div>

            <p className="text-xs md:text-sm font-bold text-slate-500 tracking-[0.5em] uppercase">
              Celebrating Excellence & Brotherhood
            </p>

            <div className="flex flex-col items-center gap-2 mt-4 text-blue-600">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRIBUTE - LIFE OF INFLUENCE */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
            <Image
              src="/mentor-1.jpg"
              alt="Kehinde Adebiyi"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Celebrating the <br />{" "}
                <span className="text-blue-600 decoration-blue-200">
                  Life of Influence.
                </span>
              </h2>
              <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-normal">
              <p>
                From the halls of <strong>Lagos State University (LASU)</strong>{" "}
                to the global academic stage at{" "}
                <strong>Indiana University</strong>, Kehinde Adebiyi has
                redefined leadership.
              </p>
              <p>
                As a prestigious <strong>Millennial Fellow</strong> and a fierce{" "}
                <strong>SSG advocate</strong>, his footprint is seen in the
                lives he has mentored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AMAZING TWINS (LIGHT BLUE BG - NO BLACK) */}
      <section className="bg-blue-50 py-24 md:py-32 px-6 relative overflow-hidden text-center border-y border-blue-100">
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Happy Birthday to the <br />{" "}
              <span className="text-blue-700">Amazing Twins</span>
            </h3>
            <p className="text-slate-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              Kehinde and Taiwo Adebiyi represent the perfect balance of vision
              and loyalty. Today we celebrate the strength that comes from your
              shared journey.
            </p>
          </div>

          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/brother-1.jpg"
              alt="The Twins"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: ORIKI & VIDEO */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Oriki <span className="text-blue-600">Ibeji</span>
              </h3>
              {/* Yoruba Oriki Box */}
              <div className="bg-blue-50 p-10 rounded-3xl border-l-[10px] border-blue-600 shadow-sm">
                <p className="text-slate-800 text-xl md:text-2xl leading-relaxed italic font-semibold">
                  &quot;Ejire ara isokun. <br />
                  Edunjobi, omoge d&apos;ade. <br />
                  A-se-wa-be-mo-bi-re. <br />O d&apos;ile alayo, o d&apos;ile
                  ire.&quot;
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 font-bold">
                Celebrate & Connect
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Updated LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/kehinde-adebiyi-ab4605152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border-2 border-slate-100 p-4 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0077b5] flex items-center justify-center text-white">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-900">
                      LinkedIn
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                      Professional Profile
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border-2 border-slate-100 p-4 rounded-2xl hover:border-pink-500 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-900">
                      Instagram
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                      Personal Moments
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* VIDEO PLACEHOLDER */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-8 border-white group">
            <Image
              src="/mentor-2.jpg"
              alt="Birthday Video Thumbnail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white z-10">
              <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
              </div>
              <p className="mt-6 font-bold uppercase tracking-[0.4em] text-xs">
                Video Tribute
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - BLUE BACKGROUND (NOT BLACK) */}
      <footer className="bg-blue-700 py-24 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-8">
          <h4 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
            Celebrate and Connect
          </h4>

          <div className="h-[1px] w-24 bg-white/30"></div>

          <div className="text-center">
            <p className="text-white text-[14px] tracking-[1em] uppercase font-bold mb-4">
              KEHINDEADEBIYI.ORG
            </p>
            <p className="text-blue-100 text-[10px] tracking-[0.5em] font-medium uppercase opacity-60">
              Happy Birthday &bull; 2026 Tribute
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}