// app/components/CircularBackgroundVideo.tsx
"use client";

const CircularBackgroundVideo = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "2rem",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        overflow: "hidden",
        opacity: 0.2,
        zIndex: -1,
        pointerEvents: "none",
      }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}>
        <source src="/boting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CircularBackgroundVideo;
