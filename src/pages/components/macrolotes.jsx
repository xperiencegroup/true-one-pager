import { Trans, useTranslation } from "react-i18next";
import BeneficioMacroloteItem from "../../components/beneficio-macrolote-item";
import { useInView } from "../../hooks/useInView";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";
import { Fragment } from "react";
// import { CLICK_AND_XPERIENCE_URL } from "../../const/clickAndXperience";

const beneficios = [
  { id: "control-tiempos", key: "feature1" },
  { id: "valor", key: "feature3" },
  { id: "certidumbre", key: "feature2" },
  { id: "escalabilidad", key: "feature4" },
];

export default function Macrolotes() {
  const [introRef, isIntroVisible] = useInView();
  // const [tableDesktopRef, isTableDesktopVisible] = useInView();
  const { t } = useTranslation("macrolotes");
  const { t: tHero } = useTranslation("hero");

  const delivered = t("delivered.items", { returnObjects: true });
  const half = Math.ceil(delivered.length / 2);
  const orderedDelivered = delivered
    .slice(0, half)
    .flatMap((item, i) => [item, delivered[half + i]].filter(Boolean));

  /*
  const handleConoceMacrolotes = () => {
    track(TRACK.home.popup.clickAndXperience.open, {
      source: "macrolotes",
    });
    window.open(CLICK_AND_XPERIENCE_URL, "_blank", "noopener,noreferrer");
  };
  */
  return (
    <div
      id="macrolotes"
      className="flex flex-col justify-center items-center w-full bg-brown overflow-hidden"
    >
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] px-[20px] sm:px-[44px] py-[50px] sm:px-[90px] sm:py-[60px] gap-[20px] sm:gap-[51px]">
        {/* Parte superior */}
        <div className="flex flex-col min-h-fit gap-[30px]">
          {/* Texto Naves Built to suit */}
          <div
            ref={introRef}
            className={`relative flex flex-col gap-[20px] reveal ${isIntroVisible ? "is-visible" : ""}`}
          >
            <h2 className="headline font-abhaya uppercase">{t("title1")}</h2>
            <h3 className="heading font-akzidenz font-bold uppercase">
              {t("title2")}
            </h3>
            <p className="paragraph font-light whitespace-pre-line">
              {t("intro")}
              <br /> <br />
              {t("description")}
              <br />
              <br />
              <Trans
                t={t}
                i18nKey="description2"
                components={{ strong: <strong className="font-bold" /> }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* tables */}
      <div className="flex w-full min-h-fit justify-center items-center px-[90px] py-[20px] max-md:min-h-0 max-md:px-[40px] max-sm:px-[16px]">
        <div className="flex flex-col w-full max-w-[1280px] h-full justify-center items-center gap-[24px] overflow-hidden max-sm:gap-[16px]">
          {/* segunda tabla */}
          <div className="w-full max-w-[952px] border-[1px] rounded-[30px] overflow-hidden border-cream bg-cream/10 max-sm:rounded-[20px]">
            <h3 className="py-[20px] paragraph font-bold text-center text-blue bg-cream max-sm:py-[14px] max-sm:px-[12px]">
              {t("delivered.title")}
            </h3>

            <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto_1fr] gap-x-[20px] gap-y-[16px] px-[40px] py-[20px] text-cream max-md:px-[16px] max-sm:grid-cols-1 max-sm:gap-y-[4px] max-sm:px-[12px] max-sm:py-[16px]">
              {orderedDelivered.map((item) => (
                <Fragment key={item.label}>
                  <p className="paragraph font-bold max-w-[194px] max-sm:max-w-none">
                    {item.label}
                  </p>
                  <p className="paragraph max-sm:pb-[12px] max-sm:last:pb-0">
                    {item.value}
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* razones */}
      <div className="flex flex-col w-full max-w-[1280px] px-[20px] sm:px-[44px] pt-[50px] pb-[30px] sm:px-[90px] sm:pt-[60px] gap-[40px]">
        {/* Razones */}
        <div className="grid max-[440px]:grid-cols-1 grid-cols-2 gap-[40px]">
          {beneficios.map((beneficio, index) => (
            <BeneficioMacroloteItem
              key={beneficio.id}
              beneficio={beneficio}
              delay={index * 120}
            />
          ))}
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-[15px] min-[660px]:gap-[40px] sm:gap-[44px] animate-hero-3 max-sm:items-stretch max-sm:w-fit max-sm:self-center">
          <a
            href="#macrolote"
            onClick={() => track(TRACK.home.hero.cta, { target: "macrolote" })}
            className="boton flex justify-center items-center w-fit max-sm:w-full h-fit px-[20px] pt-[11px] pb-[12px] rounded-full font-medium text-center cta-colors hover:cursor-pointer"
          >
            <Trans
              i18nKey="cta.land"
              t={tHero}
              components={{
                br: <br className="sm:hidden" />,
              }}
            />
          </a>

          <a
            href="#"
            onClick={() => track(TRACK.home.hero.cta, { target: "maqueta" })}
            className="boton flex justify-center items-center w-fit max-sm:w-full h-fit px-[20px] pt-[11px] pb-[12px] rounded-full font-medium text-center cta-colors hover:cursor-pointer"
          >
            {tHero("cta.explore")}
          </a>
        </div>
      </div>
    </div>
  );
}
