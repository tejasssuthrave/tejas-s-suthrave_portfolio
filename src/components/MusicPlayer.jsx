import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const playlist = [
  { name: "iwasneverthere.mp3", file: "iwasneverthere.mp3" },
  { name: "escapism.mp3", file: "escapism.mp3" },
  { name: "blue.mp3", file: "blue.mp3" },
  { name: "YAD.mp3", file: "YAD.mp3" },
  { name: "stars.mp3", file: "stars.mp3" },
];

const getTrackUrl = (index) => {
  const safeIndex = index >= 0 && index < playlist.length ? index : 0;
  return `${import.meta.env.BASE_URL}audio/${playlist[safeIndex].file}`;
};

const MusicPlayer = () => {
  const STORAGE_KEY_INDEX = "portfolio_music_index";
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const saved = window.localStorage.getItem(STORAGE_KEY_INDEX);
    const index = saved !== null ? Number.parseInt(saved, 10) : 0;
    return Number.isFinite(index) && index >= 0 && index < playlist.length ? index : 0;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const audioRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const createAudio = () => {
    if (typeof window === "undefined" || audioRef.current) return audioRef.current;

    const audio = new Audio(getTrackUrl(currentTrackIndex));
    audio.preload = "auto";
    audio.loop = false;
    audio.onended = async () => {
      await skipTrack();
    };
    audio.onerror = (event) => {
      console.error("Audio error:", event);
    };
    audioRef.current = audio;
    return audio;
  };

  useEffect(() => {
    createAudio();
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const audio = createAudio();

    const handleScroll = async () => {
      if (!audio || !scrollEnabled) return;
      if (!isPlaying) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (err) {
          console.error("Scroll-triggered playback failed:", err);
        }
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (audio && !audio.paused) {
          audio.pause();
          setIsPlaying(false);
        }
      }, 1400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollEnabled, isPlaying]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY_INDEX, currentTrackIndex.toString());
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = createAudio();
    const nextUrl = getTrackUrl(currentTrackIndex);
    if (audio && audio.src !== nextUrl) {
      audio.src = nextUrl;
      audio.load();
    }
  }, [currentTrackIndex]);

  const playAudio = async () => {
    const audio = createAudio();
    if (!audio) return;

    if (!audio.src || audio.src.includes("undefined")) {
      audio.src = getTrackUrl(currentTrackIndex);
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setScrollEnabled(true);
    } catch (err) {
      console.error("Audio playback failed:", err);
      setIsPlaying(false);
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const togglePlay = async () => {
    if (isPlaying) {
      pauseAudio();
      return;
    }
    await playAudio();
  };

  const skipTrack = async () => {
    const audio = createAudio();
    if (!audio) return;

    let nextIndex = currentTrackIndex;
    if (playlist.length > 1) {
      while (nextIndex === currentTrackIndex) {
        nextIndex = Math.floor(Math.random() * playlist.length);
      }
    }

    setCurrentTrackIndex(nextIndex);
    const nextUrl = getTrackUrl(nextIndex);
    audio.pause();
    audio.src = nextUrl;
    audio.load();

    try {
      await audio.play();
      setIsPlaying(true);
      setScrollEnabled(true);
    } catch (err) {
      console.error("Skip playback failed:", err);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-2">
      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
        {isPlaying ? "Now Playing" : "Music"}
      </span>
      <button
        onClick={togglePlay}
        className="w-14 h-14 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center text-white hover:border-[var(--accent)] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.35)]"
        style={{ boxShadow: isPlaying ? "0 0 24px rgba(79,70,229,0.6)" : undefined }}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <p className="max-w-[140px] text-[10px] text-center text-white/50 font-mono leading-snug">
        Tap once, then scroll to keep the music playing.
      </p>
    </div>
  );
};

export default MusicPlayer;

