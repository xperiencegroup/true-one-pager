import trueLogo from "../../assets/logos/true-developments-cream-v3.svg";
import banner from "../../assets/images/banner-designed.jpg";
import { useInView } from "../../hooks/useInView";
import { Trans, useTranslation } from "react-i18next";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

export default function DesignedForCertainty() {
  const [leftColumnRef, isLeftColumnVisible] = useInView();
  const [rightColumnRef, isRightColumnVisible] = useInView();
  const { t } = useTranslation("dfc");
  const stats = t("stats", { returnObjects: true });
  return (
    <div
      id="true-developments"
      className="flex flex-col w-full justify-center items-center  bg-blue-overlay"
    >
      <div className="flex flex-col w-full min-h-svh justify-center max-lg:items-center max-w-[1280px] px-[20px] sm:px-[44px] sm:px-[90px] py-[60px] gap-[20px] md:gap-[50px]">
        {/* 2 columnas */}
        <div className="flex flex-col lg:flex-row justify-center items-center h-full lg:max-h-[400px] gap-[40px] lg:gap-[35px]">
          {/* Columna izquierda */}
          <div
            ref={leftColumnRef}
            className={`flex flex-col w-full max-w-[450px] justify-center max-lg:items-center gap-[21px] reveal-left ${isLeftColumnVisible ? "is-visible" : ""}`}
          >
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center max-lg:justify-center gap-[10px]">
                {/* Logo - reemplazar con tu asset SVG */}
                <img src={trueLogo} alt="" className="w-full h-[66px]" />
              </div>

              <div className="w-full max-w-[387px]">
                <div className="divider-orange-full" />
              </div>
            </div>

            <h2 className="font-abhaya headline max-lg:text-center text-white uppercase">
              {t("trust")} <br /> {t("tagline")}
            </h2>

            <a
              href="#"
              onClick={() => track(TRACK.home.dfc.mainSiteClick)}
              className="boton w-fit px-[20px] pt-[11px] pb-[12px] rounded-[30px] font-bold text-blue bg-cream whitespace-nowrap"
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
              <Trans
                t={t}
                i18nKey="p2"
                components={{ strong: <strong className="font-bold" /> }}
              />
            </p>

            <p className="paragraph font-light text-white whitespace-pre-line">
              <Trans
                t={t}
                i18nKey="p3"
                components={{ strong: <strong className="font-bold" /> }}
              />
              <br />
            </p>
          </div>
        </div>

        {/* stats */}
        <div className="flex flex-col w-full gap-[50px] py-[20px] max-[1100px]:gap-[30px]">
          <div className="grid grid-cols-[repeat(4,minmax(0,258px))] justify-between gap-[10px] max-[420px]:grid-cols-[repeat(1,minmax(0,258px))] max-[1100px]:grid-cols-[repeat(2,minmax(0,258px))] max-[1100px]:justify-center max-[1100px]:gap-[15px] max-[480px]:grid-cols-2 max-[480px]:gap-[10px]">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col w-full max-w-[258px] p-[20px] gap-[15px] rounded-[20px] border-[1px] border-cream bg-cream/10 max-[480px]:p-[14px] max-[480px]:gap-[10px]"
              >
                <p className="heading text-cream font-bold">{stat.value}</p>
                <p className="paragraph text-cream whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="self-center paragraph text-white w-full max-lg:max-w-[640px] xl:whitespace-pre-line">
            {t("team")}
          </p>
        </div>
      </div>

      {/* Imagen medio banner */}
      <div className="relative flex w-full min-h-svh">
        <img
          src={banner}
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
