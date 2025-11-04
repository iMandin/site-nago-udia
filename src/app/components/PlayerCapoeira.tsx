"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function PlayerCapoeira() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/audios/nago_udia.mp3" loop />
      <button
        onClick={togglePlay}
        className="bg-greenCapoeira text-black p-4 rounded-full shadow-lg border border-gold hover:bg-gold transition transform hover:scale-105"
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
