import trueLogo from "../../assets/logos/true-developments-cream-v2.svg";
import banner from "../../assets/images/banner-designed.jpg";
import { useInView } from "../../hooks/useInView";

export default function DesignedForCertainty() {
  const [leftColumnRef, isLeftColumnVisible] = useInView();
  const [rightColumnRef, isRightColumnVisible] = useInView();
  return (
    <div
      id="true-developments"
      className="flex flex-col w-full h-svh justify-center items-center  bg-blue-overlay"
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[50svh] justify-center max-lg:items-center max-w-[1280px] gap-[40px] lg:gap-[35px] px-[44px] sm:px-[90px] py-[60px]">
        {/* Columna izquierda */}
        <div
          ref={leftColumnRef}
          className={`flex flex-col w-full max-w-[453px] shrink-0 max-lg:items-center gap-[21px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
        >
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
        <div
          ref={rightColumnRef}
          style={{ transitionDelay: "150ms" }}
          className={`flex flex-col gap-[30px] max-w-[640px] lg:max-w-[589px] reveal-right ${isRightColumnVisible ? "is-visible" : ""}`}
        >
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

      {/* Imagen medio banner */}
      <div className="relative flex w-full h-[50svh]">
        {/* overlay */}
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-blue-overlay/30 to-blue-overlay" />

        <img
          src={banner}
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
