import { ChartBarIcon } from "@heroicons/react/24/solid";

const mockHistoricos = [
  { id: 0, title: "Hist 0", data: "01-09-2025" },
  { id: 1, title: "Hist 1", data: "01-09-2025" },
  { id: 2, title: "Hist 2", data: "01-09-2025" },
];

export default function Historico() {
  return (
    <div className="grid gap-4 p-4">
      {mockHistoricos.map((hist) => (
        <div
          key={hist.id}
          className="
            rounded-lg p-6
            bg-white/5
            border border-white/10  
            backdrop-blur-lg 
            transition-all duration-300 ease-in-out 
            hover:bg-white/10 hover:-translate-y-1 cursor-pointer
            flex justify-between items-center
          "
        >
          <div>
            <h2 className="text-xl font-semibold text-white">{hist.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{hist.data}</p>
          </div>

          <div>
            <ChartBarIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}
