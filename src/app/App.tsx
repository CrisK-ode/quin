import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Clock, Heart, Sparkles } from "lucide-react";
import fotoQuinceanera from "../../img1.jpeg";
import musica from "../assets/mus1.mp3";

// ─── SVG: Flor grande de 8 pétalos ────────────────────────────────────────────
function FlowerLg({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <ellipse
          key={i}
          cx="100" cy="52" rx="19" ry="44"
          fill="currentColor"
          transform={`rotate(${deg} 100 100)`}
          opacity="0.65"
        />
      ))}
      <circle cx="100" cy="100" r="22" fill="currentColor" opacity="0.9" />
      <circle cx="100" cy="100" r="10" fill="white" opacity="0.45" />
    </svg>
  );
}

// ─── SVG: Flor pequeña de 6 pétalos ───────────────────────────────────────────
function FlowerSm({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} fill="none">
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx="60" cy="26" rx="12" ry="28"
          fill="currentColor"
          transform={`rotate(${deg} 60 60)`}
          opacity="0.7"
        />
      ))}
      <circle cx="60" cy="60" r="15" fill="currentColor" opacity="0.95" />
      <circle cx="60" cy="60" r="6"  fill="white"       opacity="0.5"  />
    </svg>
  );
}

// ─── SVG: Rama con hojas ──────────────────────────────────────────────────────
function Branch({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 220" className={className} style={style} fill="none">
      <path d="M60 220 Q58 160 54 100 Q50 50 62 8" stroke="currentColor" strokeWidth="2.5" opacity="0.35" strokeLinecap="round" />
      <ellipse cx="38" cy="175" rx="24" ry="11" fill="currentColor" opacity="0.3"  transform="rotate(-35 38 175)" />
      <ellipse cx="80" cy="148" rx="22" ry="10" fill="currentColor" opacity="0.3"  transform="rotate(30 80 148)"  />
      <ellipse cx="36" cy="116" rx="20" ry="10" fill="currentColor" opacity="0.27" transform="rotate(-38 36 116)" />
      <ellipse cx="82" cy="88"  rx="18" ry="9"  fill="currentColor" opacity="0.27" transform="rotate(28 82 88)"   />
      <ellipse cx="50" cy="60"  rx="15" ry="8"  fill="currentColor" opacity="0.25" transform="rotate(-22 50 60)"  />
    </svg>
  );
}

// ─── SVG: Pastel de cumpleaños ────────────────────────────────────────────────
function Cake({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 160 170" className={className} style={style} fill="none">
      {/* Velas */}
      <rect x="42"  y="25" width="9" height="24" rx="4.5" fill="currentColor" opacity="0.5" />
      <rect x="75"  y="18" width="9" height="30" rx="4.5" fill="currentColor" opacity="0.6" />
      <rect x="108" y="27" width="9" height="22" rx="4.5" fill="currentColor" opacity="0.5" />
      {/* Llamas */}
      <ellipse cx="46.5" cy="20" rx="5.5" ry="8" fill="#fde68a" opacity="0.95" />
      <ellipse cx="79.5" cy="13" rx="5.5" ry="8" fill="#fde68a" opacity="0.95" />
      <ellipse cx="112.5" cy="22" rx="5.5" ry="8" fill="#fde68a" opacity="0.95" />
      {/* Brillo en llamas */}
      <ellipse cx="44" cy="18" rx="2" ry="3" fill="white" opacity="0.4" />
      <ellipse cx="77" cy="11" rx="2" ry="3" fill="white" opacity="0.4" />
      <ellipse cx="110" cy="20" rx="2" ry="3" fill="white" opacity="0.4" />
      {/* Piso superior */}
      <rect x="28"  y="49"  width="104" height="36" rx="11" fill="currentColor" opacity="0.55" />
      {/* Crema goteos top */}
      {[38, 56, 74, 92, 110, 122].map((x, i) => (
        <ellipse key={i} cx={x} cy="49" rx="7" ry="5" fill="white" opacity="0.4" />
      ))}
      {/* Piso base */}
      <rect x="14"  y="85"  width="132" height="44" rx="11" fill="currentColor" opacity="0.45" />
      {/* Crema goteos base */}
      {[26, 46, 66, 86, 106, 126, 138].map((x, i) => (
        <ellipse key={i} cx={x} cy="85" rx="7" ry="5" fill="white" opacity="0.38" />
      ))}
      {/* Plato */}
      <rect x="6"   y="129" width="148" height="32" rx="11" fill="currentColor" opacity="0.38" />
      {/* Detalles del plato */}
      {[26, 50, 75, 100, 124, 140].map((x, i) => (
        <circle key={i} cx={x} cy="145" r="4" fill="white" opacity="0.45" />
      ))}
      {/* Corazones decorativos en la torta */}
      <text x="55" y="74"  fontSize="14" fill="white" opacity="0.5">♡</text>
      <text x="88" y="74"  fontSize="12" fill="white" opacity="0.4">✦</text>
      <text x="46" y="112" fontSize="12" fill="white" opacity="0.4">✿</text>
      <text x="80" y="115" fontSize="16" fill="white" opacity="0.5">♡</text>
      <text x="108" y="112" fontSize="12" fill="white" opacity="0.4">✦</text>
    </svg>
  );
}

// ─── SVG: Mariposa ────────────────────────────────────────────────────────────
function Butterfly({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 80" className={className} style={style} fill="none">
      {/* Alas superiores */}
      <ellipse cx="35" cy="30" rx="28" ry="22" fill="currentColor" opacity="0.5" transform="rotate(-20 35 30)" />
      <ellipse cx="65" cy="30" rx="28" ry="22" fill="currentColor" opacity="0.5" transform="rotate(20 65 30)" />
      {/* Alas inferiores */}
      <ellipse cx="33" cy="52" rx="18" ry="14" fill="currentColor" opacity="0.4" transform="rotate(-10 33 52)" />
      <ellipse cx="67" cy="52" rx="18" ry="14" fill="currentColor" opacity="0.4" transform="rotate(10 67 52)" />
      {/* Cuerpo */}
      <ellipse cx="50" cy="40" rx="4" ry="20" fill="currentColor" opacity="0.7" />
      {/* Antenas */}
      <path d="M48 22 Q42 10 38 6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      <path d="M52 22 Q58 10 62 6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      <circle cx="38" cy="5"  r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="62" cy="5"  r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// ─── Partículas flotantes ──────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: `${(i * 4.0 + 1.2) % 100}%`,
  size: 7 + (i % 6) * 3,
  delay: (i * 0.55) % 16,
  duration: 16 + (i % 7) * 2.8,
  symbol: ["♡", "✿", "❀", "✦", "·", "❋", "✽", "❁", "✧"][i % 9],
}));

// ─── Datos de recuerdos / momentos ────────────────────────────────────────────
// Edita las frases y etiquetas según quieras.
const MOMENTOS = [
  { label: "Momentos que atesoro",     frase: "Hay instantes tan perfectos que el corazón los guarda para siempre." },
  { label: "El inicio de una nueva era", frase: "Hoy cierro un capítulo hermoso y abro el más emocionante de todos." },
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {

  const iniciarMusica = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }

    // Solo se ejecuta una vez
    window.removeEventListener("click", iniciarMusica);
    window.removeEventListener("touchstart", iniciarMusica);
  };

  window.addEventListener("click", iniciarMusica);
  window.addEventListener("touchstart", iniciarMusica);

  // Parallax
  const onScroll = () => {
    if (!heroRef.current) return;
    const y = window.scrollY * 0.35;
    heroRef.current.style.transform = `translateY(${y}px)`;
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("click", iniciarMusica);
    window.removeEventListener("touchstart", iniciarMusica);
    window.removeEventListener("scroll", onScroll);
  };
}, []);

  return (
    <>
      <audio
      ref={audioRef}
        src={musica}
        loop
        preload="auto"
      />
      <style>{`
        @keyframes float-up {
          0%   { transform: translateY(0)       rotate(0deg);   opacity: 0;    }
          7%   { opacity: 0.7; }
          93%  { opacity: 0.2; }
          100% { transform: translateY(-110vh)  rotate(360deg); opacity: 0;    }
        }
        @keyframes shimmer {
          0%   { background-position: -240% center; }
          100% { background-position:  240% center; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-7deg); }
          50%       { transform: rotate( 7deg); }
        }
        @keyframes sway-r {
          0%, 100% { transform: rotate(7deg) scaleX(-1); }
          50%       { transform: rotate(-7deg) scaleX(-1); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1);    opacity: 0.85; }
          50%       { transform: scale(1.09); opacity: 1;    }
        }
        @keyframes flap {
          0%, 100% { transform: scaleX(1);    }
          50%       { transform: scaleX(0.55); }
        }
        @keyframes fade-drop {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0);      }
        }
        .float-p  { position:fixed; animation:float-up linear infinite; pointer-events:none; z-index:1; user-select:none; color:#fbb6ce; }
        .shimmer  {
          background: linear-gradient(90deg, #9d174d, #f9a8d4, #be185d, #fda4af, #9d174d);
          background-size: 260% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5.5s linear infinite;
        }
        .sway     { transform-origin: bottom center; animation: sway   5.5s ease-in-out infinite; }
        .sway-r   { transform-origin: bottom center; animation: sway-r 5.5s ease-in-out infinite; }
        .bob      { animation: bob        4.2s ease-in-out infinite; }
        .bob2     { animation: bob        4.2s ease-in-out infinite 1.4s; }
        .bob3     { animation: bob        4.2s ease-in-out infinite 2.8s; }
        .pulse    { animation: pulse-soft 3.4s ease-in-out infinite; }
        .flap     { transform-origin: center; animation: flap 1.8s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
      `}</style>

      {/* Partículas flotantes */}
      {PARTICLES.map(p => (
        <div key={p.id} className="float-p"
          style={{ left: p.left, bottom: "-14px", fontSize: `${p.size}px`,
                   animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}>
          {p.symbol}
        </div>
      ))}

      <main className="relative overflow-x-hidden font-body bg-background text-foreground">

        {/* ══════════════════════════════════════════════════════════════════
            HERO — "Te invito a mis 15 años"
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

          {/* Fondo: malla de degradados en capas */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-fuchsia-200" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_30%,_rgba(255,228,230,0.85)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_80%,_rgba(244,114,182,0.25)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_20%,_rgba(217,70,239,0.15)_0%,_transparent_60%)]" />

          {/* Decoraciones fijas de fondo */}
          {/* Flor grande — arriba izquierda */}
          <FlowerLg className="absolute -top-14 -left-14 sm:-top-20 sm:-left-20 w-52 sm:w-72 md:w-80 h-auto text-rose-300 sway opacity-60" />
          {/* Flor grande — abajo derecha */}
          <FlowerLg className="absolute -bottom-14 -right-14 sm:-bottom-20 sm:-right-20 w-56 sm:w-80 md:w-96 h-auto text-fuchsia-300 sway opacity-55"
            style={{ animationDelay: "2s" }} />
          {/* Flor mediana — arriba derecha */}
          <FlowerSm className="absolute top-8 right-8 sm:top-14 sm:right-20 w-24 sm:w-36 md:w-44 h-auto text-pink-200 opacity-70" />
          {/* Ramas — lados */}
          <Branch className="absolute bottom-0 left-2 sm:left-10 w-20 sm:w-28 h-auto text-rose-400 opacity-40 sway" />
          <Branch className="absolute bottom-0 right-2 sm:right-10 w-20 sm:w-28 h-auto text-pink-400 opacity-40 sway-r" />
          {/* Mariposas */}
          <Butterfly className="absolute top-1/4 left-6 sm:left-16 w-14 sm:w-20 h-auto text-rose-300 flap opacity-50" />
          <Butterfly className="absolute top-1/3 right-6 sm:right-20 w-10 sm:w-16 h-auto text-pink-400 flap opacity-45"
            style={{ animationDelay: "0.9s" }} />
          {/* Pastel — abajo izquierda */}
          <div className="absolute bottom-8 left-6 sm:bottom-14 sm:left-16 bob opacity-60">
            <Cake className="w-20 sm:w-28 md:w-32 h-auto text-rose-400" />
          </div>

          {/* Contenido hero con parallax */}
          <div ref={heroRef} className="relative z-10 text-center px-5 sm:px-8 max-w-2xl mx-auto py-24 sm:py-32">

            {/* Corona / icono intro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-block pulse"
            >
              <span className="text-5xl sm:text-7xl">👑</span>
            </motion.div>

            {/* Etiqueta superior */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-rose-500 uppercase tracking-[0.32em] text-[10px] sm:text-xs font-light mb-4"
            >
              Una noche que jamás olvidarás
            </motion.p>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-[1.05] mb-3"
            >
              <span className="block text-rose-800 italic font-light text-4xl sm:text-5xl md:text-6xl">
                Te invito a
              </span>
              <span className="block shimmer font-bold not-italic text-6xl sm:text-8xl md:text-9xl">
                mis 67
              </span>
              <span className="block text-rose-700 italic font-light text-4xl sm:text-5xl md:text-6xl">
                años
              </span>
            </motion.h1>

            {/* Divisor ornamental */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.9 }}
              className="flex items-center justify-center gap-3 my-6"
            >
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-rose-300" />
              <span className="text-rose-300 text-lg">✦</span>
              <span className="text-pink-400 text-base">♡</span>
              <span className="text-rose-300 text-lg">✦</span>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-rose-300" />
            </motion.div>

            {/* Nombre de la quinceañera */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.9 }}
              className="font-display italic text-rose-600 text-2xl sm:text-3xl mb-2"
            >
              {/* ── Edita el nombre aquí ── */}
              Nallely Saltos
            </motion.p>

            {/* CTA scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-col items-center gap-1.5 text-rose-300"
            >
              <span className="text-[9px] tracking-[0.35em] uppercase">Continua Abajo</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="text-rose-300 text-base"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECCIÓN MENSAJE — palabras del corazón
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-50 via-white to-rose-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(253,232,240,0.6)_0%,_transparent_75%)]" />

          {/* Deco */}
          <FlowerSm className="absolute -left-8 top-12 w-28 sm:w-40 h-auto text-pink-100 opacity-80" />
          <FlowerSm className="absolute -right-8 bottom-12 w-24 sm:w-36 h-auto text-rose-100 opacity-80" />
          <Butterfly className="absolute top-10 right-10 sm:right-24 w-12 sm:w-20 h-auto text-fuchsia-200 flap"
            style={{ animationDelay: "0.5s" }} />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-rose-400 uppercase tracking-[0.28em] text-[10px] sm:text-xs mb-4">
                Un mensaje especial
              </p>
              <h2 className="font-display italic font-light text-rose-800 text-3xl sm:text-4xl md:text-5xl mb-8">
                Quince años de magia
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-10" />

              {/* Carta / mensaje */}
              <div className="bg-white/80 backdrop-blur rounded-3xl border border-rose-100 shadow-sm px-7 sm:px-12 py-10 text-left space-y-5">
                <p className="font-display italic text-rose-600 text-lg sm:text-xl leading-relaxed">
                  &ldquo;Quince años no son solo un número — son 15 primaveras de risas,
                  sueños, aventuras y momentos que han formado a la persona increíble
                  que hoy celebramos.&rdquo;
                </p>
                <p className="text-rose-500 font-light text-sm sm:text-base leading-relaxed">
                  Este día marca el inicio de una nueva etapa: la de descubrir el mundo
                  con ojos de mujer, llevar la infancia en el corazón y abrazar el futuro
                  con todo el valor y la gracia que te caracterizan.
                </p>
                <p className="text-rose-500 font-light text-sm sm:text-base leading-relaxed">
                  Quiero que esta noche sea perfecta, y para eso necesito lo más importante:
                  que <strong className="text-rose-700 font-medium">tú estés ahí</strong>.
                </p>
                <div className="pt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-rose-100" />
                  <Heart className="w-4 h-4 text-rose-300" />
                  <div className="h-px flex-1 bg-rose-100" />
                </div>
                {/* ── Firma — edita el nombre aquí ── */}
                <p className="font-display italic text-rose-600 text-xl text-right">
                  Con amor, Nallely
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            GALERÍA DE MOMENTOS — fotos + frases
        ══════════════════════════════════════════════════════════════════ */}
       

        {/* ══════════════════════════════════════════════════════════════════
            INVITACIÓN FORMAL
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden">
          {/* Fondo */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-fuchsia-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_60%,_rgba(244,114,182,0.1)_0%,_transparent_70%)]" />

          {/* Deco */}
          <FlowerLg className="absolute -right-12 top-10 sm:-right-16 sm:top-14 w-44 sm:w-64 h-auto text-rose-200 opacity-55 sway"
            style={{ animationDelay: "1s" }} />
          <FlowerLg className="absolute -left-12 bottom-10 sm:-left-16 sm:bottom-14 w-44 sm:w-64 h-auto text-pink-200 opacity-50 sway" />
          <FlowerSm className="absolute top-16 left-8 sm:left-20 w-16 sm:w-24 h-auto text-fuchsia-200 opacity-60" />
          <Butterfly className="absolute bottom-20 right-10 sm:right-24 w-12 sm:w-20 h-auto text-rose-300 flap opacity-50"
            style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-10 left-10 sm:top-16 sm:left-24 bob3 opacity-40">
            <Cake className="w-16 sm:w-22 h-auto text-pink-300" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Encabezado */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="text-center mb-12 sm:mb-16"
            >
              <p className="text-rose-400 uppercase tracking-[0.28em] text-[10px] sm:text-xs mb-3">
                Estás cordialmente invitad@ a 
              </p>
              <h2 className="font-display italic font-light text-rose-800 text-3xl sm:text-4xl md:text-5xl">
                ¡La Celebración de mis 15 años!
              </h2>
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mx-auto mt-6" />
            </motion.div>

            {/* Tarjeta de invitación */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden">
                {/* Cinta degradado top */}
                <div className="h-1.5 bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-300" />

                {/* Layout: columna en móvil → dos columnas en md+ */}
                <div className="p-7 sm:p-10 md:p-14 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-14 items-center">

                  {/* ════════════════════════════════════════════════════
                      FOTO DE LA QUINCEAÑERA
                      Para agregar la foto real, reemplaza todo el bloque
                      <div className="relative"> ... </div> con:

                      <div className="relative">
                        <div className="spin-ring absolute -inset-4 rounded-full
                                        border-2 border-dashed border-rose-200 opacity-50" />
                        <img
                          src="RUTA_O_URL_DE_LA_FOTO_DE_LA_QUINCEAÑERA"
                          alt="Nombre de la quinceañera"
                          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                                     rounded-full object-cover object-top
                                     border-4 border-white shadow-lg shadow-rose-100"
                        />
                        <span className="absolute -top-2 -right-2 text-2xl">🌸</span>
                        <span className="absolute -bottom-2 -left-2 text-xl">✨</span>
                      </div>
                  ════════════════════════════════════════════════════ */}
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full border-2 border-dashed border-rose-200 opacity-50"
                        style={{ animation: "spin-slow 24s linear infinite" }}
                      />
                      {/* ── FOTO DE LA QUINCEAÑERA ──
                          Para cambiarla: edita src con la ruta de tu foto, ej: src="/mi-foto.jpg" */}
                      <img
                        src={fotoQuinceanera}
                        alt="Foto de la quinceañera"
                        className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64
                                   rounded-full object-cover object-top
                                   border-4 border-white shadow-lg shadow-rose-100"
                      />
                      <span className="absolute -top-1 -right-1 text-xl sm:text-2xl">🌸</span>
                      <span className="absolute -bottom-1 -left-1 text-lg sm:text-xl">✨</span>
                    </div>

                    <div className="text-center">
                      <p className="font-display italic text-rose-700 text-xl sm:text-2xl">
                        ¡Mis XV Años!
                      </p>
                      {/* ── Edita el nombre aquí ── */}
                      <p className="text-rose-400 text-sm mt-1 tracking-wide">
                        — Nallely Saltos
                      </p>
                    </div>
                  </div>

                  {/* Detalles del evento */}
                  <div className="space-y-6 w-full">
                    <div>
                      <h3 className="font-display italic font-light text-rose-800 text-2xl sm:text-3xl md:text-4xl leading-tight mb-2">
                        Acompáñame en<br />esta noche mágica
                      </h3>
                      <p className="text-rose-400 text-sm leading-relaxed">
                        Tu presencia es el regalo más grande que puedes darme.
                        Te espero con el corazón abierto y una sonrisa enorme.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* ── Fecha — edita aquí ── */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-50 border border-rose-100
                                        flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
                        </div>
                        <div>
                          <p className="text-rose-300 text-[10px] tracking-[0.22em] uppercase mb-0.5">Fecha</p>
                          <p className="text-rose-700 font-medium text-sm sm:text-base">Sabado, 25 de Julio</p>
                        </div>
                      </div>

                      {/* ── Hora — edita aquí ── */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-50 border border-rose-100
                                        flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
                        </div>
                        <div>
                          <p className="text-rose-300 text-[10px] tracking-[0.22em] uppercase mb-0.5">Hora</p>
                          <p className="text-rose-700 font-medium text-sm sm:text-base">20:00 hrs. en punto</p>
                        </div>
                      </div>

                      {/* ── Lugar — edita aquí ── */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-50 border border-rose-100
                                        flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
                        </div>
                        <div>
                          <p className="text-rose-300 text-[10px] tracking-[0.22em] uppercase mb-0.5">Lugar</p>
                          <p className="text-rose-700 font-medium text-sm sm:text-base">Casa de la quinceañera</p>
                          <p className="text-rose-400 text-xs sm:text-sm">Rancho alto calle Q</p>
                        </div>
                      </div>

                      {/* ── Vestimenta — edita aquí ── */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-50 border border-rose-100
                                        flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
                        </div>
                        <div>
                          <p className="text-rose-300 text-[10px] tracking-[0.22em] uppercase mb-0.5">Vestimenta</p>
                          <p className="text-rose-700 font-medium text-sm sm:text-base">Elegante</p>
                        </div>
                      </div>
                    </div>

                    {/* ── Confirmación — edita aquí ── */}
                    <div className="pt-5 border-t border-rose-50">
                      <p className="text-rose-300 text-[10px] tracking-[0.22em] uppercase mb-1.5">
                        Confirmar asistencia
                      </p>
                      <p className="text-rose-600 font-medium text-sm sm:text-base">[WhatsApp / Teléfono]</p>
                      <p className="text-rose-300 text-xs mt-1">Confirmar antes del 20 de julio</p>
                    </div>
                  </div>
                </div>

                {/* Pie ornamental de la tarjeta */}
                <div className="px-7 sm:px-12 pb-9 pt-2 text-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-100 to-transparent mb-7" />
                  <p className="font-display italic text-rose-400 text-sm sm:text-base md:text-lg">
                    &ldquo;Quince años de amor y el resto de la vida por delante&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-4 text-rose-200 select-none">
                    <span>✿</span><span>✦</span><span className="text-pink-300">♡</span><span>✦</span><span>✿</span>
                  </div>
                </div>

                {/* Cinta degradado bottom */}
                <div className="h-1.5 bg-gradient-to-r from-fuchsia-300 via-pink-400 to-rose-300" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CIERRE — despedida emotiva
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 px-5 sm:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-50 via-rose-100 to-pink-200" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,_rgba(251,207,232,0.75)_0%,_transparent_75%)]" />

          {/* Deco */}
          <FlowerLg className="absolute -top-10 left-1/2 -translate-x-1/2 w-56 sm:w-80 h-auto text-rose-200 opacity-55" />
          <FlowerSm className="absolute bottom-6 left-6 sm:left-14 w-16 sm:w-24 h-auto text-pink-200 opacity-70" />
          <FlowerSm className="absolute bottom-6 right-6 sm:right-14 w-16 sm:w-24 h-auto text-fuchsia-200 opacity-70" />
          <Branch className="absolute top-0 left-0 w-16 sm:w-24 h-auto text-rose-300 opacity-30 sway" />
          <Branch className="absolute top-0 right-0 w-16 sm:w-24 h-auto text-pink-300 opacity-30 sway-r" />
          <div className="hidden sm:block absolute bottom-12 left-14 bob opacity-35">
            <Cake className="w-20 h-auto text-rose-300" />
          </div>
          <div className="hidden sm:block absolute top-12 right-16 bob2 opacity-30">
            <Cake className="w-18 h-auto text-fuchsia-300" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-10 max-w-lg mx-auto"
          >
            <div className="text-5xl sm:text-6xl mb-6 pulse inline-block">🎂</div>
            <h3 className="font-display italic text-rose-700 text-2xl sm:text-3xl md:text-4xl mb-5">
              ¡Te espero con todo mi corazón!
            </h3>
            <p className="text-rose-500 font-light text-sm sm:text-base leading-relaxed mb-10">
              Este día solo puede ser perfecto si tú estás. Gracias por ser parte
              de mi historia y por seguir escribiéndola conmigo.
              Nos vemos en la celebración más especial de mi vida.
            </p>
            {/* Emojis animados */}
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 text-2xl sm:text-3xl select-none">
              {["🌸", "👑", "💕", "✨", "🎀", "🌹", "🥂"].map((e, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.55, type: "spring", stiffness: 220 }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}
