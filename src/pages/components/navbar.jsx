import { useState } from "react";
import trueCream from "../../assets/logos/true-cream.svg";
import mobileLogoCream from "../../assets/logos/true-developments-cream.svg";

import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

const buttons = [
  {
    id: "propuesta-de-valor",
    label: "Propuesta de Valor",
  },
  {
    id: "naves-macrolotes",
    label: "Naves y Macrolotes",
  },
  {
    id: "ubicacion",
    label: "Ubicación",
  },
  {
    id: "true-cienega",
    label: "¿Por qué True Ciénega?",
  },
  {
    id: "true-developments",
    label: "True Developments",
  },
  {
    id: "contacto",
    label: "Contacto",
  },
];

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="navbar-enter relative flex w-full justify-center bg-blue">
      <div className="flex w-full h-[83px]  justify-between min-[660px]:justify-center lg:justify-around items-center max-[660px]:p-[20px]">
        {/* Botón Logo True */}
        <a href="#hero" className="hidden min-[660px]:block px-[10px]">
          <img
            src={trueCream}
            alt="Logo de True Developments"
            className="w-[21px] h-[30px] "
          />
        </a>

        {/* Mobile Logo */}
        <a href="#hero" className="block min-[660px]:hidden px-[10px]">
          <img
            src={mobileLogoCream}
            alt="Logo de True Developments"
            className="w-[211px] h-[38px] "
          />
        </a>

        {/* Mobile */}
        <button
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className={`block min-[660px]:hidden flex size-[52px] justify-center items-center rounded-full hover:opacity-70 ${isNavbarOpen ? "bg-cream" : "bg-orange"}`}
        >
          <img
            src={isNavbarOpen ? closeIcon : menuIcon}
            alt="Ícono hamburguesa menu"
            className="hover:cursor-pointer"
          />
        </button>

        {/* Navbar buttons */}
        {buttons.map((button, index) => {
          return (
            <a
              key={index}
              href={`#${button.id}`}
              className="hidden min-[660px]:block flex text-center justify-center items-center h-[43px] px-[10px] py-[11px] lg:px-[16px] lg:pt-[11px] lg:pb-[12px] boton font-medium text-cream"
            >
              {button.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
