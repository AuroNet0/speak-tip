import { News } from "../../../types/news";

async function getNoticiasById(id: string): Promise<News> {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/noticias/${id}`);

  if (!res) {
    throw new Error("Falha ao buscar a notícia");
  }

  return res.json();
}

export default async function NoticiaPage({
  params,
}: {
  params: { id: string };
}) {
  const noticia = await getNoticiasById(params.id);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <article>
        <h1 className="text-4xl font-bold mb-4">{noticia.title}</h1>
        <p className="text-xl text-gray-700 leading-relaxed">{noticia.text}</p>
      </article>

      <div className="grid gap-6">
        <button className="grid gap-2 border rounded-lg p-2 shadow-md button-hover">
          Gravar
        </button>
      </div>
    </div>
  );
}
