import AuthFormV1 from "@/sections/auth/components/AuthForm";
import CarouselV2 from "@/sections/auth/components/CarouselV2";

export default function AuthSectionV2() {
  return (
    <section className="w-full min-h-screen flex justify-center px-2">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

        {/* COLUMNA IZQUIERDA */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex flex-col justify-center items-center text-center gap-0 max-w-lg">
            {/* TITLE */}
            <h1 
              className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--color-gradient-brand)" }}
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
                mb-4 md:mb-12
              "
            >
              Connect. Create. Break Barriers.
            </h2>

            {/* CAROUSEL */}
            <CarouselV2 />
          </div>
        </div>

        {/* COLUMNA DERECHA (FORM) */}
        <div className="w-full flex justify-center md:justify-end md:-mt-8">
          <div className="w-full max-w-lg">
            <AuthFormV1 />
          </div>
        </div>

      </div>
    </section>
  );
}
