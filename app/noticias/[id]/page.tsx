import { News } from "../../../types/news";
import BotaoChecagem from "./BotaoChecagem";
import BotoesDeAcao from "./BotoesDeAcao";

async function getNoticiasById(id: number): Promise<News> {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/noticias/${id}`);

  if (!res.ok) {
    throw new Error("Falha ao buscar a notícia");
  }

  return res.json();
}

export default async function NoticiaPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;
  const noticia = await getNoticiasById(id);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <article>
        <h1 className="text-4xl font-bold mb-4">{noticia.title}</h1>
        <p className="text-xl text-gray-700 leading-relaxed">{noticia.text}</p>
      </article>
      <div className="flex justify-center items-center gap-4">
        <BotoesDeAcao />
        <BotaoChecagem id={id} />
      </div>
    </div>
  );
}
