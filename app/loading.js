// app/loading.js

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFCFB]">
      <div className="relative flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-slate-400 animate-pulse">
          Initializing Excellence
        </p>
      </div>
    </div>
  );
}