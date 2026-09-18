import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";

// InfraestructuraItem.jsx
export default function InfraestructuraItem({ item, delay }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("infra");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col sm:flex-row items-center gap-[20px] reveal-left ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex shrink-0 items-center justify-center size-[60px] rounded-full">
        <img
          src={item.icon}
          alt={t(`${item.key}.title`)}
          className="h-[35px]"
        />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-[5px] sm:gap-[10px]">
        <h4 className="text-naranja font-bold uppercase paragraph leading-[120%] text-orange">
          {t(`${item.key}.title`)}
        </h4>
        <p className="text-white paragraph text-center sm:text-left font-light leading-[120%]">
          {t(`${item.key}.text`)}
        </p>
      </div>
    </div>
  );
}
