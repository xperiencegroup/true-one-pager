import Eligenos from "./components/eligenos";
import Especificaciones from "./components/especificaciones";
import Hero from "./components/hero";
import Macrolotes from "./components/macrolotes";
import Modelos from "./components/modelos";
import Naves from "./components/naves";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Especificaciones />
      <Eligenos />
      <Modelos />
      <Naves />
      <Macrolotes />
    </div>
  );
}
