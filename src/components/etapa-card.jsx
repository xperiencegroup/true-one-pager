import { useInView } from "../hooks/useInView";

export default function EtapaCard({ etapa, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col min-h-[238px] justify-between items-center text-center gap-[15px] px-[15px] py-[20px] rounded-[40px] border border-cream/50 bg-cream/10 reveal-scale ${isVisible ? "is-visible" : ""}`}
    >
      <div className="flex flex-1 items-center justify-center size-[50px] rounded-full bg-black">
        <img src={etapa.icon} alt="Ícono de la etapa" className="size-[24px]" />
      </div>

      <h4 className="flex-1 paragraph-bold font-bold text-white uppercase lg:max-w-[280px]">
        {etapa.title}
      </h4>

      <p className="flex-1 paragraph max-lg:text-center font-light text-white">
        {etapa.description}
      </p>
    </div>
  );
}
