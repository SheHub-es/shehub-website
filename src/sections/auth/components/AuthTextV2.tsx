import CarouselV2 from "@/sections/auth/components/CarouselV2";

export default function AuthTextV2() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-0 max-w-lg">

      {/* TITLE */}
      <h1
        style={{ fontSize: "var(--text-size-900)" }}
        className="
          font-heavy
          leading-[var(--spacing-line-height-heading-2)]
          bg-[image:var(--color-gradient-brand)]
          bg-clip-text
          text-transparent
        "
      >
        Join SheHub
      </h1>

      {/* SUBTITLE */}
      <h2
        className="
          font-medium
          text-[length:var(--text-size-600)]
          leading-[var(--spacing-line-height-heading-4)]
          text-[var(--carousel-text-sub)]
          text-center
        "
      >
        Connect. Create. Break Barriers.
      </h2>

      {/* REAL CAROUSEL */}
      <CarouselV2/>

    </div>
  );
}
