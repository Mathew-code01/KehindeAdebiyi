// app/page.js

// app/page.js
// app/page.js
// app/page.js
"use client";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import Image from "next/image";
import { Linkedin, Instagram, ArrowDown, Play, Gift } from "lucide-react";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);

  const [resourcesReady, setResourcesReady] = useState(0);
  const totalResources = 2; // 1 for Window Load + 3 for main images

  // Function to track loading progress
  const resourceLoaded = useCallback(() => {
    setResourcesReady((prev) => prev + 1);
  }, []);

  // Monitor with a 3.5s safety timeout
  useEffect(() => {
    // If the images take too long, force show the page anyway
    const forceLoad = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    if (resourcesReady >= totalResources) {
      clearTimeout(forceLoad);
      requestAnimationFrame(() => setIsLoaded(true));
    }

    return () => clearTimeout(forceLoad);
  }, [resourcesReady, totalResources]);

  // Handle CSS/Style loading
  // Handle CSS/Style loading - FIXED for ESLint
  useEffect(() => {
    const handleLoad = () => {
      // Use a microtask to avoid synchronous setState inside Effect
      queueMicrotask(() => resourceLoaded());
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [resourceLoaded]);

  // Intersection Observer for video
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
    <>
      {/* REAL PAGE LOADER */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFCFB]">
          <div className="relative flex flex-col items-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-100 rounded-full scale-150 animate-ping opacity-30" />
              <div className="relative bg-white p-6 rounded-full shadow-2xl border border-blue-100">
                <Gift className="w-10 h-10 text-blue-700 animate-bounce" />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <p className="text-[11px] tracking-[0.6em] uppercase font-black text-slate-900 animate-pulse">
                Unwrapping the Celebration
              </p>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" />
              </div>
            </div>
            <p className="absolute bottom-12 text-[10px] tracking-[0.5em] uppercase font-bold text-blue-800/40">
              Celebrating Taiwo & Kehinde
            </p>
          </div>
        </div>
      )}

      <main
        className={`min-h-screen bg-[#FDFCFB] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-poppins text-slate-900 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 invisible h-0"
        }`}
      >
        {/* SECTION 1: HERO */}
        <section className="relative h-screen flex flex-col items-center justify-end pb-12 md:pb-16 text-center px-6 overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="/twins-hero.webp"
              alt="The Adebiyi Twins"
              fill
              priority
              quality={85}
              onLoad={resourceLoaded}
              className="object-cover opacity-60 animate-ken-burns scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* 1. TOP: Headline - tracking changed from 'tighter' to 'normal' for better spacing */}
            <h1 className="text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-normal leading-tight mb-3 text-white flex flex-wrap justify-center items-center gap-x-4">
              World <span className="text-blue-600 animate-glow">Adebiyis</span>{" "}
              Day
            </h1>

            {/* 2. MIDDLE: The Badge */}
            <div className="mb-5">
              <div className="px-6 md:px-8 py-2 rounded-full border border-blue-500/20 bg-blue-600/10 backdrop-blur-xl">
                <span className="text-[9px] sm:text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] text-blue-100 font-bold uppercase whitespace-nowrap">
                  Happy Birthday to the Amazing Twins
                </span>
              </div>
            </div>

            {/* 3. BOTTOM: Restructured into 3 lines precisely */}
            <p className="text-[12px] sm:text-[13px] md:text-[15px] font-medium text-white/80 tracking-wide max-w-[280px] sm:max-w-[350px] md:max-w-[500px] leading-relaxed mb-8">
              Every January 23rd is a day to celebrate the incredible{" "}
              <br className="hidden sm:block" />
              twins, Taiwo and Kehinde Adebiyi! 🎉 Wishing them{" "}
              <br className="hidden sm:block" />a year filled with joy, success,
              and fulfilment!
            </p>

            {/* 4. POINT: Scroll Indicator */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[1px] h-6 md:h-8 bg-gradient-to-b from-blue-600 to-transparent" />
              <ArrowDown className="w-3.5 h-3.5 text-white/20 animate-bounce" />
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
                // onLoad={resourceLoaded} // Add this line
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
                  <strong className="text-slate-900">Indiana University</strong>
                  , Kehinde Adebiyi has redefined leadership on the global
                  academic stage.
                </p>
                <p className="text-sm tracking-wide leading-relaxed border-l-4 border-blue-600 pl-8 italic text-slate-500 py-2">
                  As a prestigious Millennial Fellow and fierce SSG advocate,
                  his impact is etched in the lives he has mentored. Thank you
                  for being an inspiration 🙏
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE TWINS VISUAL */}
        <section className="bg-blue-50/50 py-24 md:py-40 px-6 border-y border-blue-100">
          <div className="max-w-5xl mx-auto text-center space-y-16">
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
              Happy Birthday to the <br />
              <span className="text-blue-700">Amazing Twins</span>
            </h3>

            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              {/* Note: object-bottom shifts the wide image UP to show the subjects better */}
              <Image
                src="/brother-1.webp"
                alt="The Twins"
                fill
                // onLoad={resourceLoaded}
                className="object-cover object-bottom transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.8rem]" />
            </div>
          </div>
        </section>

        {/* SECTION 4: ORIKI & VIDEO */}
        <section id="oriki-trigger" className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            {/* TEXT BOX: w-full ensures it takes full width on mobile */}
            <div className="w-full flex flex-col justify-center space-y-8 p-10 md:p-14 bg-blue-50/30 rounded-[2.5rem] border border-blue-100 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Oriki <span className="text-blue-600">Ibeji</span>
                </h3>
                <p className="text-[10px] tracking-[0.4em] uppercase text-blue-900/50 font-bold">
                  The Sacred Chant
                </p>
              </div>

              <div className="text-slate-800 text-sm md:text-base italic leading-relaxed font-medium space-y-6">
                <p>
                  Ẹ̀jìrẹ́ ará ìṣokún. Ẹdúnjobí. <br />
                  Ọmọ ẹdun tíí ṣeré orí igi. <br />
                  Okan mba bi, Eji wole to mi wa. <br />
                  Edunjobi a po jojo wolu.
                </p>
                <p>
                  O f&apos;iya gbaaru, O gbe Baba lori esin. <br />
                  Winriwinrin l&apos;oju orogun, Ejiworo l&apos;oju iya re.{" "}
                  <br />
                  Omo ko ile alaso, o ya sile alakisa. <br />O so alakisa di
                  onigba aso.
                </p>
                <p>
                  Beji lo n se onibara lore, <br />
                  Beji lo n se onigese di olowo. <br />
                  O ji ni kutukutu, o tẹ ekun n’ifa. <br />
                  A-ji-fẹ-fẹ-fẹ-l’oju-iya-rẹ.
                </p>
                <p>
                  Ẹ̀jìrẹ́ òkin, ọmọ ẹdun tíí ṣeré orí igi <br />
                  A-bí-fẹ́jẹ́-fẹ́jẹ́ lójú mọ́mọ́ rẹ̀. <br />
                  O bá dandan l&apos;énu, o sọ dandan d&apos;òkodò. <br />
                  Ejiwunmi okomi, abiyamo obekisibekese.
                </p>
                <p>
                  O f&apos;ese mejeji be sile alakisa, o so onigba aso. <br />
                  Ẹ̀jìrẹ́ ará ìṣokún, wá bami rẹ́, kí o fún mi ní owó, <br />
                  Kí o fún mi ní ọmọ, kí o fún mi ní àlàáfíà.
                </p>
              </div>
            </div>

            {/* VIDEO CONTAINER: Updated to w-full and responsive aspect ratio */}
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-[10px] border-white group h-full min-h-[500px] md:min-h-[600px] aspect-[4/5] md:aspect-auto">
              {(!isPlaying || !isVideoReady) && (
                <Image
                  src="/video-poster.webp"
                  alt="Video Thumbnail"
                  fill
                  priority
                  className="object-cover z-10 transition-opacity duration-700 opacity-80"
                />
              )}

              {!isPlaying && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-500">
                  <button
                    onClick={handlePlay}
                    className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform cursor-pointer"
                  >
                    <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
                  </button>
                  <p className="mt-6 font-bold uppercase tracking-[0.4em] text-white text-[9px] md:text-[10px]">
                    Watch Tribute
                  </p>
                </div>
              )}

              {shouldLoadVideo && (
                <video
                  ref={videoRef}
                  src="/birthday-video.mp4"
                  onPlaying={() => setIsVideoReady(true)}
                  /* object-cover + object-top fills container and keeps faces in view */
                  className={`w-full h-full object-cover object-top absolute inset-0 bg-black ${
                    isVideoReady ? "opacity-100" : "opacity-0"
                  }`}
                  controls={isPlaying}
                  playsInline
                />
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: FOOTER */}
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
    </>
  );
}