"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <>
      {/* Background Video */}
      <div className="fixed -z-10 inset-0 w-full h-full overflow-hidden">
        {!videoError ? (
          <video 
            ref={videoRef}
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted
            playsInline
            preload="metadata"
            onError={() => {
              console.error('Video failed to load');
              setVideoError(true);
            }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/video/brennanswave.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          {/* Fallback background when video fails */}
        )}
      </div>

      {/* Main Content */}
      <div className="font-sans flex flex-col items-center justify-center min-h-screen relative z-10">
        <main className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center p-8 backdrop-blur-[5px] bg-white/10 rounded-lg">
            <Image
              className="mb-4"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            
            <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl rotate-2 xl:text-4xl text-black/80 text-center mb-2">
              Brennanswave.com
            </h1>
            
            <h3 className="text-xl font-extrabold underline decoration-wavy rotate-1 decoration-pink-500 md:text-2xl lg:text-3xl xl:text-4xl text-black/80 text-center">
              is under construction
            </h3>
          </div>
        </main>
      </div>
    </>
  );
}
