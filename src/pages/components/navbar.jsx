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
      <div className="flex w-full h-[83px] justify-center lg:justify-around items-center">
        {/* Botón Logo True */}
        <a href="#hero" className="px-[10px]">
          <img
            src={trueCream}
            alt="Logo de True Developments"
            className="w-[21px] h-[30px] "
          />
        </a>

        {buttons.map((button, index) => {
          return (
            <a
              key={index}
              href={`#${button.id}`}
              className="flex justify-center items-center h-[43px] px-[10px] py-[11px] lg:px-[16px] lg:pt-[11px] lg:pb-[12px] boton font-medium text-cream"
            >
              {button.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
