import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import logotipo0 from "../../../img/PNG/Logotipo0.png"

export default function ImageGallery({ images = defaultImages }) {
  const [selected, setSelected] = useState(null); // imagen abierta en el modal
 
  // Cerrar con la tecla Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setSelected(null);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
 
  // Bloquear scroll del fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
 
  return (
    <div className="w-full flex flex-col items-center gap-6 p-8" style={{ background: "#F4F1EA" }}>
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(img)}
            className="relative w-44 h-44 rounded overflow-hidden border group cursor-zoom-in"
            style={{ borderColor: "#D9D2C4" }}
          >
            <img
              src={logotipo0}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={14} />
            </span>
          </button>
        ))}
      </div>
 
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(20,18,14,0.9)" }}
          onClick={() => setSelected(null)} // clic fuera de la imagen cierra el modal
        >
          <button
            onClick={() => setSelected(null)}
            className="fixed top-5 right-7 text-white hover:opacity-70"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
 
          <img
            src={selected.full}
            alt={selected.alt}
            className="max-w-[90vw] max-h-[85vh] rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()} // evita que el clic en la imagen cierre el modal
          />
        </div>
      )}
    </div>
  );
}

const defaultImages = [
  {
    thumb: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    full: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=80",
    alt: "Reloj",
  },
  {
    thumb: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80",
    full: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80",
    alt: "Reloj 2",
  },
  {
    thumb: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80",
    full: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80",
    alt: "Reloj 3",
  },
];