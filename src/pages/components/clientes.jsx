// Logos - clientes propios
import pepsicoLogo from "../../assets/logos/clientes/pepsico.svg";
import vitroLogo from "../../assets/logos/clientes/vitro.svg";
import nemakLogo from "../../assets/logos/clientes/nemak.svg";
import missionLogo from "../../assets/logos/clientes/mission.svg";
import fictivLogo from "../../assets/logos/clientes/fictiv.svg";
import jwwingoLogo from "../../assets/logos/clientes/jwwingo.svg";
import hagaloLogo from "../../assets/logos/clientes/hagalo.svg";
import gavilanLogo from "../../assets/logos/clientes/gavilan.svg";

// Logos - clientes terceros
import heinekenLogo from "../../assets/logos/clientes/heineken.svg";
import caterpillarLogo from "../../assets/logos/clientes/caterpillar.svg";
import henkelLogo from "../../assets/logos/clientes/henkel.svg";
import polarisLogo from "../../assets/logos/clientes/polaris.svg";
import metalsaLogo from "../../assets/logos/clientes/metalsa.svg";
import hussmannLogo from "../../assets/logos/clientes/hussmann.svg";
import ruhrpumpenLogo from "../../assets/logos/clientes/ruhrpumpen.svg";
import { useInView } from "../../hooks/useInView";
import ClienteLogo from "../../components/cliente-logo";
import { useTranslation } from "react-i18next";

const clientesPropios = [
  { id: "pepsico", logo: pepsicoLogo, name: "Pepsico" },
  { id: "vitro", logo: vitroLogo, name: "Vitro" },
  { id: "nemak", logo: nemakLogo, name: "Nemak" },
  { id: "mission", logo: missionLogo, name: "Mission Foods" },
  { id: "fictiv", logo: fictivLogo, name: "Fictiv" },
  { id: "jwwingo", logo: jwwingoLogo, name: "JW Winco" },
  { id: "hagalo", logo: hagaloLogo, name: "Hágalo" },
  { id: "gavilan", logo: gavilanLogo, name: "Gavilán" },
];

const clientesTerceros = [
  { id: "pepsico-terceros", logo: pepsicoLogo, name: "Pepsico" },
  { id: "heineken", logo: heinekenLogo, name: "Heineken" },
  { id: "caterpillar", logo: caterpillarLogo, name: "Caterpillar" },
  { id: "henkel", logo: henkelLogo, name: "Henkel" },
  { id: "polaris", logo: polarisLogo, name: "Polaris" },
  { id: "metalsa", logo: metalsaLogo, name: "Metalsa" },
  { id: "hussmann", logo: hussmannLogo, name: "Hussmann" },
  { id: "ruhrpumpen", logo: ruhrpumpenLogo, name: "Ruhrpumpen" },
];

export default function Clientes() {
  const [headerRef1, isHeaderVisible1] = useInView();
  const [headerRef2, isHeaderVisible2] = useInView();
  const { t } = useTranslation("clients");
  return (
    <div className="flex flex-col w-full">
      {/* Sección 1: Desarrollos propios */}
      <div className="flex flex-col items-center justify-center w-full min-h-[50svh] px-[44px] sm:px-[90px] py-[60px] gap-[20px] bg-brown">
        <div
          ref={headerRef1}
          className={`flex flex-col items-center gap-[20px] w-full max-w-[1100px] reveal ${isHeaderVisible1 ? "is-visible" : ""}`}
        >
          <h3 className="font-abhaya title text-white uppercase text-center">
            {t("own1")}
            <br />
            {t("own2")}
          </h3>
        </div>

        <div className="divider-white max-w-[1100px]" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[24px] sm:gap-x-[80px] gap-y-[20px] items-center justify-items-center">
          {clientesPropios.map((cliente, index) => (
            <ClienteLogo
              key={cliente.id}
              cliente={cliente}
              delay={index * 60}
            />
          ))}
        </div>
      </div>

      {/* Sección 2: Construcción para terceros */}
      <div className="flex flex-col items-center justify-center w-full min-h-[50svh] px-[44px] sm:px-[90px] py-[60px] gap-[20px] bg-orange">
        <div
          ref={headerRef2}
          className={`flex flex-col items-center gap-[20px] w-full max-w-[1100px] reveal ${isHeaderVisible2 ? "is-visible" : ""}`}
        >
          <h3 className="font-abhaya title text-white uppercase text-center">
            {t("thirdparty1")}
            <br />
            {t("thirdparty2")}
          </h3>
        </div>

        <div className="divider-white max-w-[1100px]" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[24px] sm:gap-x-[80px] gap-y-[18px] items-center justify-items-center">
          {clientesTerceros.map((cliente, index) => (
            <ClienteLogo
              key={cliente.id}
              cliente={cliente}
              delay={index * 60}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
