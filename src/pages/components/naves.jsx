import navesBanner from "../../assets/images/naves-banner.jpg";
import BeneficioNaveItem from "../../components/beneficio-nave-item";
import { useInView } from "../../hooks/useInView";

const beneficios = [
  {
    id: "si-la-compras",
    title: "SI LA COMPRAS",
    description:
      "Conviertes el edificio en patrimonio, con control total sobre un activo que se aprecia en el mejor corredor del noreste.",
  },
  {
    id: "si-la-rentas",
    title: "SI LA RENTAS",
    description:
      "Ocupas el edificio sin inmovilizar capital y lo mantienes donde más rinde tu maquinaria, tu inventario, tu gente. Máxima flexibilidad y arranque rápido.",
  },
  {
    id: "a-tu-medida",
    title: "A TU MEDIDA",
    description:
      "Altura libre, andenes, rampas, oficinas, energía y layout definidos alrededor de tu proceso.",
  },
  {
    id: "entrega-programada",
    title: "ENTREGA PROGRAMADA",
    description:
      "Fechas claras desde el contrato. Tu plan de arranque no depende de promesas.",
  },
  {
    id: "terminos-institucionales",
    title: "TÉRMINOS INSTITUCIONALES",
    description: "Contratos en USD, pensados para operaciones de largo plazo.",
  },
  {
    id: "crecimiento-previsto",
    title: "CRECIMIENTO PREVISTO",
    description: "Naves preparadas para expansión dentro del mismo parque.",
  },
];

export default function Naves() {
  const [introRef, isIntroVisible] = useInView();
  const [ctaTextRef, isCtaTextVisible] = useInView();
  const [tableDesktopRef, isTableDesktopVisible] = useInView();
  const [tableMobileRef, isTableMobileVisible] = useInView();
  return (
    <div
      id="naves"
      className="flex flex-col justify-center items-center w-full bg-blue-overlay"
    >
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] px-[44px] pt-[50px] pb-[30px] sm:px-[90px] sm:pt-[60px] gap-[20px] sm:gap-[51px]">
        {/* Parte superior */}
        <div className="flex flex-col min-h-svh gap-[30px]">
          {/* Texto Naves Built to suit */}
          <div
            ref={introRef}
            className={`relative flex flex-col gap-[20px] reveal ${isIntroVisible ? "is-visible" : ""}`}
          >
            <h2 className="title font-abhaya uppercase">Naves build-to-suit</h2>
            <h3 className="subtitle font-abhaya uppercase">En venta o renta</h3>
            <p className="paragraph font-light">
              Para quien quiere una nave lista para operar, hecha a su medida —
              con la flexibilidad de comprarla ó rentarla.
              <br />
              <br />
              Diseñamos y construimos tu nave a la medida — desde 200,000 hasta
              750,000 pies cuadrados — con la infraestructura, los andenes y el
              layout definidos alrededor de tu proceso.
            </p>
            <p className="subtitle font-abhaya uppercase">
              Una nave hecha para tu operación. Cómprala ó réntala.
            </p>
          </div>

          {/* Razones */}
          <div className="flex flex-col gap-[32px]">
            {beneficios.map((beneficio, index) => (
              <BeneficioNaveItem
                key={beneficio.id}
                beneficio={beneficio}
                delay={index * 120}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex-1 flex flex-col min-h-[50svh] justify-center items-center px-[44px] gap-[20px]">
          {/* Tabla parte inferior desktop */}
          <div
            ref={tableDesktopRef}
            className={`max-md:hidden self-center flex flex-col w-full max-w-[1110px] h-fit px-[20px] pt-[30px] gap-[9px] rounded-[20px] text-cream border border-cream bg-cream/10 reveal-scale ${isTableDesktopVisible ? "is-visible" : ""}`}
          >
            <h3 className="subtitle text-center font-abhaya uppercase">
              Tamaños disponibles
            </h3>
            <div className="grid grid-cols-3">
              <div className="flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                Nave BTS <br /> Terreno Completo
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                779,162 ft²
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                72,386.57 m²
              </div>

              <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                Nave BTS Grande
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                528,678 ft²
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                49,116 m²
              </div>

              <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                Nave BTS Mediana
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                329,770 ft²
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                30,636.64 m²
              </div>

              <div className="h-[81px] flex justify-center items-center border-r py-[10px] border-white/50 paragraph text-center font-bold">
                Nave BTS Chicas
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-white/50 paragraph">
                196,068 - 213,657 ft²
              </div>

              <div className="flex justify-center items-center paragraph">
                18,215.34 - 19,849 m²
              </div>
            </div>
          </div>

          {/* Tabla mobile y tablet */}
          <div
            ref={tableMobileRef}
            className={`md:hidden flex flex-col w-full px-[20px] py-[30px] gap-[10px] rounded-[20px] text-cream border border-cream bg-cream/10 reveal-scale ${isTableMobileVisible ? "is-visible" : ""}`}
          >
            <h3 className="subtitle text-center font-abhaya uppercase">
              Tamaños disponibles
            </h3>

            {/* Terreno completo */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                Nave BTS <br /> Terreno Completo
              </h4>
              <p className="paragraph text-center">779,162 ft²</p>
              <p className="paragraph text-center">72,386.57 m²</p>
            </div>

            {/* Terreno grande */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                Nave BTS Grande
              </h4>
              <p className="paragraph text-center">528,678 ft²</p>
              <p className="paragraph text-center">49,116 m²</p>
            </div>

            {/* Terreno mediana */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                Nave BTS Mediana
              </h4>
              <p className="paragraph text-center">329,770 ft²</p>
              <p className="paragraph text-center">30,636.64 m²</p>
            </div>

            {/* Terreno chicas */}
            <div className="flex flex-col w-full gap-[10px] px-[29px] sm:px-[60px] py-[12px]">
              <h4 className="paragraph text-center font-bold">
                Nave BTS Chicas
              </h4>
              <p className="paragraph text-center">196,068 - 213,657 ft²</p>
              <p className="paragraph text-center">18,215.34 - 19,849.43 m²</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full h-[28svh] md:h-[50svh] overflow-hidden">
          {/* linear gradient */}
          <div className="absolute z-10 w-full h-full inset-0 bg-linear-to-t from-blue-overlay/60 to-blue-overlay" />
          <img
            src={navesBanner}
            alt="Render Entrada"
            className="absolute z-0 inset-0 w-full h-full object-cover overflow-hidden"
          />

          {/* button */}
          <button
            ref={ctaTextRef}
            className={`relative z-20 flex w-fit self-center boton px-[20px] pt-[11px] pb-[12px] font-medium rounded-[30px] text-cream bg-orange reveal-fade ${isCtaTextVisible ? "is-visible" : ""}`}
          >
            Cotiza tu Nave Industrial a la medida
          </button>
        </div>
      </div>
    </div>
  );
}
