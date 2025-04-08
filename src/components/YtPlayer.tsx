"use client";
import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

interface YtPlayerProps {
  videoId: string;
  opts?: {
    height?: string;
    width?: string;
    loop?: boolean;
    muted?: boolean;
    [key: string]: unknown;
  };
}

const YtPlayer: React.FC<YtPlayerProps> = ({ videoId, opts }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div ref={containerRef} className="ytplayer flex justify-center rounded">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={isPlaying} // Autoplay when visible
        muted={opts?.muted ?? true} // Muted by default
        controls
        loop={opts?.loop ?? true}
        width={opts?.width ?? "100%"}
        height={opts?.height ?? "500px"}
      />
    </div>
  );
};

export default YtPlayer;
