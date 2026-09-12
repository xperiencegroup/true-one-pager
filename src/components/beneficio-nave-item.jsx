import { useInView } from "../hooks/useInView";
import decoration from "../assets/icons/decoration/linea-razones.svg";
import { useTranslation } from "react-i18next";

// BeneficioItem.jsx
export default function BeneficioNaveItem({ beneficio, delay }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("naves");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-row gap-[15px] reveal-left ${isVisible ? "is-visible" : ""}`}
    >
      <img src={decoration} className="w-fit h-[41px]" />
      <div className="relative flex flex-col gap-[9px]">
        <h3 className="paragraph text-left text-orange font-bold">
          {t(`${beneficio.key}.title`)}
        </h3>

        <p className="sm:self-center lg:self-start max-w-[590px] lg:max-w-none paragraph text-left lg:text-left font-light text-cream">
          {t(`${beneficio.key}.text`)}
        </p>
      </div>
    </div>
  );
}
