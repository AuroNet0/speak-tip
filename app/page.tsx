import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden bg-black text-white font-sans text-center px-4">
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
          Speak tip
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Falar um novo idioma nunca foi tão simples. O Speak te ajuda a
          praticar, aprimorar e se comunicar com confiança.
        </p>
        <div className="mt-10">
          <Link href="/noticias">
            <button className="group inline-flex items-center justify-center px-7 py-3 bg-white text-black rounded-full font-semibold text-base transition-transform hover:scale-105 active:scale-95">
              <span>Começar</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
