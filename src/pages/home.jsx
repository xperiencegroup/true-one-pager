import { useParams, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Clientes from "./components/clientes";
import DesignedForCertainty from "./components/designed-certainty";
import Documentamos from "./components/documentamos";
import Eligenos from "./components/eligenos";
import Especificaciones from "./components/especificaciones";
import Footer from "./components/footer";
import HablemosDeTuProyecto from "./components/hablemos";
import Hero from "./components/hero";
import Infraestructura from "./components/infraestructura";
import Macrolotes from "./components/macrolotes";
import Modelos from "./components/modelos";
import Naves from "./components/naves";
import Preguntas from "./components/preguntas";
import Ubicacion from "./components/ubicacion";
import Distancias from "./components/distancias";
import WhatsappButton from "../components/floating-buttons/whatsapp-button";
import ClickAndXperienceButton from "../components/floating-buttons/click-and-xperience-button";
import PopupClickAndXperience from "../components/popup-registro/pop-up-click-xperience";

export default function Home() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const { t } = useTranslation("meta");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    document.title = t("meta.title");
  }, [i18n.language, t]);

  useEffect(() => {
    if (lang && ["es", "en"].includes(lang) && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const isXperiencePopupOpen = params.get("form") === "maqueta";

  const closeXperiencePopup = () => {
    setParams(
      (prev) => {
        prev.delete("form");
        return prev;
      },
      { replace: true },
    );
  };
  return (
    <main className="relative flex flex-col w-full">
      {/* botones flotantes */}
      <WhatsappButton />
      <ClickAndXperienceButton />
      <Toaster />

      <Hero />
      <Especificaciones />
      <Eligenos />
      <Ubicacion />
      <Distancias />
      <Modelos />
      <Naves />
      <Macrolotes />
      <Infraestructura />
      <Documentamos />
      <Preguntas />
      <DesignedForCertainty />
      <Clientes />
      <HablemosDeTuProyecto />
      <Footer />

      <PopupClickAndXperience
        isOpen={isXperiencePopupOpen}
        onClose={closeXperiencePopup}
      />
    </main>
  );
}
