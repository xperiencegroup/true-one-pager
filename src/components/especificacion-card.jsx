import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

export default function EspecificacionCard({ especificacion, index }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("especificaciones");
  const { key, icon } = especificacion;

  return (
    <div
      ref={ref}
      key={index}
      style={{ transitionDelay: isVisible ? `${index * 250}ms` : "0ms" }}
      className={`flex flex-col w-full max-w-[315px] h-[270px] lg:w-[275px] lg:h-[284px] py-[20px] px-[6px] sm:px-[15px] bg-dark-brown border-2 border-orange rounded-[20px] reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-col w-full h-full justify-center items-center gap-[8px]">
        {/* Icon */}
        <div className="flex shrink-0 size-[50px] justify-center items-center bg-orange rounded-full">
          <img
            src={icon}
            alt={`Ícono de ${especificacion.alt}`}
            className="size-[28px]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full grow justify-between text-center gap-[8px]">
          <h3 className="flex-1 flex h-full justify-center items-center subtitle font-abhaya uppercase whitespace-pre-line">
            {t(`${key}.title`)}
          </h3>
          <h4 className="shrink-0 min-h-[38px] paragraph-bold font-bold whitespace-pre-line">
            {t(`${key}.metric`)}
          </h4>
          <p className="flex-1 paragraph font-light">{t(`${key}.text`)}</p>
        </div>
      </div>
    </div>
  );
}
