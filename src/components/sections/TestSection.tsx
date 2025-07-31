"use client";
import { Heart } from 'lucide-react'

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/hooks/useTranslation";
import type { Language } from "@/translations/types";

const TestSection = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <section className="px-4 py-8 text-center space-y-6 border rounded-lg bg-background shadow-sm max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">{t("test.greeting")}</h2>
      <p className="text-muted-foreground">{t("test.intro")}</p>

      <div className="flex justify-center">
        <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ca">Català</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <button className="bg-[image:var(--color-button-bg-gradient)] text-button-primary-primary-text hover:bg-button-primary-primary-bg-hover focus:bg-button-primary-primary-bg-focus hover:text-button-primary-primary-text-hover p-1 ml-2"> Esto es un botón de prueba </button>
      </div>
      <div className="flex justify-center">
        <Toggle
          options={[
            { label: "ES", value: "es" },
            { label: "EN", value: "en" },
            { label: "CA", value: "ca" },
          ]}
          selected={language}
          onChange={(value: string) => setLanguage(value as Language)}
        />
      </div>
        <Card
        icon={<Heart />}
        title="Card Morado"
        description="No es clickeable"
        type="nonClickable"
        color="white"
        radius="lg"
      />
    </section>
  );
};

export default TestSection;
