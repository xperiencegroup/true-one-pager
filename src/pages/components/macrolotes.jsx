import naveImage from "../../assets/images/renta-naves.jpg";

const beneficios = [
  {
    id: "control-tiempos",
    title: "CONTROL DE TUS TIEMPOS",
    description: "Construyes a tu ritmo.",
  },
  {
    id: "certidumbre",
    title: "CERTIDUMBRE PATRIMONIAL",
    description:
      "Propiedad titulada dentro de un parque profesionalmente administrado.",
  },
  {
    id: "valor",
    title: "PROTECCIÓN DE VALOR",
    description:
      "Activo industrial en un corredor con demanda sostenida y oferta institucional.",
  },
  {
    id: "escalabilidad",
    title: "ESCALABILIDAD REAL",
    description: "Desde tres hectáreas hasta el parque completo.",
  },
];

export default function Macrolotes() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-brown overflow-hidden">
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] px-[90px] py-[60px] gap-[51px]">
        {/* Imagen con radial */}
        <div className="absolute top-1/2 -translate-y-[70%] translate-x-[250%] z-0 flex w-[354px] h-[575px] top-0 left-0">
          {/* Radial */}
          <div className="absolute z-10 size-full bg-radial-[at_50%_50%] from-brown/4 to-68% to-brown" />
          <img
            src={naveImage}
            alt="Imagen de Nave"
            className="absolute z-0 w-full h-full object-cover"
          />
        </div>

        {/* Parte superior */}
        <div className="flex flex-col gap-[30px]">
          {/* Texto Naves Built to suit */}
          <div className="relative flex flex-col gap-[20px]">
            <h2 className="text-[48px] font-abhaya leading-none uppercase">
              MACROLOTES INDUSTRIALES
            </h2>
            <h3 className="text-[32px] font-abhaya leading-none uppercase">
              En venta o renta
            </h3>
            <p className="text-[25px] font-light leading-[120%]">
              Para quien quiere su propio terreno y construir a su ritmo.
              <br />
              Macrolotes urbanizados desde 30,000 m² (3 hectáreas) hasta 150,000
              m² (15 hectáreas), con energía, agua, gas, telecomunicaciones,
              drenaje pluvial y vialidades industriales ya resueltas.
              <br />
              <br />
              Comprar aquí es convertir un gasto operativo en patrimonio. Tu
              operación permanece donde tú decides y tu inmueble se aprecia con
              el corredor más dinámico del noreste.
            </p>
            <p className="text-[32px] font-abhaya leading-[120%] uppercase">
              Compra tu terreno. Construye tu futuro.
            </p>
          </div>

          {/* Razones */}
          <div className="flex flex-col gap-[30px]">
            {beneficios.map((beneficio) => {
              return (
                <div
                  key={beneficio.id}
                  className="relative flex flex-col pl-[30px] gap-[15px] before:absolute before:left-0 before:top-0 before:h-[82.5px] before:w-[1.5px] before:bg-gradient-to-b before:from-white before:via-white before:to-transparent"
                >
                  <h3 className="text-[25px] leading-none text-white font-bold">
                    {beneficio.title}
                  </h3>

                  <p className="text-[25px] font-light leading-[120%] text-white">
                    {beneficio.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* button */}
          <button className="w-fit self-center text-[20px] px-[20px] pt-[11px] pb-[12px] font-semibold leading-none rounded-[30px] text-blue bg-cream">
            Conoce los Macrolotes Industriales disponibles
          </button>
        </div>

        {/* Parte inferior */}
        <div className="self-center flex flex-col w-[1110px] h-fit px-[20px] py-[30px] gap-[20px] rounded-[20px] border border-cream bg-cream/10">
          <h3 className="text-[32px] text-center font-abhaya uppercase">
            Tamaños disponibles
          </h3>
          <div className="grid grid-cols-3">
            <div className="flex justify-center items-center border-r border-b py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Macrolote <br /> Terreno Completo
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 text-[25px]">
              1,620,378 ft²
            </div>

            <div className="flex justify-center items-center py-[10px] border-b border-white/50 text-[25px]">
              150,538 m²
            </div>

            <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Macrolote Grande
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 text-[25px]">
              1,057,636 ft²
            </div>

            <div className="flex justify-center items-center py-[10px] border-b border-white/50 text-[25px]">
              98,257 m²
            </div>

            <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Macrolotes Medianos
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 text-[25px]">
              678,131 - 720,021 ft²
            </div>

            <div className="flex justify-center items-center py-[10px] border-b border-white/50 text-[25px]">
              63,000 - 66,892 m²
            </div>

            <div className="h-[81px] flex justify-center items-center border-r py-[10px] border-white/50 text-[25px] text-center font-bold leading-[120%]">
              Macrolotes Chicos
            </div>

            <div className="flex justify-center items-center py-[10px] border-r border-white/50 text-[25px]">
              337,614 - 401,974 ft²
            </div>

            <div className="flex justify-center items-center text-[25px]">
              31,365 - 37,344.66 m²
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
