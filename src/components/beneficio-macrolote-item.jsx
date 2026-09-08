import { useInView } from "../hooks/useInView";
import decoration from "../assets/icons/decoration/linea-razones.svg";

// BeneficioItem.jsx
export default function BeneficioMacroloteItem({ beneficio, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-row gap-[15px] reveal-left ${isVisible ? "is-visible" : ""}`}
    >
      <img
        src={decoration}
        alt=""
        className="w-fit h-[41px] brightness-0 invert-100"
      />
      <div className="relative flex flex-col gap-[9px]">
        <h3 className="paragraph text-left text-cream font-bold">
          {beneficio.title}
        </h3>

        <p className="lg:self-start max-w-[590px] lg:max-w-none paragraph text-left lg:text-left font-light text-white">
          {beneficio.description}
        </p>
      </div>
    </div>
  );
}
