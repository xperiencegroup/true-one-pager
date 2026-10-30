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
  const [tableDesktopRef, isTableDesktopVisible] = useInView();
  const { t } = useTranslation("macrolotes");
  const { t: tHero } = useTranslation("hero");

  const rows = t("sizes.rows", { returnObjects: true });
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
      <div className="relative flex flex-col w-full max-w-[1280px] px-[44px] pt-[50px] pb-[30px] sm:px-[90px] sm:pt-[60px] gap-[20px] sm:gap-[51px]">
        {/* Parte superior */}
        <div className="flex flex-col min-h-[50svh] gap-[30px]">
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
      {/* tables */}
      <div className="flex w-full min-h-svh justify-center items-center px-[90px] py-[60px]">
        <div className="flex flex-col w-full max-w-[1280px] h-full justify-center items-center gap-[24px] overflow-hidden">
          {/* primera tabla */}
          <div className="flex flex-col w-full max-w-[952px] pb-[24px] gap-[24px] border-[1px] rounded-[30px] overflow-hidden border-cream bg-cream/10">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="text-blue bg-cream">
                    <th colSpan={6} className="pt-[10px] paragraph text-center">
                      {t("sizes.title")}
                    </th>
                  </tr>

                  <tr className="text-left bg-cream text-blue">
                    <th className="w-[40px] p-0" />
                    <th className="paragraph py-[10px]">
                      {t("sizes.headers.config")}
                    </th>
                    <th className="paragraph pl-[24px] py-[10px]">
                      {t("sizes.headers.m")}
                    </th>
                    <th className="paragraph pl-[24px] py-[10px]">
                      {t("sizes.headers.ft")}
                    </th>
                    <th className="paragraph pl-[24px] py-[10px]">
                      {t("sizes.headers.buildable")}
                    </th>
                    <th className="w-[40px] p-0" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const line =
                      i < rows.length - 1
                        ? "border-b-[0.5px] border-cream"
                        : "";
                    return (
                      <tr key={row.name} className="text-cream">
                        <td className="w-[40px] p-0" />
                        <td
                          className={`paragraph font-medium py-[8px] whitespace-nowrap ${line}`}
                        >
                          {row.name}
                        </td>
                        <td
                          className={`paragraph pl-[24px] py-[8px] whitespace-nowrap ${line}`}
                        >
                          {row.m}
                        </td>
                        <td
                          className={`paragraph pl-[24px] py-[8px] whitespace-nowrap ${line}`}
                        >
                          {row.ft}
                        </td>
                        <td
                          className={`paragraph pl-[24px] py-[8px] whitespace-nowrap ${line}`}
                        >
                          {row.buildable}
                        </td>
                        <td className="w-[40px] p-0" />
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* text */}
            <p className="paragraph text-cream px-[40px] whitespace-pre-line">
              {t("sizes.note")}
            </p>
          </div>

          {/* segunda tabla */}
          <div className="w-full max-w-[952px] border-[1px] rounded-[30px] overflow-hidden border-cream bg-cream/10">
            <h3 className="py-[20px] paragraph font-bold text-center text-blue bg-cream">
              {t("delivered.title")}
            </h3>

            <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto_1fr] gap-x-[20px] gap-y-[16px] px-[40px] py-[20px] text-cream">
              {orderedDelivered.map((item) => (
                <Fragment key={item.label}>
                  <p className="paragraph font-bold max-w-[194px]">
                    {item.label}
                  </p>
                  <p className="paragraph">{item.value}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* razones */}
      <div className="flex flex-col w-full max-w-[1280px] px-[44px] pt-[50px] pb-[30px] sm:px-[90px] sm:pt-[60px] gap-[40px]">
        {/* Razones */}
        <div className="grid grid-cols-2 gap-[40px]">
          {beneficios.map((beneficio, index) => (
            <BeneficioMacroloteItem
              key={beneficio.id}
              beneficio={beneficio}
              delay={index * 120}
            />
          ))}
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-[15px] min-[660px]:gap-[40px] sm:gap-[44px] animate-hero-3">
          <a
            href="#macrolote"
            onClick={() => track(TRACK.home.hero.cta, { target: "macrolote" })}
            className="boton flex justify-center items-center w-fit h-fit px-[20px] pt-[11px] pb-[12px] rounded-full font-medium text-center bg-orange text-cream hover:cursor-pointer"
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
            className="boton flex justify-center items-center w-fit h-fit px-[20px] pt-[11px] pb-[12px] rounded-full font-medium text-center bg-cream text-blue hover:cursor-pointer"
          >
            {tHero("cta.explore")}
          </a>
        </div>
      </div>
    </div>
  );
}
