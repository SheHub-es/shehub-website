import AuthTextV2 from "@/sections/auth/components/AuthTextV2";

export default function AuthSectionV2() {
  return (
    <section className="w-full min-h-screen pt-[120px] flex justify-center">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="w-full flex justify-center">
          <AuthTextV2 />
        </div>

        {/* COLUMNA DERECHA */}
        <div className="w-full flex justify-center">
          <div className="text-gray-500">
            Form - Backend implementation pending
          </div>
        </div>

      </div>
    </section>
  );
}



