import { useInView } from "../hooks/useInView";

export default function ClienteLogo({ cliente, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <img
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      src={cliente.logo}
      alt={`Logo ${cliente.name}`}
      className={`h-[26px] w-auto max-w-[130px] object-contain brightness-0 invert reveal-fade ${isVisible ? "is-visible" : ""}`}
    />
  );
}
