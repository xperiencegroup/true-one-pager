import trueLogo from "../../assets/logos/true-developments-cream-v2.svg";
import banner from "../../assets/images/banner-designed.jpg";
import { useInView } from "../../hooks/useInView";
import { useTranslation } from "react-i18next";

export default function DesignedForCertainty() {
  const [leftColumnRef, isLeftColumnVisible] = useInView();
  const [rightColumnRef, isRightColumnVisible] = useInView();
  const { t } = useTranslation("dfc");
  return (
    <div
      id="true-developments"
      className="flex flex-col w-full min-h-svh justify-center items-center  bg-blue-overlay"
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
            {t("trust")} <br /> {t("tagline")}
          </h2>

          <a
            href="#"
            className="w-fit px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-bold text-blue bg-cream"
          >
            {t("cta")}
          </a>
        </div>

        {/* Columna derecha */}
        <div
          ref={rightColumnRef}
          style={{ transitionDelay: "150ms" }}
          className={`flex flex-col gap-[30px] max-w-[640px] lg:max-w-[589px] reveal-right ${isRightColumnVisible ? "is-visible" : ""}`}
        >
          <p className="paragraph font-light text-white">
            {t("p1")}
            <br /> <br />
            {t("p2")}
          </p>

          <p className="paragraph font-light text-white">
            {t("p3")}
            <br />
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
