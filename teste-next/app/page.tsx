"use client"; // Define que este componente tem interatividade

import { useState } from "react";

export default function Home() {
  // --- ESTADOS (O substituto do ngModel e variáveis da classe) ---
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState<any>(null); // Começa como null (equivalente ao *ngIf="dados")

  // --- FUNÇÃO DE BUSCA (O seu executarBusca) ---
  const executarBusca = () => {
    console.log("Buscando clima para:", cidade);
    
    // Simulando uma resposta da API para você ver o layout funcionando
    setDados({
      current: { temperature_2m: 28 },
    });
  };

  return (
    /* Centralizador */
    <div className="bg-[#413d3d] h-screen w-screen flex flex-col items-center justify-center p-4">

      {/* Barra de pesquisa */}
      <div className="w-full max-w-[680px]">
        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-5 h-5 left-3 inset-y-0 my-auto text-white/70 z-10"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)} // Atualiza o estado ao digitar
            onKeyDown={(e) => e.key === "Enter" && executarBusca()} // Detecta o Enter
            className="w-full bg-blue-500/20 backdrop-blur-md border border-white/30 rounded-[2rem] pl-11 pr-4 py-2.5 text-white text-sm placeholder:text-white/60 transition duration-300 focus:outline-none focus:border-white/50 focus:bg-blue-500/30 shadow-xl"
            placeholder="Buscar cidade..."
          />
        </div>
      </div>

      {/* Dados da API - Aqui entra a lógica do *ngIf */}
      {dados && (
        <div className="bg-blue-500/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl w-full max-w-170 mt-5 flex flex-wrap md:flex-nowrap">
          
          {/* Informações principais */}
          <div className="flex flex-1">
            <div className="mt-3">
              <div>
                <span className="text-white text-6xl font-bold">
                  {dados.current.temperature_2m}°C
                </span>
              </div>
              <div>
                <span className="text-white text-[19px]">{cidade || "Cidade"}</span>
              </div>
              <div>
                <span className="text-[16px] font-medium text-[#919AA9]">Sexta, 14:30</span>
              </div>
            </div>

            {/* Icone */}
            <div className="flex flex-col items-center justify-center relative ml-4">
              <img src="/icone-sol.png" alt="Clima" className="w-32 h-auto" />
              <span className="text-[16px] font-normal text-[#cbced3] mt-2">
                Parcialmente Nublado
              </span>
            </div>
          </div>

          {/* Informações secundárias */}
          <div className="text-[16px] font-normal text-[#cbced3] border-l-[#919aa988] border-l-2 pl-5 ml-5 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined">device_thermostat</span>
              <p className="ml-2">Sensação 31°C</p>
            </div>

            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined">mobiledata_arrows</span>
              <p className="ml-2">Max 31° / Min 19°</p>
            </div>

            <div className="flex items-center">
              <span className="material-symbols-outlined">rainy</span>
              <p className="ml-2">Chuva 80%</p>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}