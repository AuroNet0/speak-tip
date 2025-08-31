import {
  ArchiveBoxIcon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              href="/"
              className="group inline-flex items-center justify-center px-5 py-2 bg-white text-black rounded-full font-semibold text-base transition-transform hover:scale-105 active:scale-95"
            >
              <HomeIcon className="w-5 h-5 text-black" />
            </Link>
          </li>
          <li>
            <Link
              href="/noticias"
              className="group inline-flex items-center justify-center px-5 py-2 bg-white text-black rounded-full font-semibold text-base transition-transform hover:scale-105 active:scale-95"
            >
              <NewspaperIcon className="w-5 h-5 text-black" />
            </Link>
          </li>
          <li>
            <Link
              href="/historico"
              className="group inline-flex items-center justify-center px-5 py-2 bg-white text-black rounded-full font-semibold text-base transition-transform hover:scale-105 active:scale-95"
            >
              <ArchiveBoxIcon className="w-5 h-5 text-black" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </header>
  );
}
