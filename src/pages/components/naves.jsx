import naveImage from "../../assets/images/renta-naves.jpg";
import decoration from "../../assets/icons/decoration/linea-razones.svg";

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
  return (
    <div className="flex flex-col justify-center items-center w-full bg-blue-overlay">
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] px-[44px] py-[50px] sm:px-[90px] sm:py-[60px] gap-[20px] sm:gap-[51px]">
        {/* Imagen con radial */}
        <div className="hidden absolute z-0 flex w-full h-full top-0 left-0">
          {/* Div vacio */}
          <div className="flex-1" />
          <div className="flex-1 relative bg-white">
            {/* Radial */}
            <div className="absolute z-10 size-full bg-radial-[at_50%_50%] from-blue-overlay/4 to-68% to-blue-overlay" />
            <img
              src={naveImage}
              alt="Imagen de Nave"
              className="absolute z-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Parte superior */}
        <div className="flex flex-col gap-[30px]">
          {/* Texto Naves Built to suit */}
          <div className="relative flex flex-col gap-[20px]">
            <h2 className="title max-lg:text-center font-abhaya uppercase">
              Naves build-to-suit
            </h2>
            <h3 className="subtitle max-lg:text-center font-abhaya uppercase">
              En venta o renta
            </h3>
            <p className="paragraph max-lg:text-center font-light">
              Para quien quiere una nave lista para operar, hecha a su medida —
              con la flexibilidad de comprarla ó rentarla.
              <br />
              <br />
              Diseñamos y construimos tu nave a la medida — desde 200,000 hasta
              750,000 pies cuadrados — con la infraestructura, los andenes y el
              layout definidos alrededor de tu proceso.
            </p>
            <p className="subtitle max-lg:text-center font-abhaya uppercase">
              Una nave hecha para tu operación. Cómprala ó réntala.
            </p>
          </div>

          {/* Razones */}
          <div className="flex flex-col gap-[30px]">
            {beneficios.map((beneficio) => {
              return (
                <div
                  key={beneficio.id}
                  className="flex flex-col lg:flex-row gap-[20px]"
                >
                  <img
                    src={decoration}
                    alt=""
                    className="hidden sm:block lg:hidden h-[41px]"
                  />
                  <div
                    key={beneficio.id}
                    className="relative flex flex-col sm:pl-[30px] gap-[15px] sm:before:hidden lg:before:block before:absolute before:left-0 before:top-0 before:h-[30px] lg:before:h-[82.5px] before:w-[1.5px] before:bg-gradient-to-b before:from-orange before:via-orange before:to-transparent"
                  >
                    <h3 className="max-sm:pl-[20px] paragraph text-left sm:text-center lg:text-left text-orange font-bold">
                      {beneficio.title}
                    </h3>

                    <p className="sm:self-center lg:self-start max-w-[590px] lg:max-w-none paragraph text-left sm:text-center lg:text-left font-light text-cream">
                      {beneficio.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* button */}
          <button className="w-fit self-center boton px-[20px] pt-[11px] pb-[12px] font-semibold rounded-[30px] text-cream bg-orange">
            Cotiza tu Nave Industrial a la medida
          </button>
        </div>

        {/* Tabla parte inferior desktop */}
        <div className="max-lg:hidden self-center flex flex-col w-full max-w-[1110px] h-fit px-[20px] py-[30px] gap-[20px] rounded-[20px] border border-cream bg-cream/10">
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
              18,215.34 - 19,849.43 m²
            </div>
          </div>
        </div>

        {/* Tabla mobile y tablet */}
        <div className="lg:hidden flex flex-col w-full px-[20px] py-[30px] gap-[10px] rounded-[20px] border border-cream bg-cream/10">
          <h3 className="subtitle text-center font-abhaya uppercase">
            Tamaños disponibles
          </h3>

          {/* Terreno completo */}
          <div className="flex flex-col w-full gap-[20px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
            <h4 className="paragraph text-center font-bold">
              Nave BTS <br /> Terreno Completo
            </h4>
            <p className="paragraph text-center">779,162 ft²</p>
            <p className="paragraph text-center">72,386.57 m²</p>
          </div>

          {/* Terreno grande */}
          <div className="flex flex-col w-full gap-[20px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
            <h4 className="paragraph text-center font-bold">Nave BTS Grande</h4>
            <p className="paragraph text-center">528,678 ft²</p>
            <p className="paragraph text-center">49,116 m²</p>
          </div>

          {/* Terreno mediana */}
          <div className="flex flex-col w-full gap-[20px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
            <h4 className="paragraph text-center font-bold">
              Nave BTS Mediana
            </h4>
            <p className="paragraph text-center">329,770 ft²</p>
            <p className="paragraph text-center">30,636.64 m²</p>
          </div>

          {/* Terreno chicas */}
          <div className="flex flex-col w-full gap-[20px] px-[29px] sm:px-[60px] py-[12px]">
            <h4 className="paragraph text-center font-bold">Nave BTS Chicas</h4>
            <p className="paragraph text-center">196,068 - 213,657 ft²</p>
            <p className="paragraph text-center">18,215.34 - 19,849.43 m²</p>
          </div>
        </div>
      </div>
    </div>
  );
}
