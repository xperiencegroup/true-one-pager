import { useTranslation } from "react-i18next";
import mapaUbicacion from "../../assets/images/ubicacion-mapa.jpg";
import mapaTags from "../../assets/images/ubicacion-mapa-tags.svg";

// Reemplaza con tus iconos reales
import accesoIcon from "../../assets/icons/ubicacion-icons/acceso.svg";
import corredorIcon from "../../assets/icons/ubicacion-icons/corredor.svg";

const conexiones = [
  { id: "acceso", key: "item1", icon: accesoIcon },
  { id: "corredor", key: "item2", icon: corredorIcon },
];
export default function Ubicacion() {
  const { t } = useTranslation("ubicacion");
  return (
    <div
      id="ubicacion"
      className="flex flex-col lg:flex-row w-full min-h-svh bg-blue-overlay"
    >
      {/* Columna izquierda - contenido */}
      <div className="flex flex-col w-full lg:flex-[3] justify-center items-center px-[44px] sm:px-[70px] lg:pl-[90px] lg:pr-[50px] py-[50px] lg:py-[60px]">
        <div className="flex flex-col w-full max-w-[445px] gap-[24px] lg:gap-[20px]">
          {/* Título */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="max-lg:text-center title font-abhaya uppercase leading-none">
              {t("title1")}
            </h2>
            <div className="w-full max-w-[310px]">
              <div className="divider-orange-full" />
            </div>
            <h2 className="max-lg:text-center subtitle font-abhaya uppercase leading-none">
              {t("subtitle1")}
              <br />
              {t("subtitle2")}
            </h2>
          </div>

          {/* Descripción */}
          <p className="paragraph font-light max-w-[445px]">
            {t("description1")}
            <br /> <br />
            {t("description2")}
            <br />
            <br />
            {t("description3")}
          </p>

          {/* Lista de conexiones */}
          <div className="flex flex-col gap-[16px] max-w-[445px]">
            {conexiones.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-center gap-[15px]"
              >
                <div className="flex justify-center items-center shrink-0 size-[60px]">
                  <img
                    src={item.icon}
                    alt={t(`${item.key}.title`)}
                    className="shrink-0 w-fit h-[29px]"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="paragraph font-bold text-orange uppercase">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="paragraph font-light leading-[125%]">
                    {t(`${item.key}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Columna derecha - imagen mapa con degradado */}
      <div className="relative w-full lg:flex-[4] min-h-[50svh] lg:min-h-svh overflow-hidden">
        <img
          src={mapaTags}
          alt={t("alt.map")}
          className="absolute z-20 inset-0 w-full h-full object-cover"
        />
        <img
          src={mapaUbicacion}
          alt={t("alt.map")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Degradado hacia el panel izquierdo */}
        <div className="absolute w-[200px] inset-0 bg-[linear-gradient(to_right,rgba(25,31,53,1)_0%,rgba(25,31,53,0.95)_23%,rgba(25,31,53,0.83)_51%,rgba(25,31,53,0)_100%)]" />
      </div>
    </div>
  );
}
