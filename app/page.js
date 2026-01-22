// app/page.js

// app/page.js
// app/page.js
// app/page.js
"use client";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import Image from "next/image";
import { Linkedin, Instagram, ArrowDown, Play, Loader2 } from "lucide-react";

/**
 * Professional Birthday Social Card
 * Clean image-based cards with sophisticated hover states
 */
const SocialLink = memo(({ href, icon, label, subLabel, iconColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-sm hover:bg-white hover:-translate-y-1 transition-all duration-500 w-full md:w-80"
  >
    <div
      className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${iconColor}`}
    >
      {icon}
    </div>
    <div className="flex flex-col text-left">
      <span className="text-sm font-bold text-white group-hover:text-slate-900 tracking-tight transition-colors">
        {label}
      </span>
      <span className="text-[10px] text-white/60 group-hover:text-blue-600 uppercase tracking-[0.2em] font-bold transition-colors">
        {subLabel}
      </span>
    </div>
  </a>
));
SocialLink.displayName = "SocialLink";

export default function BirthdayPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    const target = document.querySelector("#oriki-trigger");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.log("Playback error:", err));
    }
  }, [isPlaying]);

  const handlePlay = useCallback(() => {
    setShouldLoadVideo(true);
    setIsPlaying(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFCFB] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-poppins text-slate-900">
      {/* SECTION 1: HERO (BIRTHDAY THEMED) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/twins-hero.jpg"
            alt="The Adebiyi Twins"
            fill
            priority
            quality={90}
            className="object-cover opacity-80 animate-ken-burns scale-110"
          />
          {/* Removed 'to-white/60' and replaced with 'to-transparent' to clear the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 space-y-6 max-w-5xl animate-in fade-in duration-1000">
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-slate-900 leading-[0.95] mb-2">
            World <br />
            <span className="text-blue-700">Adebiyis</span> Day
          </h1>

          <div className="flex flex-col items-center gap-6">
            <div className="px-8 py-3 rounded-full border-2 border-blue-600 bg-white shadow-xl animate-pulse">
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-blue-800 font-black">
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

      {/* SECTION 2: LIFE OF INFLUENCE */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl group border-[12px] border-white">
            <Image
              src="/mentor-1.jpg"
              alt="Kehinde Adebiyi"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                Celebrating a <br />
                <span className="text-blue-600">Life of Influence.</span>
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              <p>
                From{" "}
                <strong className="text-slate-900">
                  Lagos State University (LASU)
                </strong>{" "}
                to{" "}
                <strong className="text-slate-900">Indiana University</strong>,
                Kehinde Adebiyi has redefined leadership on the global academic
                stage.
              </p>
              <p className="text-sm tracking-wide leading-relaxed border-l-4 border-blue-600 pl-8 italic text-slate-500 py-2">
                As a prestigious Millennial Fellow and fierce SSG advocate, his
                impact is etched in the lives he has mentored. Thank you for
                being an inspiration 🙏
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TWINS VISUAL */}
      <section className="bg-blue-50/50 py-24 md:py-40 px-6 border-y border-blue-100">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.2]">
            Happy Birthday to the <br />
            <span className="text-blue-700">Amazing Twins</span>
          </h3>

          <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <Image
              src="/brother-1.jpg"
              alt="The Twins"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: ORIKI & VIDEO (SYNCED HEIGHTS) */}
      <section id="oriki-trigger" className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Oriki Box */}
          <div className="flex flex-col justify-center space-y-8 p-10 md:p-14 bg-blue-50/30 rounded-[2.5rem] border border-blue-100 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Oriki <span className="text-blue-600">Ibeji</span>
            </h3>

            <div className="text-slate-800 text-lg md:text-xl italic leading-relaxed font-medium space-y-6">
              <p>
                &quot;Ejire ara isokun. Edunjobi, omoge d&apos;ade.
                A-se-wa-be-mo-bi-re. O d&apos;ile alayo, o d&apos;ile ire.&quot;
              </p>
              <p>
                Beji l&apos;oro, Beji l&apos;ola. O nile owo, o nile omo.
                A-kan-bi, a-kan-ji, e-ji-wun-mi. O taji loju orun, o f&apos;ese
                mejeji t&apos;aye.
              </p>
              <p>
                Ẹ jire ooo, Ẹdunjobi. Okan n bini, eji n kẹ wa. A
                b&apos;i-ejire-re-re ti i sọ ẹkun d&apos;ẹrin. O sọ talaka
                d&apos;oloro. Ẹ kú ọjọ́ ìbí!&quot;
              </p>
            </div>
          </div>

          {/* Right: Video (Professional Player) */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 border-[10px] border-white group min-h-[500px]">
            {!isVideoReady && (
              <Image
                src="/video-poster.jpg"
                alt="Poster"
                fill
                className={`object-cover z-10 transition-opacity duration-700 ${isPlaying && isVideoReady ? "opacity-0" : "opacity-70"}`}
              />
            )}

            {!isPlaying && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-500">
                <button
                  onClick={handlePlay}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform"
                >
                  <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
                </button>
                <p className="mt-6 font-bold uppercase tracking-[0.4em] text-white text-[10px]">
                  Watch Tribute
                </p>
              </div>
            )}

            {shouldLoadVideo && (
              <video
                ref={videoRef}
                src="/birthday-video.mp4"
                onPlaying={() => setIsVideoReady(true)}
                className={`w-full h-full object-cover ${isVideoReady ? "opacity-100" : "opacity-0"}`}
                controls={isPlaying}
                playsInline
              />
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER (DEEP BLUE BRANDING) */}
      <footer className="bg-blue-700 py-24 px-6 relative overflow-hidden text-white">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-16">
          <div className="text-center space-y-10 w-full">
            <h4 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Celebrate and Connect
            </h4>

            <div className="flex flex-wrap justify-center gap-6">
              <SocialLink
                href="https://www.linkedin.com/in/kehinde-adebiyi-ab4605152/"
                icon={<Linkedin className="w-5 h-5 text-[#0077b5]" />}
                label="LinkedIn"
                subLabel="Professional Profile"
              />
              <SocialLink
                href="https://www.instagram.com/prof_k_o_adebiyi/?hl=en"
                icon={<Instagram className="w-5 h-5 text-pink-600" />}
                label="Instagram"
                subLabel="Personal Moments"
              />
            </div>
          </div>

          <div className="text-center pt-12 border-t border-white/10 w-full">
            <p className="text-[14px] tracking-[1.1em] font-black uppercase mb-4">
              KEHINDEADEBIYI.ORG
            </p>
            <p className="text-blue-100/40 text-[9px] tracking-[0.5em] font-medium uppercase">
              A Legacy of Joy &bull; 2026 Tribute
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}