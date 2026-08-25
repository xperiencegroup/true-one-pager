import { useState } from "react";
import logo from "../../assets/logos/true-cream.svg";

const preguntasData = [
  {
    id: "energia",
    question: "¿El parque ya tiene energía disponible, o es una promesa?",
    answer:
      "El proyecto eléctrico está tramitado directamente ante CFE, con la primera etapa en proceso.\n No es una promesa a futuro, es una gestión ya en marcha.",
  },
  {
    id: "tiempo-nave",
    question: "¿Cuánto tarda una nave build-to-suit?",
    answer:
      "Las fechas de entrega quedan definidas desde el contrato, según el tamaño y las especificaciones de tu nave.",
  },
  {
    id: "crecimiento",
    question: "¿Qué pasa si mi operación crece más rápido de lo previsto?",
    answer:
      "Las naves industriales se diseñan con expansión prevista y puedes adquirir superficie adicional contigua mientras exista disponibilidad.",
  },
  {
    id: "rentar-comprar",
    question: "¿Conviene más rentar o comprar?",
    answer:
      "Depende de tu operación. Rentar libera capital, comprar construye patrimonio. Cuéntanos tu caso y te ayudamos a decidir.",
  },
  {
    id: "administracion",
    question: "¿Quién administra el parque después de la venta o la entrega?",
    answer:
      "True Developments diseña, construye y opera cada proyecto, incluyendo la administración del parque una vez entregado.",
  },
  {
    id: "moneda",
    question: "¿Los contratos son en pesos o en dólares?",
    answer:
      "Los contratos de naves build-to-suit son en USD, pensados para operaciones de largo plazo.",
  },
];

export default function Preguntas() {
  const [openItems, setOpenItems] = useState(() => new Set());

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col w-full justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-brown">
      <div className="flex flex-col w-full max-w-[1110px] gap-[30px]">
        {/* Header */}
        <div className="flex justify-between items-center gap-[5px]">
          <h2 className="font-abhaya title leading-none text-white uppercase">
            Las preguntas
            <br />
            que deberías hacernos
          </h2>
          <div className="shrink-0">
            <img
              src={logo}
              alt=""
              className="w-[30px] sm:w-[58px] smh-[83px]"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col w-full gap-[30px]">
          {preguntasData.map((item) => {
            const isOpen = openItems.has(item.id);

            return (
              <div key={item.id} className="flex flex-col w-full gap-[10px]">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full text-left cursor-pointer"
                >
                  <span className="font-semibold paragraph text-white pr-[20px]">
                    {item.question}
                  </span>

                  <span className="flex shrink-0 items-center justify-center size-[35px] sm:size-[43px] drop-shadow-xl shadow-black rounded-full bg-orange">
                    {isOpen ? (
                      <div className="w-[14.45px] h-[5.65px] bg-cream" />
                    ) : (
                      <div className="relative w-[14.45px] h-[14.45px]">
                        {/* barra horizontal */}
                        <div className="absolute top-1/2 left-0 w-[14.45px] h-[4px] -translate-y-1/2 bg-cream" />
                        {/* barra vertical */}
                        <div className="absolute left-1/2 top-0 h-[14.45px] w-[4px] -translate-x-1/2 bg-cream" />
                      </div>
                    )}
                  </span>
                </button>

                <div className="w-full h-px bg-white/15" />

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="paragraph leading-[120%] font-extralight whitespace-pre-line text-white">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
