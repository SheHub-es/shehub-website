import AuthFormV1 from "@/sections/auth/components/AuthForm";
import AuthTextV2 from "@/sections/auth/components/AuthTextV2";

export default function AuthSectionV2() {
  return (
    <section className="w-full min-h-screen flex justify-center px-2">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

        {/* COLUMNA IZQUIERDA */}
        <div className="w-full flex justify-center md:justify-end md:pr-6">
          <AuthTextV2 />
        </div>

        {/* COLUMNA DERECHA (FORM) */}
        <div className="w-full flex justify-center md:justify-start md:pl-6">
          <div className="w-full max-w-md">
            <AuthFormV1 />
          </div>
        </div>

      </div>
    </section>
  );
}
