import macroBanner from "../../assets/images/macro-banner.jpg";
import BeneficioMacroloteItem from "../../components/beneficio-macrolote-item";
import { useInView } from "../../hooks/useInView";

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
  const [introRef, isIntroVisible] = useInView();
  const [ctaTextRef, isCtaTextVisible] = useInView();
  const [tableDesktopRef, isTableDesktopVisible] = useInView();
  const [tableMobileRef, isTableMobileVisible] = useInView();
  const [ctaMobileRef, isCtaMobileVisible] = useInView();
  return (
    <div className="flex flex-col justify-center items-center w-full bg-brown overflow-hidden">
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] px-[44px] pt-[50px] pb-[30px] sm:px-[90px] sm:pt-[60px] gap-[20px] sm:gap-[51px]">
        {/* Parte superior */}
        <div className="flex flex-col min-h-svh gap-[30px]">
          {/* Texto Naves Built to suit */}
          <div
            ref={introRef}
            className={`relative flex flex-col gap-[10px] reveal ${isIntroVisible ? "is-visible" : ""}`}
          >
            <h2 className="title font-abhaya uppercase">
              MACROLOTES INDUSTRIALES
            </h2>
            <h3 className="subtitle font-abhaya uppercase">En venta o renta</h3>
            <p className="paragraph font-light">
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
            <p className="subtitle font-abhaya uppercase">
              Compra tu terreno. Construye tu futuro.
            </p>
          </div>

          {/* Razones */}
          <div className="flex flex-col gap-[50px]">
            {beneficios.map((beneficio, index) => (
              <BeneficioMacroloteItem
                key={beneficio.id}
                beneficio={beneficio}
                delay={index * 120}
              />
            ))}
          </div>

          {/* button */}
          <button
            ref={ctaTextRef}
            className={`hidden sm:flex w-fit self-center boton px-[20px] pt-[11px] pb-[12px] font-medium rounded-[30px] text-blue bg-cream reveal-fade ${isCtaTextVisible ? "is-visible" : ""}`}
          >
            Conoce los Macrolotes Industriales disponibles
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex-1 flex flex-col min-h-[50svh justify-center items-center px-[44px] gap-[20px]">
          {/* Tabla Parte inferior desktop */}
          <div
            ref={tableDesktopRef}
            className={`max-md:hidden self-center flex flex-col w-full max-w-[1110px] h-fit px-[20px] pt-[20px] gap-[9px] rounded-[20px] border border-cream bg-cream/10 reveal-scale ${isTableDesktopVisible ? "is-visible" : ""}`}
          >
            <h3 className="subtitle text-center font-abhaya uppercase">
              Tamaños disponibles
            </h3>
            <div className="grid grid-cols-3">
              <div className="flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                Macrolote <br /> Terreno Completo
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                1,620,378 ft²
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                150,538 m²
              </div>

              <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                Macrolote Grande
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                1,057,636 ft²
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                98,257 m²
              </div>

              <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                Macrolotes Medianos
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                678,131 - 720,021 ft²
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                63,000 - 66,892 m²
              </div>

              <div className="h-[81px] flex justify-center items-center border-r py-[10px] border-white/50 paragraph text-center font-bold">
                Macrolotes Chicos
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-white/50 paragraph">
                337,614 - 401,974 ft²
              </div>

              <div className="flex justify-center items-center paragraph">
                31,365 - 37,344.66 m²
              </div>
            </div>
          </div>

          {/* Tabla mobile y tablet */}
          <div
            ref={tableMobileRef}
            className={`md:hidden flex flex-col w-full px-[20px] py-[30px] gap-[10px] rounded-[20px] border border-cream bg-cream/10 reveal-scale ${isTableMobileVisible ? "is-visible" : ""}`}
          >
            <h3 className="subtitle text-center font-abhaya uppercase">
              Tamaños disponibles
            </h3>

            {/* Terreno completo */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                Macrolote <br /> Terreno Completo
              </h4>
              <p className="paragraph text-center">1,620,378 ft²</p>
              <p className="paragraph text-center">150,538 m²</p>
            </div>

            {/* Terreno grande */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                Macrolote Grande
              </h4>
              <p className="paragraph text-center">1,057,636 ft²</p>
              <p className="paragraph text-center">98,257 m²</p>
            </div>

            {/* Terreno mediana */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                Macrolote Mediana
              </h4>
              <p className="paragraph text-center">678,131 - 720,021 ft²</p>
              <p className="paragraph text-center">63,000 - 66,892 m²</p>
            </div>

            {/* Terreno chicas */}
            <div className="flex flex-col w-full gap-[10px] px-[29px] sm:px-[60px] py-[12px]">
              <h4 className="paragraph text-center font-bold">
                Macrolote Chicas
              </h4>
              <p className="paragraph text-center">337,614 - 401,974 ft²</p>
              <p className="paragraph text-center">31,365 - 37,344.66 m²</p>
            </div>
          </div>

          {/* button */}
          <button
            ref={ctaMobileRef}
            className={`block sm:hidden w-full self-center boton px-[20px] pt-[11px] pb-[12px] font-medium rounded-[30px] text-center text-blue bg-cream reveal-fade ${isCtaMobileVisible ? "is-visible" : ""}`}
          >
            Conoce los Macrolotes Industriales disponibles
          </button>
        </div>

        <div className="relative w-full h-[28svh] md:h-[50svh] overflow-hidden">
          {/* linear gradient */}
          <div className="absolute z-10 w-full h-full inset-0 bg-linear-to-t from-brown/60 to-brown" />
          <img
            src={macroBanner}
            alt="Render Entrada"
            className="absolute z-0 inset-0 w-full h-full object-cover overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
