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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {noticias.map((news) => (
          <Link href={`/noticias/${news.id}`} key={news.id}>
            <div key={news.id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold">{news.title}</h2>
              <p className="text-lg text-gray-600 mt-2"> {news.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
