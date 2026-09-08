import bgImage from "../../assets/images/eligenos-background.jpg";

import edificioIcon from "../../assets/icons/edificio.svg";
import aguaIcon from "../../assets/icons/agua.svg";
import soporteIcon from "../../assets/icons/soporte.svg";
import { useInView } from "../../hooks/useInView";

const RAZONES = [
  {
    label: "Tamaños flexibles de naves y macrolotes",
    icon: edificioIcon,
  },
  {
    label: "A la medida de tus necesidades",
    icon: aguaIcon,
  },
  {
    label: "Opción de comprar o rentar",
    icon: soporteIcon,
  },
];

export default function Eligenos() {
  const [leftPanel, leftPanelIsVisible] = useInView();
  const [rightPanel, rightPanelIsVisible] = useInView();
  return (
    <>
      <div className="relative flex justify-center w-full min-h-svh">
        {/* Image */}
        <div className="absolute -z-10 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src={bgImage}
              alt="Imagen de fondo"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute z-0 w-full h-full bg-blue-overlay/89" />

        {/*  Content */}
        <div className="relative flex flex-col w-full items-center justify-center max-w-[1240px] h-full py-[50px] sm:py-[60px] px-[44px] sm:px-[70px] gap-[8px] sm:gap-[20px] lg:gap-[20px] xl:gap-[20px]">
          {/* Left panel */}
          <div
            ref={leftPanel}
            className={`w-full flex flex-col justify-start gap-[8px] sm:gap-[20px] reveal-left ${leftPanelIsVisible ? "is-visible" : ""}`}
          >
            <h3 className="title font-abhaya uppercase">
              No estás eligiendo un espacio industrial. <br />
              Estás eligiendo cómo vas a operar.
            </h3>

            <h4 className="subtitle text-orange font-abhaya uppercase">
              Elige una vez. <br /> Opera tranquilo por décadas.
            </h4>

            {/* Linea decorativa */}
            <div>
              <div className="divider-orange" />
            </div>

            <p className="paragraph">
              Elegir espacio industrial no es comprar metros cuadrados; es
              decidir dónde va a operar tu empresa los próximos diez o veinte
              años.
              <br />
              <br />
              Esa decisión merece certeza: energía disponible desde el primer
              día, agua garantizada, accesos que funcionan, vialidades pensadas
              para tráileres, y un administrador que responde cuando lo
              necesitas.
              <br />
              <br />
              True Ciénega se diseña alrededor de tu operación cómo entran tus
              camiones, cómo trabaja tu gente, cómo creces que será cuando llega
              el momento
            </p>
          </div>

          {/* Right panel */}
          <div
            ref={rightPanel}
            className={`w-full flex flex-col gap-[8px] sm:gap-[20px] reveal-right ${rightPanelIsVisible ? "is-visible" : ""}`}
          >
            {/* Title */}
            <h3 className="w-full subtitle font-abhaya uppercase">
              FLEXIBILIDAD REAL
            </h3>

            <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-[10px] sm:gap-[30px]">
              {RAZONES.map((razon, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row sm:flex-col w-full max-w-[346px] h-fit sm:h-[152px] sm:justify-center items-center p-[20px] gap-[15px] border-2 rounded-[17px] border-orange bg-white/10 backdrop-blur-sm"
                  >
                    <img
                      src={razon.icon}
                      alt="Ícono correspondiente"
                      className="h-[25px] sm:h-[40px]"
                    />
                    <h4 className="max-w-[318px] paragraph-bold sm:text-center font-bold">
                      {razon.label}
                    </h4>
                  </div>
                );
              })}
            </div>

            <div className="flex w-full flex-col lg:flex-row justify-between items-center pt-[5px] gap-[20px]">
              {/* Botones */}
              <a
                href="#naves"
                className="w-full max-w-[400px] boton font-medium text-cream px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-orange"
              >
                Quiero comprar o rentar una <br className="sm:hidden" /> Nave
                Industrial a la medida
              </a>

              <a
                href="#macrolotes"
                className="w-full max-w-[400px] boton font-medium text-blue px-[20px] pt-[11px] pb-[12px] rounded-[30px] text-center bg-cream"
              >
                Quiero comprar un Macrolote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
