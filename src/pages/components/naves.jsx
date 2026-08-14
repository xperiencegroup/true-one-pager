import naveImage from "../../assets/images/renta-naves.jpg";

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
      <div className="relative flex flex-col w-full max-w-[1280px] px-[90px] py-[60px] gap-[51px]">
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
            <h2 className="text-[48px] font-abhaya leading-none uppercase">
              Naves build-to-suit
            </h2>
            <h3 className="text-[32px] font-abhaya leading-none uppercase">
              En venta o renta
            </h3>
            <p className="text-[25px] font-light leading-[120%]">
              Para quien quiere una nave lista para operar, hecha a su medida —
              con la flexibilidad de comprarla ó rentarla.
              <br />
              <br />
              Diseñamos y construimos tu nave a la medida — desde 200,000 hasta
              750,000 pies cuadrados — con la infraestructura, los andenes y el
              layout definidos alrededor de tu proceso.
            </p>
            <p className="text-[32px] font-abhaya leading-[120%] uppercase">
              Una nave hecha para tu operación. Cómprala ó réntala.
            </p>
          </div>

          {/* Razones */}
          <div className="flex flex-col gap-[30px]">
            {beneficios.map((beneficio) => {
              return (
                <div
                  key={beneficio.id}
                  className="relative flex flex-col pl-[30px] gap-[15px] before:absolute before:left-0 before:top-0 before:h-[82.5px] before:w-[1.5px] before:bg-gradient-to-b before:from-orange before:via-orange before:to-transparent"
                >
                  <h3 className="text-[25px] leading-none text-orange font-bold">
                    {beneficio.title}
                  </h3>

                  <p className="text-[25px] font-light leading-[120%] text-cream">
                    {beneficio.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* button */}
          <button className="w-fit self-center text-[20px] px-[20px] pt-[11px] pb-[12px] font-semibold leading-none rounded-[30px] text-cream bg-orange">
            Cotiza tu Nave Industrial a la medida
          </button>
        </div>

        {/* Parte inferior */}
        <div className="self-center flex flex-col w-[1110px] h-fit px-[20px] py-[30px] gap-[20px] rounded-[20px] border border-cream bg-cream/10">
          <h3 className="text-[32px] text-center font-abhaya uppercase">
            Tamaños disponibles
          </h3>
          <div className="grid grid-cols-3">
            <div className="flex justify-center items-center border-r border-b py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Nave BTS <br /> Terreno Completo
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 text-[25px]">
              779,162 ft²
            </div>

            <div className="flex justify-center items-center py-[10px] border-b border-white/50 text-[25px]">
              72,386.57 m²
            </div>

            <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Nave BTS Grande
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 text-[25px]">
              528,678 ft²
            </div>

            <div className="flex justify-center items-center py-[10px] border-b border-white/50 text-[25px]">
              49,116 m²
            </div>

            <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Nave BTS Mediana
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 text-[25px]">
              329,770 ft²
            </div>

            <div className="flex justify-center items-center py-[10px] border-b border-white/50 text-[25px]">
              30,636.64 m²
            </div>

            <div className="h-[81px] flex justify-center items-center border-r py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Nave BTS Chicas
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-white/50 text-[25px]">
              196,068 - 213,657 ft²
            </div>

            <div className="flex justify-center items-center text-[25px]">
              18,215.34 - 19,849.43 m²
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
