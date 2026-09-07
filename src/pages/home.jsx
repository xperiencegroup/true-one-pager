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
import whatsappIcon from "../assets/icons/social/whatsapp.svg";
import PopupRegistro from "../components/popup-registro/pop-up-registro";
import { useState } from "react";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="relative flex flex-col w-full">
      {/* botón whatsapp */}
      <div className="fixed z-50 right-0 bottom-0">
        <a
          href="https://wa.me/528184640002"
          target="_blank"
          rel="noopener noreferer"
          className="flex size-[52px] justify-center items-center rounded-t-[32.5px] bg-orange"
        >
          <img
            src={whatsappIcon}
            alt={`Ícono de Whatsapp`}
            className="size-[25.5px]"
          />
        </a>
      </div>

      <PopupRegistro
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      <Hero />
      <Especificaciones />
      <Eligenos />
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
    </main>
  );
}
