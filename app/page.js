// app/page.js

// app/page.js
// app/page.js
// app/page.js
"use client"; // Required for the video play toggle
import { useState } from "react";
import Image from "next/image";
import { Linkedin, Instagram, ArrowDown, Play } from "lucide-react";

export default function BirthdayPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFCFB] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-poppins">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/twins-hero.jpg"
            alt="The Adebiyi Twins"
            fill
            priority
            className="object-cover opacity-90 animate-ken-burns scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 space-y-6 max-w-5xl animate-in fade-in zoom-in-95 duration-1000">
          {/* Added leading-tight for better spacing between lines */}
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:leading-[1.1] drop-shadow-sm">
            World <br />
            <span className="text-blue-700">Adebiyis</span> Day
          </h1>

          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="inline-block px-8 py-3 rounded-full border-2 border-blue-600 bg-white shadow-xl animate-pulse">
              <span className="text-sm md:text-lg uppercase tracking-widest text-blue-800 font-bold">
                Happy Birthday to the Amazing Twins
              </span>
            </div>
            <p className="text-xs md:text-sm font-bold text-white tracking-widest uppercase max-w-2xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Happy birthday to the incredible twins, Taiwo and Kehinde Adebiyi!
              🎉 Wishing you a year filled with joy, success, and fulfilment!
            </p>
            <div className="flex flex-col items-center gap-2 mt-4 text-white drop-shadow-md">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIFE OF INFLUENCE - UPDATED COPY */}
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
                Celebrating a <br />{" "}
                <span className="text-blue-600">Life of Influence.</span>
              </h2>
              <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-normal">
              <p>
                From <strong>Lagos State University (LASU)</strong> to{" "}
                <strong>Indiana University</strong>, Kehinde Adebiyi has
                redefined leadership on the global academic stage.
              </p>
              <p>
                As a prestigious <strong>Millennial Fellow</strong> and fierce{" "}
                <strong>SSG advocate</strong>, his impact is etched in the lives
                he&apos;s mentored. Thank you for being an inspiration 🙏
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TWINS VISUAL */}
      <section className="bg-blue-50 py-24 md:py-32 px-6 relative overflow-hidden text-center border-y border-blue-100">
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <div className="space-y-6">
            {/* Added leading-relaxed for requested spacing */}
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.2]">
              Happy Birthday to the <br />{" "}
              <span className="text-blue-700">Amazing Twins</span>
            </h3>
            <p className="text-slate-500 text-lg md:text-xl max-w-lg mx-auto">
              Kehinde and Taiwo Adebiyi represent the perfect balance of vision
              and loyalty.
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Oriki <span className="text-blue-600">Ibeji</span>
            </h3>
            <div className="bg-blue-50 p-10 rounded-3xl border-l-[10px] border-blue-600 shadow-sm">
              <p className="text-slate-800 text-lg md:text-xl leading-relaxed italic font-semibold">
                &quot;Ejire ara isokun. <br />
                Edunjobi, omoge d&apos;ade. <br />
                A-se-wa-be-mo-bi-re. <br />
                O d&apos;ile alayo, o d&apos;ile ire. <br />
                <br />
                Beji l&apos;oro, Beji l&apos;ola. <br />
                O nile owo, o nile omo. <br />
                A-kan-bi, a-kan-ji, e-ji-wun-mi. <br />
                O taji loju orun, o f&apos;ese mejeji t&apos;aye. <br />
                <br />
                Ẹ jire ooo, Ẹdunjobi. <br />
                Okan n bini, eji n kẹ wa. <br />
                A b&apos;i-ejire-re-re ti i sọ ẹkun d&apos;ẹrin. <br />
                O sọ ile d&apos;ọja, o sọ talaka d&apos;oloro. <br />
                <br />
                Ibeji kii jẹ k&apos;oju ti obi rẹ. <br />
                Oun ni o n kọrin alayo fun wa. <br />
                Ẹ dunjobi, ọmọkunrin d&apos;ade, <br />Ẹ kú ọjọ́ ìbí, ẹ̀mí á ṣọ̀pọ̀
                láyé!&quot;
              </p>
            </div>
          </div>

          {/* DYNAMIC VIDEO COMPONENT */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-8 border-white group sticky top-10">
            {!isPlaying ? (
              <>
                <Image
                  src="/mentor-2.jpg"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white transition-opacity group-hover:bg-black/40">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform active:scale-95"
                  >
                    <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
                  </button>
                  <p className="mt-6 font-bold uppercase tracking-[0.4em] text-xs">
                    Watch Tribute
                  </p>
                </div>
              </>
            ) : (
              <video
                src="/birthday-video.mp4"
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="bg-blue-700 py-24 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-16">
          <div className="text-center space-y-10 w-full">
            <div className="space-y-4">
              <h4 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
                Celebrate and Connect
              </h4>
              <p className="text-blue-100/60 uppercase tracking-widest text-xs font-bold">
                Reach out on social media
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://www.linkedin.com/in/kehinde-adebiyi-ab4605152/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white transition-all w-72"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0077b5]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-white group-hover:text-slate-900 transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-blue-200 group-hover:text-slate-400 uppercase tracking-widest">
                    Professional Profile
                  </span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/prof_k_o_adebiyi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white transition-all w-72"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pink-600">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-white group-hover:text-slate-900 transition-colors">
                    Instagram
                  </span>
                  <span className="text-[10px] text-blue-200 group-hover:text-slate-400 uppercase tracking-widest">
                    Personal Moments
                  </span>
                </div>
              </a>
            </div>
          </div>

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