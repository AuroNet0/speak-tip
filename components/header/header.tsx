import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral-900 text-white py-4 shadow-md shadow-neutral-900/30">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              href="/"
              className="rounded-md px-3 py-2 font-medium hover:bg-neutral-800 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/noticias"
              className="rounded-md px-3 py-2 font-medium hover:bg-neutral-800 transition-colors duration-300"
            >
              Notícias
            </Link>
          </li>
          <li>
            <Link
              href="/historico"
              className="rounded-md px-3 py-2 font-medium hover:bg-neutral-800 transition-colors duration-300"
            >
              Histórico
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
