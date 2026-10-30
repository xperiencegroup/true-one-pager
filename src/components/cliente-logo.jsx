import { useInView } from "../hooks/useInView";

export default function ClienteLogo({ cliente, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <img
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      src={cliente.logo}
      alt={`Logo ${cliente.name}`}
      className={`h-[26px] md:h-[42px] w-auto max-w-[130px] xl:max-w-[203px] object-contain brightness-0 invert reveal-fade ${isVisible ? "is-visible" : ""}`}
    />
  );
}
