import trueLogo from "../../assets/logos/true-developments-cream-v2.svg";

export default function DesignedForCertainty() {
  return (
    <div
      id="true-developments"
      className="flex flex-col w-full justify-center items-center px-[44px] sm:px-[90px] py-[60px] bg-blue-overlay"
    >
      <div className="flex flex-col lg:flex-row w-full justify-center max-lg:items-center max-w-[1280px] gap-[40px] lg:gap-[35px]">
        {/* Columna izquierda */}
        <div className="flex flex-col w-full max-w-[453px] shrink-0 max-lg:items-center gap-[21px]">
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center max-lg:justify-center gap-[10px]">
              {/* Logo - reemplazar con tu asset SVG */}
              <img src={trueLogo} alt="" className="w-[358px] h-[63px]" />
            </div>

            <div className="w-full max-w-[387px]">
              <div className="divider-orange-full" />
            </div>
          </div>

          <h2 className="font-abhaya title max-lg:text-center text-white uppercase">
            Designed for <br className="max-lg:hidden" />
            certainty.
          </h2>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-[30px] max-w-[640px] lg:max-w-[589px]">
          <p className="paragraph font-light text-justify text-white">
            True Developments es una desarrolladora inmobiliaria de Monterrey
            con más de 18 años de experiencia desarrollando bodegas, naves y
            parques industriales en México.
            <br />
            Diseñamos, construimos y operamos espacios industriales confiables,
            donde las empresas operan con certeza y las personas y comunidades
            prosperan.
          </p>

          <p className="paragraph font-light text-justify text-white">
            Nuestro portafolio supera los 100,000 m² de propiedades propias
            arrendadas a empresas como PepsiCo, Vitro, Nemak y Mission Foods,
            además de más de 200,000 m² construidos para clientes como HEINEKEN
            México, Caterpillar, Henkel, Polaris y otras compañías líderes.
            <br />
            Construimos pensando en décadas, porque nuestros clientes también.
          </p>
        </div>
      </div>
    </div>
  );
}
