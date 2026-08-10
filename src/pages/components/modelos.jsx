import rentaBTS from "../../assets/icons/renta-bts.svg";
import rentaMacrolote from "../../assets/icons/renta-macrolote.svg";

import checkIcon from "../../assets/icons/check.svg";

const modelos = [
  {
    title: "Renta BTS",
    subtitle: "NAVE INDUSTRIAL A LA MEDIDA",
    icon: rentaBTS,
    pros: [
      {
        label: "Menor Inversión Inicial",
      },
      {
        label: "Expansión Rápida",
      },
      {
        label: "Listo para operar",
      },
      {
        label: "Nos adaptamos a tu Operación",
      },
    ],
  },
  {
    title: "Compra macrolote",
    subtitle: "TERRENO INDUSTRIAL \n PARA DESARROLLAR",
    icon: rentaMacrolote,
    pros: [
      {
        label: "Menor Inversión Inicial",
      },
      {
        label: "Expansión Rápida",
      },
      {
        label: "Listo para operar",
      },
      {
        label: "Nos adaptamos a tu Operación",
      },
    ],
  },
];

export default function Modelos() {
  return (
    <div className="flex justify-center items-center w-full h-[535px] bg-brown">
      <div className="flex w-full max-w-[1280px] h-full py-[60px] px-[78px] gap-[56px]">
        {/* Primera columna */}
        <div className="flex flex-col w-full h-full max-w-[330px]">
          <h2 className="text-[36px] font-abhaya leading-none uppercase">
            Elige cómo <br /> quieres crecer
          </h2>

          <p className="text-[20px] font-light leading-[150%] text-white pt-[18px]">
            Dos modelos.
          </p>
          <p className="text-[20px] font-light leading-[150%] text-white">
            Una misma infraestructura.
          </p>
          <p className="text-[20px] font-light leading-[150%] text-white">
            La decisión depende de tu operación.
          </p>

          {/* Linea decorativa */}
          <div className="pt-[36px]">
            <div className="divider" />
          </div>

          <p className="text-[28px] font-semibold font-abhaya leading-none uppercase pt-[43px] pb-[18px] text-cream-second">
            100% del parque <br /> está disponible
          </p>

          <button className="w-fit px-[16px] py-[9px] rounded-full text-[20px] font-bold bg-cream text-brown drop-shadow-md drop-shadow-black/25">
            Elige primero; opera mejor.
          </button>
        </div>

        {/* Modelos */}
        <div className="flex w-full h-full justify-between gap-[50px]">
          {modelos.map((modelo, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-[341px] h-[400px] justify-start items-center px-[32px] py-[48px] gap-[16px] rounded-[23px] bg-cream/10 border border-cream"
              >
                <div className="flex grow flex-col w-full items-center justify-between">
                  {/* Titulo y subtitulo */}
                  <div className="flex flex-col items-center gap-[7px]">
                    <h3 className="text-[24px] font-abhaya font-semibold leading-none uppercase text-cream-second">
                      {modelo.title}
                    </h3>
                    <h3 className="text-center text-[16px] font-light whitespace-pre-line text-cream-second">
                      {modelo.subtitle}
                    </h3>
                  </div>

                  {/* Image */}
                  <img src={modelo.icon} alt={`Ícono de ${modelo.title}`} />
                </div>

                {/* Lista de ventajas */}
                <div className="flex-1 flex flex-col w-full h-full gap-[5px]">
                  {modelo.pros.map((pro, index) => {
                    return (
                      <div className="flex items-center gap-[12px]">
                        <div className="flex justify-center items-center size-[20px]">
                          <img src={checkIcon} alt="Ícono de check" />
                        </div>
                        <p
                          key={index}
                          className="text-[17px] font-light leading-[130%] text-cream-second"
                        >
                          {pro.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
