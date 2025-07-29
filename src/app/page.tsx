"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="font-sans flex flex-col items-center justify-center min-h-screen relative z-10">
        <main className="flex flex-col justify-center items-center">

      <div className="fixed -z-10 inset-0 w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/gif/brennansGifLow.gif"
            alt=""
            width={800}
            height={800}
            priority
          />
      </div>

        <div className="flex flex-col justify-center items-start -rotate-10 border-2 border-teal-500 p-8 backdrop-blur-[5px] bg-white/10 rounded-lg">
            <Image
              className="mb-4"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            
            <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl text-black/80 text-center mb-2">
              Brennanswave.com
            </h1>
            
            <h3 className="text-xl font-extrabold underline decoration-wavy  decoration-pink-500 md:text-2xl lg:text-3xl xl:text-4xl text-black/80 text-center">
              is under construction
            </h3>
          </div>
        </main>
      </div>
    </>
  );
}
