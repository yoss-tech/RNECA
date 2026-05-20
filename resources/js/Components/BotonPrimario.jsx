export default function BotonPrimario({ children, onClick }) {
    return (
        <button 
            onClick={onClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
            {children}
        </button>
    );
}


