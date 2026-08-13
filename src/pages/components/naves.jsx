import naveImage from "../../assets/images/renta-naves.jpg";

export default function Naves() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-blue-overlay">
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] h-[323px] px-[90px] py-[35px] gap-[21px]">
        {/* Imagen con radial */}
        <div className="absolute z-0 flex w-full h-full top-0 left-0">
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

        {/* Titulo y subtitulo */}
        <div className="relative flex flex-col gap-[10px]">
          <h2 className="text-[17.77px] font-light leading-none uppercase">
            Renta o venta
          </h2>
          <h3 className="text-[48px] font-abhaya font-semibold leading-none uppercase">
            Naves build-to-suit
          </h3>
        </div>

        {/* Parrafos */}
        <div className="relative flex flex-col gap-[26px]">
          <p className="max-w-[690px] text-[20px] font-light leading-[140%]">
            Para quien quiere una nave lista para operar, hecha a su medida con
            la flexibilidad de rentarla o comprarla.
          </p>
          <p className="max-w-[690px] text-[20px] font-light leading-[140%]">
            Diseñamos y construimos tu nave a la medida, desde 75,000 hasta
            750,000 pies cuadrados, con andenes, layout e infraestructura
            definidos alrededor de tu proceso. Rentarla o comprarla es la parte
            fácil: decides según lo que más convenga a tu operación.
          </p>
        </div>
      </div>

      {/* Especifiaciones */}
      <div className="w-full max-w-[1280px] h-[614px] border-x"></div>
    </div>
  );
}
