import { useInView } from "../hooks/useInView";
import decoration from "../assets/icons/decoration/linea-razones.svg";
import { useTranslation } from "react-i18next";

// BeneficioItem.jsx
export default function BeneficioMacroloteItem({ beneficio, delay }) {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation("macrolotes");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-row gap-[15px] reveal-left ${isVisible ? "is-visible" : ""}`}
    >
      <img
        src={decoration}
        className="w-fit h-[41px] brightness-0 invert-100"
      />
      <div className="relative flex flex-col gap-[9px]">
        <h3 className="paragraph text-left text-cream font-bold">
          {t(`${beneficio.key}.title`)}
        </h3>

        <p className="lg:self-start max-w-[590px] lg:max-w-none paragraph text-left lg:text-left font-light text-white">
          {t(`${beneficio.key}.text`)}
        </p>
      </div>
    </div>
  );
}
