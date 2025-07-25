"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
            <button className=" bg-button-primary-primary-bg-default text-button-primary-primary-text hover:bg-button-primary-primary-bg-hover focus:bg-button-primary-primary-bg-focus hover:text-button-primary-primary-text-hover p-1 ml-2"> Esto es un botón de prueba </button>
          </div>
    </section>
  );
};

export default TestSection;
