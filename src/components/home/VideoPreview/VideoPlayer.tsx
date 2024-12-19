import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400/30 to-slate-500/30 p-1">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-slate-500/10 backdrop-blur-[2px]" />
      <div className="relative h-full w-full rounded-xl overflow-hidden bg-gray-900">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=0`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Przykładowa lekcja"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;