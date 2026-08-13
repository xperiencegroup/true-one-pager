import trueCream from "../../assets/logos/true-cream.svg";

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
  return (
    <div className="relative flex w-full justify-center bg-blue">
      {/* Botón Logo True */}
      <img
        src={trueCream}
        alt="Logo de True Developments"
        className="absolute w-[21px] h-[30px] -left-[40px] top-1/2 -translate-y-1/2"
      />

      <div className="flex w-full h-[83px] justify-around items-center">
        {buttons.map((button, index) => {
          return (
            <a
              key={index}
              href="#"
              className="flex justify-center items-center h-[43px] px-[16px] pt-[11px] pb-[12px] text-[16px] font-medium text-cream"
            >
              {button.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
