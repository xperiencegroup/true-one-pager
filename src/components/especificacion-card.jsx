import { useInView } from "../hooks/useInView";

export default function EspecificacionCard({ especificacion, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      key={index}
      className={`flex flex-col w-[266px] h-[400px] lg:w-[273px] lg:h-[466px] py-[30px] px-[20px] bg-dark-brown border-2 border-orange rounded-[20px] reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-col justify-center items-center gap-[10px]">
        {/* Icon */}
        <div className="flex size-[92px] justify-center items-center bg-orange rounded-full">
          <img
            src={especificacion.icon}
            alt={`Ícono de ${especificacion.alt}`}
            className="size-[52px]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full text-center gap-[10px]">
          <h3 className="subtitle font-abhaya tracking-wide uppercase whitespace-pre-line">
            {especificacion.title}
          </h3>
          <h4 className="paragraph font-bold tracking-wide whitespace-pre-line">
            {especificacion.subtitle}
          </h4>
          <p className="paragraph font-light">{especificacion.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
