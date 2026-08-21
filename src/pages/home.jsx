import Clientes from "./components/clientes";
import Decoration from "./components/decoration";
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

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      {/* Línea de decoración */}
      <Decoration />

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
