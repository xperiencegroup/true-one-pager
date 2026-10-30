import { useTranslation, Trans } from "react-i18next";
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
      className={`flex flex-col w-full max-w-[315px] h-[320px] lg:w-[275px] lg:h-[541px] py-[20px] lg:py-[50px] px-[6px] sm:px-[24px] bg-dark-brown border-2 border-orange rounded-[20px] reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-col w-full h-full justify-center items-center gap-[8px] lg:gap-[30px]">
        {/* Icon */}
        <div className="flex shrink-0 size-[50px] justify-center items-center bg-orange rounded-full">
          <img
            src={icon}
            alt={`Ícono de ${especificacion.alt}`}
            className="size-[28px]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full grow justify-between text-center gap-[8px] lg:gap-[30px]">
          <h3 className="flex lg:h-[110px] justify-center subtitle font-abhaya uppercase whitespace-pre-line">
            {t(`${key}.title`)}
          </h3>
          <h4 className="shrink-0 min-h-[38px] lg:h-[50px] paragraph-bold font-bold whitespace-pre-line">
            {t(`${key}.metric`)}
          </h4>
          <p className="flex-1 paragraph text-center lg:text-left font-light whitespace-pre-line">
            <Trans
              t={t}
              i18nKey={`${key}.text`}
              components={{ strong: <strong className="font-bold" /> }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
