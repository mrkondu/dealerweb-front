import BackgroundPaths from "@/components/background-paths";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="bg-[#0f172a] min-h-screen font-sans overflow-x-hidden">
      
      {/* SECCIÓN 1: Mantenimiento (Ocupa toda la primera vista) */}
      <section className="relative min-h-svh flex flex-col items-center justify-center p-4 sm:p-6 text-white overflow-hidden border-b border-violet-500/20">
        
        {/* Glow de fondo para esta sección */}
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-violet-600/10 rounded-full blur-[80px] sm:blur-[150px] -z-10"></div>
        
        <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8 z-10 flex flex-col items-center">


          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold uppercase tracking-widest text-slate-200">
              Laboratorio Técnico
            </h2>
            <p className="text-slate-400 text-base sm:text-lg px-2">
              Estamos preparando la mejor plataforma para gestionar tus reparaciones en Posadas.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 sm:pt-8">
            <div className="bg-slate-800/50 p-5 sm:p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm transition-all hover:border-violet-500/60">
              <h3 className="text-violet-400 font-bold mb-2 uppercase tracking-wider text-xs sm:text-sm">Ubicación</h3>
              <p className="text-slate-200 text-sm sm:text-base">Catamarca 2010<br/>Posadas, Misiones</p>
            </div>
            
            <div className="bg-slate-800/50 p-5 sm:p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm transition-all hover:border-violet-500/60">
              <h3 className="text-violet-400 font-bold mb-2 uppercase tracking-wider text-xs sm:text-sm">Estado</h3>
              <p className="text-slate-200 font-medium text-sm sm:text-base">Próximamente:<br/>Seguimiento de Orden de Servicio</p>
            </div>
          </div>


          {/* Botón */}
          <div className="pt-4 sm:pt-6">
            <a 
              href="https://wa.me/5493764585715?text=Hola%20Dealertech!%20Vi%20la%20página%20y%20quería%20hacer%20una%20consulta."
              className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-xl transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(139,92,246,0.4)] text-base sm:text-lg"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Indicador de scroll (opcional) */}
        <div className="absolute bottom-6 sm:bottom-10 animate-bounce text-slate-500">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest">Deslizá para ver más</p>
        </div>
      </section>

      {/* SECCIÓN 2: Tu componente BackgroundPaths completo */}
      <section className="w-full">
        <BackgroundPaths />
      </section>

    </div>
  );
}