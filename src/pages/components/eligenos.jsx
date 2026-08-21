import bgImage from "../../assets/images/eligenos-background.jpg";

import edificioIcon from "../../assets/icons/edificio.svg";
import aguaIcon from "../../assets/icons/agua.svg";
import soporteIcon from "../../assets/icons/soporte.svg";

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
  return (
    <>
      <div className="relative flex justify-center w-full">
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
        <div className="relative flex flex-col lg:flex-row w-full items-center lg:items-start lg:justify-between max-w-[1280px] h-full py-[60px] px-[70px] gap-[40px] lg:gap-[20px] xl:gap-[48px]">
          {/* Left panel */}
          <div className="w-full max-w-[610px] flex flex-col justify-start max-lg:items-center gap-[20px]">
            <h3 className="title max-lg:text-center font-abhaya uppercase">
              No estás eligiendo
              <br className="max-lg:hidden" />
              un espacio industrial. Estás eligiendo
              <br />
              cómo vas a operar.
            </h3>

            <h4 className="subtitle max-lg:text-center text-orange font-abhaya uppercase">
              Elige una vez. <br /> Opera tranquilo por décadas.
            </h4>

            {/* Linea decorativa */}
            <div>
              <div className="divider-orange" />
            </div>

            <p className="paragraph max-lg:text-center">
              Elegir espacio industrial no es comprar metros cuadrados. Es
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
              True Ciénega se diseña alrededor de tu operación - cómo entran tus
              camiones, cómo trabaja tu gente, cómo creces que será cuando llega
              el momento
            </p>
          </div>

          {/* Right panel */}
          <div className="w-full max-w-[680px] lg:w-[453px] flex flex-col items-center lg:items-start gap-[20px]">
            {/* Title */}
            <h3 className="subtitle max-lg:text-center font-abhaya uppercase">
              Aquí no vienes a adaptarte al parque industrial. El parque
              industrial se adapta a ti.
            </h3>

            {RAZONES.map((razon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full lg:w-[453px] h-[104px] justify-start items-center p-[20px] gap-[15px] border-2 rounded-[17px] border-orange bg-blue-overlay"
                >
                  <img
                    src={razon.icon}
                    alt="Ícono correspondiente"
                    className="h-[46px]"
                  />
                  <h4 className="max-w-[318px] paragraph font-bold">
                    {razon.label}
                  </h4>
                </div>
              );
            })}

            {/* Botones */}
            <button className="w-full max-lg:max-w-[350px] boton font-medium text-cream px-[20px] pt-[11px] pb-[12px] rounded-[30px] bg-orange">
              Quiero comprar o rentar una Nave Industrial a la medida
            </button>

            <button className="w-full max-lg:max-w-[350px] boton font-medium text-blue px-[20px] pt-[11px] pb-[12px] rounded-[30px] bg-cream">
              Compra tu Terreno y construye a tu ritmo
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex w-full h-[486px] justify-center items-center bg-black">
        video
      </div>
    </>
  );
}
