import { useTranslation } from "react-i18next";
import navesBanner from "../../assets/images/naves-banner.jpg";
import BeneficioNaveItem from "../../components/beneficio-nave-item";
import { useInView } from "../../hooks/useInView";
import { usePopupStore } from "../../store/usePopupStore";

const beneficios = [
  { id: "buy", key: "buy" },
  { id: "lease", key: "lease" },
  { id: "feature1", key: "feature1" },
  { id: "feature2", key: "feature2" },
  { id: "feature3", key: "feature3" },
  { id: "feature4", key: "feature4" },
];

export default function Naves() {
  const [introRef, isIntroVisible] = useInView();
  const [ctaTextRef, isCtaTextVisible] = useInView();
  const [tableDesktopRef, isTableDesktopVisible] = useInView();
  const [tableMobileRef, isTableMobileVisible] = useInView();
  const openPopup = usePopupStore((state) => state.openPopup);
  const { t } = useTranslation("naves");
  return (
    <div
      id="naves"
      className="flex flex-col justify-center items-center w-full bg-blue-overlay"
    >
      {/* Renta o venta */}
      <div className="relative flex flex-col w-full max-w-[1280px] px-[44px] pt-[50px] pb-[30px] sm:px-[90px] sm:pt-[60px] gap-[20px] sm:gap-[51px]">
        {/* Parte superior */}
        <div className="flex flex-col min-h-svh gap-[50px]">
          {/* Texto Naves Built to suit */}
          <div
            ref={introRef}
            className={`relative flex flex-col gap-[20px] reveal ${isIntroVisible ? "is-visible" : ""}`}
          >
            <h2 className="title font-abhaya uppercase">{t("title1")}</h2>
            <h3 className="subtitle font-abhaya uppercase">{t("title2")}</h3>
            <p className="paragraph font-light">
              {t("intro")}
              <br />
              <br />
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[50px]">
            <p className="w-full max-w-[311px] subtitle font-abhaya uppercase">
              {t("headline")}
            </p>
            {/* Razones */}
            <div className="flex flex-col gap-[32px]">
              {beneficios.map((beneficio, index) => (
                <BeneficioNaveItem
                  key={beneficio.id}
                  beneficio={beneficio}
                  delay={index * 120}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex-1 flex flex-col min-h-[50svh] justify-center items-center px-[44px] gap-[20px]">
          {/* Tabla parte inferior desktop */}
          <div
            ref={tableDesktopRef}
            className={`max-md:hidden self-center flex flex-col w-full max-w-[1110px] h-fit px-[20px] pt-[30px] gap-[9px] rounded-[20px] text-cream border border-cream bg-cream/10 reveal-scale ${isTableDesktopVisible ? "is-visible" : ""}`}
          >
            <h3 className="subtitle text-center font-abhaya uppercase">
              {t("inventory.title")}
            </h3>
            <div className="grid grid-cols-3">
              <div className="flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                {t("inventory.label")}
                <br /> {t("inventory.row1.name")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                {t("inventory.row1.sqft")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                {t("inventory.row1.sqm")}
              </div>

              <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                {t("inventory.row2.name")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                {t("inventory.row2.sqft")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                {t("inventory.row2.sqm")}
              </div>

              <div className="h-[81px] flex justify-center items-center border-r border-b py-[10px] border-white/50 paragraph text-center font-bold">
                {t("inventory.row3.name")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-b border-white/50 paragraph">
                {t("inventory.row3.sqft")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-b border-white/50 paragraph">
                {t("inventory.row3.sqm")}
              </div>

              <div className="h-[81px] flex justify-center items-center border-r py-[10px] border-white/50 paragraph text-center font-bold">
                {t("inventory.row4.name")}
              </div>

              <div className="flex justify-center items-center py-[10px] border-r border-white/50 paragraph">
                {t("inventory.row4.sqft")}
              </div>

              <div className="flex justify-center items-center paragraph">
                {t("inventory.row4.sqm")}
              </div>
            </div>
          </div>

          {/* Tabla mobile y tablet */}
          <div
            ref={tableMobileRef}
            className={`md:hidden flex flex-col w-full px-[20px] py-[30px] gap-[10px] rounded-[20px] text-cream border border-cream bg-cream/10 reveal-scale ${isTableMobileVisible ? "is-visible" : ""}`}
          >
            <h3 className="subtitle text-center font-abhaya uppercase">
              {t("inventory.title")}
            </h3>

            {/* Terreno completo */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                {t("inventory.label")}
                <br /> {t("inventory.row1.name")}
              </h4>
              <p className="paragraph text-center">
                {t("inventory.row1.sqft")}
              </p>
              <p className="paragraph text-center">{t("inventory.row1.sqm")}</p>
            </div>

            {/* Terreno grande */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                {t("inventory.row2.name")}
              </h4>
              <p className="paragraph text-center">
                {t("inventory.row2.sqft")}
              </p>
              <p className="paragraph text-center">{t("inventory.row2.sqm")}</p>
            </div>

            {/* Terreno mediana */}
            <div className="flex flex-col w-full gap-[10px] border-b-[1px] px-[29px] sm:px-[60px] py-[12px] border-cream">
              <h4 className="paragraph text-center font-bold">
                {t("inventory.row3.name")}
              </h4>
              <p className="paragraph text-center">
                {t("inventory.row3.sqft")}
              </p>
              <p className="paragraph text-center">{t("inventory.row3.sqm")}</p>
            </div>

            {/* Terreno chicas */}
            <div className="flex flex-col w-full gap-[10px] px-[29px] sm:px-[60px] py-[12px]">
              <h4 className="paragraph text-center font-bold">
                {t("inventory.row4.name")}
              </h4>
              <p className="paragraph text-center">
                {t("inventory.row4.sqft")}
              </p>
              <p className="paragraph text-center">{t("inventory.row4.sqm")}</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full h-[28svh] md:h-[50svh] overflow-hidden">
          {/* linear gradient */}
          <div className="absolute z-10 w-full h-full inset-0 bg-linear-to-t from-blue-overlay/60 to-blue-overlay" />
          <img
            src={navesBanner}
            alt="Render Entrada"
            className="absolute z-0 inset-0 w-full h-full object-cover overflow-hidden"
          />

          {/* button */}
          <button
            ref={ctaTextRef}
            onClick={() => openPopup("click-and-xperience")}
            className={`relative z-20 flex w-fit self-center boton px-[20px] pt-[11px] pb-[12px] font-medium rounded-[30px] text-cream bg-orange reveal-fade ${isCtaTextVisible ? "is-visible" : ""}`}
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </div>
  );
}
