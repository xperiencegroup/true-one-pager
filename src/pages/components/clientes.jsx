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
  return (
    <div className="flex flex-col w-full">
      {/* Sección 1: Desarrollos propios */}
      <div className="flex flex-col items-center w-full px-[90px] py-[60px] gap-[20px] bg-brown">
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[1100px]">
          <h3 className="font-abhaya text-[48px] leading-none text-white uppercase text-center">
            Clientes en desarrollos
            <br />
            industriales propios
          </h3>
        </div>

        <div className="divider-white" />

        <div className="grid grid-cols-4 gap-x-[18px] gap-y-[18px] items-center justify-items-center">
          {clientesPropios.map((cliente) => (
            <img
              key={cliente.id}
              src={cliente.logo}
              alt={`Logo ${cliente.name}`}
              className="h-[26px] w-auto max-w-[130px] object-contain brightness-0 invert"
            />
          ))}
        </div>
      </div>

      {/* Sección 2: Construcción para terceros */}
      <div className="flex flex-col items-center w-full px-[90px] py-[60px] gap-[20px] bg-orange">
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[1100px]">
          <h3 className="font-abhaya text-[48px] leading-none text-white uppercase text-center">
            CLIENTES DE CONSTRUCCIÓN <br /> INDUSTRIAL PARA TERCEROS
          </h3>
        </div>

        <div className="divider-white" />

        <div className="grid grid-cols-4 gap-x-[80px] gap-y-[18px] items-center justify-items-center">
          {clientesTerceros.map((cliente) => (
            <img
              key={cliente.id}
              src={cliente.logo}
              alt={`Logo ${cliente.name}`}
              className="h-[26px] w-auto max-w-[130px] object-contain brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
