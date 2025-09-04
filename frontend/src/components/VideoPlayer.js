import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from 'lucide-react';

const VideoPlayer = ({ src, poster, title, description, className = '' }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
        setCurrentTime(video.currentTime);
      }
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setProgress(0);
    setCurrentTime(0);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={`relative group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        preload="metadata"
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        <p className="text-slate-300 text-center p-8">
          Ihr Browser unterstützt das Video-Format nicht.
        </p>
      </video>

      {/* Custom Controls Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Play/Pause Button in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            )}
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Progress Bar */}
          <div
            className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 hover:h-2 transition-all duration-200"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlay}
                className="text-white hover:text-orange-400 transition-colors duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="text-white hover:text-orange-400 transition-colors duration-200"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <span className="text-white text-sm font-medium">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={restart}
                className="text-white hover:text-orange-400 transition-colors duration-200"
                title="Von vorne beginnen"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-orange-400 transition-colors duration-200"
                title="Vollbild"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      {title && (
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
            <h3 className="text-white font-semibold text-sm">{title}</h3>
            {description && (
              <p className="text-slate-300 text-xs mt-1">{description}</p>
            )}
          </div>
        </div>
      )}

      {/* Corner decorations */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 left-4 w-1 h-1 bg-orange-300 rounded-full animate-ping"></div>
    </div>
  );
};

export default VideoPlayer;
