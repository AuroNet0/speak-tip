import Link from "next/link";
import type { News } from "../../types/news";

async function getNoticias(): Promise<News[]> {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/noticias`);

  if (!res) {
    throw new Error("Falha ao buscar as notícias da API");
  }

  return res.json();
}

export default async function Noticias() {
  const noticias = await getNoticias();

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {noticias.map((news) => (
          <Link href={`/noticias/${news.id}`} key={news.id}>
            <div
              className="
          rounded-lg p-6 h-full
          bg-white/2
          border border-white/
          backdrop-blur-lg 
          transition-all duration-300 ease-in-out 
          hover:bg-white/10 hover:-translate-y-2 cursor-pointer
          flex flex-col
        "
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {news.title}
              </h2>
              <p className="text-gray-300 mt-2 line-clamp-4">{news.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
