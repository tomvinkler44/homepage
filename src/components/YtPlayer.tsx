"use client";
import React, { useRef, useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export const PlayerState = {
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};

interface YtPlayerProps {
  videoId: string;
  opts?: YouTubeProps["opts"];
}

const YtPlayer: React.FC<YtPlayerProps> = ({ videoId, opts }) => {
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState<boolean>(false);
  const [playerHeight, setPlayerHeight] = useState<string>("700");

  const onReady = (event: { target: YT.Player }) => {
    playerRef.current = event.target;
    setReady(true);
    // Optional: play the video when the player is ready
    // playerRef.current.playVideo();
  };

  useEffect(() => {
    const updateHeight = () => {
      setPlayerHeight(window.innerWidth <= 768 ? "300" : "500");
    };

    updateHeight(); // Set height on mount
    window.addEventListener("resize", updateHeight); // Listen for resize

    return () => window.removeEventListener("resize", updateHeight); // Cleanup
  }, []);

  useEffect(() => {
    if (!containerRef.current || !playerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (playerRef.current) {
          if (entry.isIntersecting && ready) {
            playerRef.current.playVideo();
          } else if (ready) {
            playerRef.current.pauseVideo();
          }
        }
      },
      { threshold: 0.5 } // Video plays when 50% is visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect(); // Cleanup observer
  }, [ready]);

  return (
    <div ref={containerRef} className="ytplayer flex justify-center rounded">
      <YouTube
        videoId={videoId}
        opts={{
          height: playerHeight,
          width: 'auto',
          ...(opts ?? { playerVars: { loop: 1 } }),
        }}
        onReady={onReady}
      />
    </div>
  );
};

export default YtPlayer;
