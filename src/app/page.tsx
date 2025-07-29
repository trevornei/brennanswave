import Image from "next/image";

export default function Home() {
  return (
    <>

      {/* Main Content */}
      <div className="font-sans flex flex-col items-center justify-center min-h-screen">
        <main className="flex flex-col justify-center items-center">

      {/* Background Video */}
      <div className="fixed -z-10 inset-0 w-full h-full overflow-hidden">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
        >
          <source src="/video/brennanswave.mp4" type="video/mp4" />
        </video>
      </div>

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
