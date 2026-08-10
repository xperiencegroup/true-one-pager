import bgImage from "../../assets/images/eligenos-background.jpg";

import edificioIcon from "../../assets/icons/edificio.svg";
import aguaIcon from "../../assets/icons/agua.svg";
import soporteIcon from "../../assets/icons/soporte.svg";

const RAZONES = [
  {
    label: "Diseñado para crecer",
    description:
      "Infraestructura de primer nivel pensada para operaciones que exigen más.",
    icon: edificioIcon,
  },
  {
    label: "Listo para operar",
    description: "Energía, agua y vialidades listas desde el primer día.",
    icon: aguaIcon,
  },
  {
    label: "Respaldo que responde",
    description: "Un administrador que está cuando lo necesitas.",
    icon: soporteIcon,
  },
];

export default function Eligenos() {
  return (
    <>
      <div className="relative flex justify-center w-full h-[600px]">
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
        <div className="relative flex w-full max-w-[1280px] h-full py-[60px] px-[90px]">
          <div className="flex-1 flex flex-col justify-between gap-[50px]">
            <h3 className="text-[48px] font-abhaya leading-[90%] uppercase">
              No estás eligiendo
              <br />
              un espacio industrial. Estás eligiendo
              <br />
              cómo vas a operar.
            </h3>

            <h4 className="text-[35px] text-orange font-abhaya leading-none uppercase">
              Elige una vez. <br /> Opera tranquilo por décadas.
            </h4>

            <p className="text-[17px] font-light leading-[140%]">
              Elegir espacio industrial no es comprar metros cuadrados. Es
              decidir dónde va a operar tu empresa los próximos veinte años, con
              energía, agua y vialidades garantizadas desde el día uno. True
              Ciénega se diseñó alrededor de tu operación: cómo entran tus
              camiones, cómo trabaja tu gente, cómo creces cuando llegue el
              momento.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-between items-end">
            {RAZONES.map((razon, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex w-[426px] h-[128px] justify-center items-center gap-[35px] border-2 rounded-[17px] border-orange bg-blue-overlay"
                  >
                    <img
                      src={razon.icon}
                      alt="Ícono correspondiente"
                      className="h-[46px]"
                    />
                    <div className="flex flex-col gap-[7px]">
                      <h4 className="text-[24px] font-bold leading-none">
                        {razon.label}
                      </h4>
                      <h4 className="w-full max-w-[250.73px] text-[13px]">
                        {razon.description}
                      </h4>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative flex w-full h-[486px] justify-center items-center bg-black">
        video
      </div>
    </>
  );
}
