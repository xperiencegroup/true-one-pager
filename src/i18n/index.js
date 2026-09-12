import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ES
import esHero from "./locales/es/hero.json";
import esNav from "./locales/es/navbar.json";
import esEspecificaciones from "./locales/es/especificaciones.json";
import esEligenos from "./locales/es/eligenos.json";
import esPlataforma from "./locales/es/plataforma.json";
import esModelos from "./locales/es/modelos.json";
import esNaves from "./locales/es/naves.json";

// EN
import enHero from "./locales/en/hero.json";
import enNav from "./locales/en/navbar.json";
import enEspecificaciones from "./locales/en/especificaciones.json";
import enEligenos from "./locales/en/eligenos.json";
import enPlataforma from "./locales/en/plataforma.json";
import enModelos from "./locales/en/modelos.json";
import enNaves from "./locales/en/naves.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        hero: esHero,
        nav: esNav,
        especificaciones: esEspecificaciones,
        eligenos: esEligenos,
        plataforma: esPlataforma,
        modelos: esModelos,
        naves: esNaves,
      },
      en: {
        hero: enHero,
        nav: enNav,
        especificaciones: enEspecificaciones,
        eligenos: enEligenos,
        plataforma: enPlataforma,
        modelos: enModelos,
        naves: enNaves,
      },
    },
    fallbackLng: "es",
    defaultNS: "hero",
    interpolation: { escapeValue: false },
  });

export default i18n;
