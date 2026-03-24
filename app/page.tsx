import BackgroundPaths from "./(routes)/home/page";

export default function MaintenancePage() {
  return (
    <div className="bg-[#0f172a] min-h-screen font-sans">
      
      {/* SECCIÓN 1: Mantenimiento (Ocupa toda la primera vista) */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden border-b border-violet-500/20">
        
        {/* Glow de fondo para esta sección */}
        <div className="absolute w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] -z-10"></div>
        
        <div className="max-w-2xl w-full text-center space-y-8 z-10">
          {/* Logo */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-violet-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            DEALER<span className="text-white">TECH</span>
          </h1>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-widest text-slate-200">
              Laboratorio Técnico
            </h2>
            <p className="text-slate-400 text-lg">
              Estamos preparando la mejor plataforma para gestionar tus reparaciones en Posadas.
            </p>
          </div>

          {/* Tarjetas */}
        <div className="grid md:grid-cols-2 gap-4 pt-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm transition-all hover:border-violet-500/60">
            <h3 className="text-violet-400 font-bold mb-2 uppercase tracking-wider text-sm">Ubicación</h3>
            <p className="text-slate-200">Catamarca 2010<br/>Posadas, Misiones</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm transition-all hover:border-violet-500/60">
            <h3 className="text-violet-400 font-bold mb-2 uppercase tracking-wider text-sm">Estado</h3>
            <p className="text-slate-200 font-medium">Próximamente:<br/>Seguimiento de Orden de Servicio</p>
          </div>
        </div>


          {/* Botón */}
          <div className="pt-6">
            <a 
              href="https://wa.me/5493764585715?text=Hola%20Dealertech!%20Vi%20la%20página%20y%20quería%20hacer%20una%20consulta."
              className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Indicador de scroll (opcional) */}
        <div className="absolute bottom-10 animate-bounce text-slate-500">
          <p className="text-xs uppercase tracking-widest">Deslizá para ver más</p>
        </div>
      </section>

      {/* SECCIÓN 2: Tu componente BackgroundPaths completo */}
      <section className="w-full">
        <BackgroundPaths />
      </section>

    </div>
  );
}