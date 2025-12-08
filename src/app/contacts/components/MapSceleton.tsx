import { MapPinned } from "lucide-react"; // красивая иконка карты

function MapSkeleton() {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
      {/* shimmer */}
      <div className="absolute inset-0 animate-[shimmer_1.3s_infinite_linear] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-70" style={{
        backgroundSize: '400% 100%',
        zIndex: 1
      }} />
      {/* контент поверх shimmer */}
      <div className="relative z-10 flex flex-col items-center">
        <MapPinned className="w-12 h-12 text-gray-400 mb-4" />
        <span className="text-gray-500 font-medium text-lg sm:text-xl">Загрузка карты…</span>
      </div>
      {/* shimmer keyframes */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -400px 0; }
            100% { background-position: 400px 0; }
          }
        `}
      </style>
    </div>
  );
}

export default MapSkeleton;
