"use client";

import { MicrophoneIcon } from "@heroicons/react/24/solid";
import StopIcon from "@heroicons/react/24/solid/StopIcon";
import { useState } from "react";

async function startRecordAudio() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_GRAVACAO;
  try {
    const res = await fetch(`${apiUrl}/start`, {
      method: "POST",
    });
    if (!res.ok) throw new Error("Erro ao iniciar a gravação");
    console.log("Gravação iniciada!");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function stopRecordAudio() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_GRAVACAO;
  try {
    const res = await fetch(`${apiUrl}/stop`, {
      method: "POST",
    });
    if (!res.ok) throw new Error("Erro ao parar a gravação");
    console.log("Gravação parada!");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function BotaoDinamicoDeGravacao() {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleRecording = async () => {
    setIsLoading(true);

    try {
      if (isRecording) {
        await stopRecordAudio();
        setIsRecording(false);
      } else {
        await startRecordAudio();
        setIsRecording(true);
      }
    } catch (error) {
      console.error("Ação falhou:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center gap-6 mt-8">
      <button
        onClick={handleToggleRecording}
        disabled={isLoading}
        className={`
          font-bold py-2 px-4 rounded-lg shadow-md transition-colors
          ${
            isRecording
              ? "bg-red-500 hover:bg-red-700"
              : "bg-green-500 hover:bg-green-700"
          }
          ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        {isLoading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 animate-spin text-white "
          >
            <path
              fillRule="evenodd"
              d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
              clipRule="evenodd"
            />
          </svg>
        ) : isRecording ? (
          <StopIcon className="w-5 h-5 text-white" />
        ) : (
          <MicrophoneIcon className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
}
