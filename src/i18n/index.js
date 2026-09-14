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
import esMacrolotes from "./locales/es/macrolotes.json";
import esInfra from "./locales/es/infraestructura.json";
import esDocumentamos from "./locales/es/documentamos.json";
import esFaq from "./locales/es/faq.json";
import esDFC from "./locales/es/designedFC.json";
import esClients from "./locales/es/clients.json";
import esHablemos from "./locales/es/hablemos.json";
import esFooter from "./locales/es/footer.json";
import esModalRegistro from "./locales/es/modal-registro.json";
import esModalPlataforma from "./locales/es/modal-plataforma.json";
import esUbicacion from "./locales/es/ubicacion.json";

// EN
import enHero from "./locales/en/hero.json";
import enNav from "./locales/en/navbar.json";
import enEspecificaciones from "./locales/en/especificaciones.json";
import enEligenos from "./locales/en/eligenos.json";
import enPlataforma from "./locales/en/plataforma.json";
import enModelos from "./locales/en/modelos.json";
import enNaves from "./locales/en/naves.json";
import enMacrolotes from "./locales/en/macrolotes.json";
import enInfra from "./locales/en/infraestructura.json";
import enDocumentamos from "./locales/en/documentamos.json";
import enFaq from "./locales/en/faq.json";
import enDFC from "./locales/en/designedFC.json";
import enClients from "./locales/en/clients.json";
import enHablemos from "./locales/en/hablemos.json";
import enFooter from "./locales/en/footer.json";
import enModalRegistro from "./locales/en/modal-registro.json";
import enModalPlataforma from "./locales/en/modal-plataforma.json";
import enUbicacion from "./locales/en/ubicacion.json";

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
        macrolotes: esMacrolotes,
        infra: esInfra,
        documentamos: esDocumentamos,
        faq: esFaq,
        dfc: esDFC,
        clients: esClients,
        hablemos: esHablemos,
        footer: esFooter,
        registro: esModalRegistro,
        modalPlataforma: esModalPlataforma,
        ubicacion: esUbicacion,
      },
      en: {
        hero: enHero,
        nav: enNav,
        especificaciones: enEspecificaciones,
        eligenos: enEligenos,
        plataforma: enPlataforma,
        modelos: enModelos,
        naves: enNaves,
        macrolotes: enMacrolotes,
        infra: enInfra,
        documentamos: enDocumentamos,
        faq: enFaq,
        dfc: enDFC,
        clients: enClients,
        hablemos: enHablemos,
        footer: enFooter,
        registro: enModalRegistro,
        modalPlataforma: enModalPlataforma,
        ubicacion: enUbicacion,
      },
    },
    fallbackLng: "es",
    defaultNS: "hero",
    interpolation: { escapeValue: false },
  });

export default i18n;
