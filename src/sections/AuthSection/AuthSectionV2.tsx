"use client";

import AuthTextV2 from "./elements/AuthTextV2";

export default function AuthSectionV2() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Lado Izquierdo */}
      <div className="flex-1 flex justify-center items-center border p-8">
        <AuthTextV2 />
      </div>

      {/* Lado Derecho */}
      <div className="flex-1 flex justify-center items-center border p-8">
        <div className="text-gray-500">
          Form - Backend implementation pending
        </div>
      </div>
    </section>
  );
}
