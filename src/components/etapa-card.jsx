import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

export default function EtapaCard({ etapa, delay }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("documentamos");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col w-full min-h-[280px] xl:min-h-[427px] justify-start gap-[20px] px-[10px] py-[20px] pt-[30px] rounded-[20px] border-[1.5px] border-cream bg-cream/10 reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex shrink-0 self-center items-center justify-center size-[50px] rounded-full bg-black">
        <img src={etapa.icon} alt="Ícono de la etapa" className="size-[24px]" />
      </div>

      <h4 className="heading h-[105px] font-abhaya font-bold text-center text-white whitespace-pre-wrap uppercase">
        {t(`${etapa.key}.title`)}
      </h4>

      <div className="flex flex-col gap-[30px]">
        <p className="h-full max-h-[66px] paragraph text-left font-light text-white">
          {t(`${etapa.key}.text`)}
        </p>

        <p className="h-full max-h-[66px] paragraph text-left font-medium text-white white">
          {t(`${etapa.key}.kicker`)}
        </p>
      </div>
    </div>
  );
}
