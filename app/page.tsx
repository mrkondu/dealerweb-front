
export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 text-white font-sans">
      {/* Círculo de luz de fondo (Efecto Blur) */}
      <div className="absolute w-64 h-64 bg-violet-600/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Logo con Púrpura Eléctrico y Sombra */}
        <h1 className="text-6xl font-extrabold tracking-tighter text-violet-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          DEALER<span className="text-white">TECH</span>
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Laboratorio Técnico en Renovación</h2>
          <p className="text-slate-400 text-lg">
            Estamos preparando la mejor plataforma para gestionar tus reparaciones en Posadas.
          </p>
        </div>

        {/* Tarjetas con bg-slate-800/50 y bordes púrpura */}
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

        {/* Botón de WhatsApp Eléctrico */}
        <div className="pt-6">
          <a 
            href="https://wa.me/5493764000000" // Reemplazá por tu número real
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <p className="text-slate-500 text-sm pt-4 italic">
          Expertos en microsoldadura y hardware avanzado.
        </p>
      </div>
    </main>
  );
}