import { useInView } from "../hooks/useInView";

export default function EspecificacionCard({ especificacion, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      key={index}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
      className={`flex flex-col w-full max-w-[315px] h-[270px] lg:w-[275px] lg:h-[284px] py-[20px] px-[6px] sm:px-[15px] bg-dark-brown border-2 border-orange rounded-[20px] reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-col w-full h-full justify-center items-center gap-[8px]">
        {/* Icon */}
        <div className="flex shrink-0 size-[50px] justify-center items-center bg-orange rounded-full">
          <img
            src={especificacion.icon}
            alt={`Ícono de ${especificacion.alt}`}
            className="size-[28px]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full grow justify-between text-center gap-[8px]">
          <h3 className="flex-1 h-full subtitle font-abhaya uppercase whitespace-pre-line">
            {especificacion.title}
          </h3>
          <h4 className="shrink-0 min-h-[38px] paragraph-bold font-bold whitespace-pre-line">
            {especificacion.subtitle}
          </h4>
          <p className="flex-1 paragraph font-light">
            {especificacion.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
