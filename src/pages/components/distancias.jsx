import { useTranslation } from "react-i18next";

import map from "../../assets/images/distances-map.jpg";

export default function Distancias() {
  const { t } = useTranslation("distancias");
  const items = t("items", { returnObjects: true });
  return (
    <div className="w-full bg-brown">
      {/* image */}
      <div className="relative w-full h-svh bg-blue-700">
        {/* overlay gradient */}
        <div className="absolute z-10 inset-0 w-full h-full bg-linear-to-b from-transparent via-transparent via-80% to-brown to-98%" />

        <img
          src={map}
          alt="Mapa de Distancias"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* distances */}
      <div className="flex flex-col w-full min-h-[50svh] justify-center items-center px-[90px] gap-[20px] max-[1200px]:px-[40px] max-[1200px]:py-[60px] max-[640px]:px-[20px]">
        <h2 className="headline font-abhaya text-center uppercase text-white">
          {t("title")}
        </h2>

        <div className="w-full max-w-[1100px] grid grid-cols-4 place-items-center max-[900px]:grid-cols-[repeat(2,minmax(0,248px))] max-[900px]:justify-center min-[900px]:place-content-between gap-y-[30px] max-[1200px]:gap-x-[20px] max-[1200px]:gap-y-[20px] max-[900px]:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.place}
              className="flex flex-col w-full max-w-[248px] h-[119px] px-[10px] py-[15px] gap-[15px] rounded-[20px] border border-[1px] border-cream bg-cream/10 max-[1200px]:h-auto max-[1200px]:min-h-[119px] max-[900px]:max-w-400px"
            >
              <p className="text-cream-second paragraph font-bold">
                {item.distance}
              </p>
              <p className="text-cream-second paragraph whitespace-pre-line">
                <span>{item.place} ·</span> <span>{item.route}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
