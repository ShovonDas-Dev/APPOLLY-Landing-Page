
// this is demo hero card component

import motion from "framer-motion";
export default function HeroCard() {
  return (
    <div className="relative w-[500px] h-[420px] flex items-center justify-center">
      
      {/* Frame 1 */}
      <div
        className="absolute w-[430px] h-[330px] border-[8px] border-white/15"
        animate={{
          y: [-10, 10, -10],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Frame 2 */}
      <div
        className="absolute w-[380px] h-[280px] border-[8px] border-white/15"
        animate={{
          y: [10, -10, 10],
          rotate: [1, -1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Box */}
      <div className="relative z-10 bg-white p-10 max-w-[320px] shadow-xl">
        <h2 className="text-4xl font-bold text-primary leading-tight">
          A GREAT APP MAKES YOUR LIFE BETTER
        </h2>

        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>

        <h3 className="mt-8 text-xl font-semibold">
          DOWNLOAD APP NOW
        </h3>

        <div className="flex gap-3 mt-4">
          <img
            src="/google-play.png"
            alt="Google Play"
            className="h-10"
          />

          <img
            src="/app-store.png"
            alt="App Store"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}