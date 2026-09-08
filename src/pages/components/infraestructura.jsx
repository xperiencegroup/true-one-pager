import infraBanner from "../../assets/images/infra-banner.jpg";
import mapaXL from "../../assets/images/infra-ubicacion.jpg";
import mapaMobile from "../../assets/images/infra-ubicacion-mapa-lg.jpg";
import cuadroNaranjaIcon from "../../assets/icons/cuadro-naranja.svg";
import almacenNaranjaIcon from "../../assets/icons/almacen-naranja.svg";

// icons
import electricidad from "../../assets/icons/electricidad.svg";
import agua from "../../assets/icons/agua.svg";
import fibra from "../../assets/icons/fibra.svg";
import drenaje from "../../assets/icons/drenaje.svg";
import { useInView } from "../../hooks/useInView";
import InfraestructuraItem from "../../components/infraestructura-item";

const infraestructuraData = [
  {
    id: "electrico",
    title: "6,000 KVA",
    description: "Proyecto eléctrico tramitado ante CFE para el parque.",
    icon: electricidad,
  },
  {
    id: "agua",
    title: "Agua garantizada",
    description: "Abastecimiento mediante cisternas.",
    icon: agua,
  },
  {
    id: "gas-fibra",
    title: "Gas natural y fibra óptica",
    description:
      "Preparaciones para gas natural y fibra óptica según tu operación.",
    icon: fibra,
  },
  {
    id: "drenaje",
    title: "Drenaje pluvial",
    description: "Diseñado con canales y pasos.",
    icon: drenaje,
  },
];

export default function Infraestructura() {
  const [leftColumnRef, isLeftColumnVisible] = useInView();
  const [mapRef, isMapVisible] = useInView();

  const [cuadroIzqRef, isCuadroIzqVisible] = useInView();
  const [cuadroDerRef, isCuadroDerVisible] = useInView();
  return (
    <>
      {/* Content */}
      <div
        id="ubicacion"
        className="flex flex-col w-full min-h-svh justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-blue-overlay"
      >
        <div className="flex flex-1 flex-col xl:flex-row w-full max-w-[1280px] justify-center gap-[30px]">
          {/* Columnda izquierda */}
          <div
            ref={leftColumnRef}
            className={`w-full max-w-[660px] flex flex-col gap-[20px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            <h2 className="title font-abhaya leading-none uppercase">
              CERTEZA OPERATIVA; <br />{" "}
              <span className="text-orange">
                Infraestructura <br /> preparada para operar
              </span>
            </h2>

            {/* divider */}
            <div className="w-full max-w-[568px]">
              <div className="divider-orange-full" />
            </div>

            <p className="paragraph font-light leading-[120%]">
              TRUE CIÉNEGA INDUSTRIAL PARK tiene su proyecto eléctrico tramitado
              directamente ante CFE —6,000 KVA para el parque, primera etapa en
              proceso—, agua garantizada con cisternas, fibra óptica con
              redundancia y drenaje pluvial diseñado con canales y pasos que
              protegen tu operación en cualquier temporada.
              <br />
              <br />
              Los accesos, patios de maniobra y vialidades fueron trazados para
              tráfico pesado y circulación fluida de tráileres, con caseta de
              vigilancia, CCTV, accesos controlados y cerca perimetral. <br />
              <br /> Detrás de todo, una administración profesional que
              mantiene, monitorea y responde, porque un parque no se entrega una
              vez: se opera todos los días.
            </p>

            {/* Datos relevantes */}
            <div className="flex flex-col gap-[20px]">
              {infraestructuraData.map((item, index) => (
                <InfraestructuraItem
                  key={item.id}
                  item={item}
                  delay={index * 120}
                />
              ))}
            </div>
          </div>
          {/* Columnda derecha */}
          <a
            ref={mapRef}
            href="https://www.google.com/maps/search/25.875744,+-100.226065?entry=tts&g_ep=EgoyMDI2MDcxMi4wIPu8ASoASAFQAw%3D%3D&skid=1999d13c-392c-4506-b789-b475f6c311d5"
            target="_blank"
            rel="noopener noreferrer"
            className={`self-center flex shrink-0 w-full h-[240px] sm:h-[430px] xl:w-[410px] xl:h-[715px] justify-center items-center rounded-[31px] bg-cream/15 border-solid border-[1px] p-[13px] border-cream/50 reveal-right ${isMapVisible ? "is-visible" : ""}`}
          >
            <div className="relative w-full h-full bg-blue rounded-[18px] overflow-hidden">
              <img
                src={mapaXL}
                alt="Imagen ubicación"
                className="hidden xl:block absolute w-full h-full object-fill"
              />
              <img
                src={mapaMobile}
                alt="Imagen ubicación"
                className="block xl:hidden absolute w-full h-full object-cover object-[80%_15%]"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Flexibilidad y calidad */}
      <div className="relative flex flex-col items-center w-full  min-h-svh bg-blue-overlay">
        <div className="flex flex-1 w-full max-w-[1280px] px-[44px] sm:px-[60px]">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-[22px]">
            {/* cuadro izquierdo */}
            <div
              ref={cuadroIzqRef}
              className={`flex flex-col w-full lg:w-[539px] lg:min-h-[442px] xl:h-[410px] px-[20px] py-[30px] sm:p-[30px] gap-[20px] rounded-[20px] border-solid border-[1px] border-cream bg-cream/10 reveal-scale ${isCuadroIzqVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                <img src={cuadroNaranjaIcon} alt="" className="size-[38px]" />
                <h3 className="subtitle max-sm:text-center font-abhaya text-orange uppercase">
                  Flexibilidad real
                </h3>
              </div>
              {/* Linea decoration */}
              <div className="w-full max-w-[332px]">
                <div className="divider-orange-full" />
              </div>

              <h4 className="paragraph font-bold max-sm:text-center leading-[120%] text-cream">
                El rango más flexible del mercado.
              </h4>

              <p className="paragraph font-light leading-[110%]">
                Pocas veces un mismo parque puede recibir a una empresa que
                necesita 200,000 pies cuadrados en renta ó a otra que quiere
                comprar 15 hectáreas para construir su campus. True Ciénega
                puede.
                <br />
                <br />
                Esa flexibilidad no es un accidente: es la forma en que
                diseñamos el parque para acompañar a las empresas en distintos
                momentos de su crecimiento.
                <br />
                Empiezas rentando y luego compras. Compras tres hectáreas y
                luego te expandes.
                <br />
                <br />
                <span className="font-bold">El parque crece contigo.</span>
              </p>
            </div>

            {/* cuadro derecho */}
            <div
              ref={cuadroDerRef}
              style={{ transitionDelay: "150ms" }}
              className={`flex flex-col lg:w-[539px] lg:min-h-[442px] xl:h-[410px] px-[20px] py-[30px] sm:p-[30px] gap-[20px] rounded-[20px] border-solid border-[1px] border-cream bg-cream/10 reveal-scale ${isCuadroDerVisible ? "is-visible" : ""}`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                <img src={almacenNaranjaIcon} alt="" className="size-[38px]" />
                <h3 className="subtitle font-abhaya text-orange uppercase">
                  Calidad clase A
                </h3>
              </div>
              {/* Linea decoration */}
              <div className="w-full max-w-[332px]">
                <div className="divider-orange-full" />
              </div>

              <h4 className="paragraph max-sm:text-center font-bold leading-[120%] text-cream">
                Construido para durar, diseñado para funcionar.
              </h4>

              <p className="paragraph font-light leading-[110%]">
                Especificaciones Clase A en cada nave: <br />
              </p>
              <ul className="pl-8 paragraph font-light leading-[110%] list-disc">
                <li>Alturas libres generosas</li>
                <li>Andenes y rampas suficientes</li>
                <li>Pisos de alta capacidad de carga</li>
                <li>
                  Iluminación eficiente y layouts que privilegian el flujo sobre
                  el adorno
                </li>
              </ul>

              <p className="paragraph font-light leading-[110%]">
                La calidad no se nota en los renders se nota a los diez años,
                cuando el edificio sigue funcionando como el primer día.
                Construimos con esa vara.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex h-[50svh] w-full bg-red-500">
          {/* linear gradient */}
          <div className="absolute z-10 w-full h-full inset-0 bg-linear-to-t from-blue-overlay/0 to-blue-overlay" />
          <img
            src={infraBanner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
