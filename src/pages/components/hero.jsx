import backgroundImage from "../../assets/images/hero-background2.jpg";
import trueLogoCream from "../../assets/logos/true-developments-cream.svg";
import Navbar from "./navbar";

import { useTranslation, Trans } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <div
      id="hero"
      className="relative flex flex-col justify-start items-center w-full"
    >
      {/* Overlay */}
      <div className="absolute z-10 inset-0 w-full h-full bg-[#191F35]/80" />

      {/* Image */}
      <div className="absolute z-5 inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={backgroundImage}
            alt="Render de True Developments Ciénega de Flores"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1160px] h-svh min-[660px]:px-[50px] lg:px-[60px] xl:px-0">
        {/* Texto */}
        <div className="flex flex-col w-full h-full gap-[15px] sm:gap-[90px] px-[44px] min-[660px]:px-[30px] pt-[16vh] pb-[20px] min-[660px]:pt-[25vh]">
          {/* Logo */}
          <div className="relative w-full max-w-[267px] sm:w-[335px] h-[60px] animate-hero-1">
            <img
              src={trueLogoCream}
              alt="Logo de True Developments"
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>

          <div className="flex flex-col gap-[30px] animate-hero-2">
            {/* Titulo */}
            <h1 className="subtitle grid-cols-subgridtitle font-abhaya uppercase">
              {t("title")}
            </h1>

            {/* Subtitulo */}
            <h2 className="max-w-[780px] subtitle font-abhaya uppercase">
              {t("subtitle")}
            </h2>

            {/* Description */}
            <p className="max-w-[680px] lg:max-w-[1100px] text-[17px] md:text-[20px] font-light leading-[125%]">
              <Trans
                i18nKey="description"
                t={t}
                components={{
                  strong: <strong className="font-bold" />,
                  nowrap: <span className="whitespace-nowrap" />,
                  br: (
                    <br className="hidden [@media(min-width:660px)_and_(max-width:1023px)]:block min-[1130px]:block" />
                  ),
                }}
              />
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[15px] min-[660px]:gap-[40px] sm:gap-[44px] animate-hero-3">
            <a
              href="#naves"
              className="boton w-full max-w-[400px] px-[20px] pt-[11px] pb-[12px] rounded-full font-medium text-center bg-orange hover:cursor-pointer"
            >
              <Trans
                i18nKey="cta.building"
                t={t}
                components={{
                  br: <br className="sm:hidden" />,
                }}
              />
            </a>

            <a
              href="#macrolotes"
              className="boton w-full max-w-[400px] px-[20px] pt-[11px] pb-[12px] rounded-full font-medium text-center bg-cream text-blue hover:cursor-pointer"
            >
              {t("cta.land")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
