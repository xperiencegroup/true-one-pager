import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

export default function EtapaCard({ etapa, delay }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("documentamos");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col min-h-[238px] justify-between items-center text-center gap-[15px] px-[15px] py-[20px] rounded-[20px] sm:rounded-[40px] border-[1.5px] border-cream bg-cream/10 reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-1 items-center justify-center size-[50px] rounded-full bg-black">
        <img src={etapa.icon} alt="Ícono de la etapa" className="size-[24px]" />
      </div>

      <h4 className="flex-1 paragraph-bold font-bold text-white whitespace-pre-wrap uppercase lg:max-w-[220px]">
        {t(`${etapa.key}.title`)}
      </h4>

      <p className="h-full max-h-[66px] paragraph max-lg:text-center font-light text-white">
        {t(`${etapa.key}.text`)}
      </p>
    </div>
  );
}
