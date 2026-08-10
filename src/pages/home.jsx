import Eligenos from "./components/eligenos";
import Especificaciones from "./components/especificaciones";
import Hero from "./components/hero";
import Modelos from "./components/modelos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Especificaciones />
      <Eligenos />
      <Modelos />
    </div>
  );
}
