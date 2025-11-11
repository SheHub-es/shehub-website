

export default function AuthTextV2() {
  return (
    <div className="flex flex-col justify-center items-start gap-6 w-full max-w-md text-left">
      {/* Título con gradiente */}
      <h1
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-gradient-brand-from)] to-[var(--color-gradient-brand-to)] bg-clip-text text-transparent"
      >
        Join SheHub
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-xl text-gray-600">
        Connect. Create. Break Barriers.
      </p>

      {/* Placeholder del carrusel */}
      <div className="w-full h-40 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
        <span className="text-gray-400">Carousel - Implementation Pending</span>
      </div>
    </div>
  );
}
