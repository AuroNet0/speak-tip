"use client";

import { DocumentTextIcon } from "@heroicons/react/24/solid";

async function checkTranscription(id: number): Promise<any> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_CHECAGEM;
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      method: "GET",
    });
    debugger;
    if (!res.ok) throw new Error("Erro na comparação");
  } catch (error) {
    console.error(error);
  }
}

function BotaoChecagem({ id }: { id: number }) {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <button
        onClick={() => {
          checkTranscription(id);
        }}
        className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
      >
        <DocumentTextIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default BotaoChecagem;
