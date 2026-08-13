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
        <div className="relative flex w-full justify-between max-w-[1280px] h-full py-[60px] px-[70px] gap-[48px]">
          {/* Left panel */}
          <div className="w-full max-w-[610px] flex flex-col justify-start gap-[20px]">
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

            {/* Linea decorativa */}
            <div>
              <div className="divider-orange" />
            </div>

            <p className="text-[25px] font-light leading-[120%]">
              Elegir espacio industrial no es comprar metros cuadrados. Es
              decidir dónde va a operar tu empresa los próximos diez o veinte
              años.
              <br />
              <br />
              Esa decisión merece certeza: energía disponible desde el primer
              día, agua garantizada, accesos que funcionan, vialidades pensadas
              para tráileres, y un administrador que responde cuando lo
              necesitas. True Ciénega se diseña alrededor de tu operación - cómo
              entran tus camiones, cómo trabaja tu gente, cómo creces que será
              cuando llega el momento
            </p>
          </div>

          {/* Right panel */}
          <div className="w-[453px] flex flex-col gap-[20px]">
            {/* Title */}
            <h3 className="text-[32px] font-abhaya leading-none uppercase">
              Aquí no vienes a adaptarte al parque industrial. El parque
              industrial se adapta a ti.
            </h3>

            {RAZONES.map((razon, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex w-[453px] h-[104px] justify-start items-center p-[20px] gap-[15px] border-2 rounded-[17px] border-orange bg-blue-overlay"
                  >
                    <img
                      src={razon.icon}
                      alt="Ícono correspondiente"
                      className="h-[46px]"
                    />
                    <h4 className="max-w-[318px] text-[24px] font-bold leading-[120%]">
                      {razon.label}
                    </h4>
                  </div>
                </>
              );
            })}

            {/* Botones */}
            <button className="w-full text-[16px] font-medium text-cream px-[20px] pt-[11px] pb-[12px] rounded-[30px] bg-orange">
              Quiero comprar o rentar una Nave Industrial a la medida
            </button>

            <button className="w-full text-[16px] font-medium text-blue px-[20px] pt-[11px] pb-[12px] rounded-[30px] bg-cream">
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
