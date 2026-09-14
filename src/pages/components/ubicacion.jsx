import { useTranslation } from "react-i18next";
import mapaUbicacion from "../../assets/images/ubicacion-mapa.jpg";

// Reemplaza con tus iconos reales
import accesoIcon from "../../assets/icons/ubicacion-icons/acceso.svg";
import corredorIcon from "../../assets/icons/ubicacion-icons/corredor.svg";
import aeropuertoIcon from "../../assets/icons/ubicacion-icons/aeropuerto.svg";
import zonaIcon from "../../assets/icons/ubicacion-icons/zona.svg";
import vecinosIcon from "../../assets/icons/ubicacion-icons/vecinos.svg";
import thumbnailNaves from "../../assets/images/ubicacion-thumbnail.jpg";

const conexiones = [
  { id: "acceso", key: "item1", icon: accesoIcon },
  { id: "corredor", key: "item2", icon: corredorIcon },
  { id: "aeropuerto", key: "item3", icon: aeropuertoIcon },
  { id: "zona", key: "item4", icon: zonaIcon },
  { id: "vecinos", key: "item5", icon: vecinosIcon },
];
export default function Ubicacion() {
  const { t } = useTranslation("ubicacion");
  return (
    <div
      id="ubicacion"
      className="flex flex-col lg:flex-row w-full min-h-svh bg-blue-overlay"
    >
      {/* Columna izquierda - contenido */}
      <div className="flex flex-col w-full lg:flex-[3] justify-center items-center px-[44px] sm:px-[70px] lg:pl-[90px] lg:pr-[50px] py-[50px] lg:py-[60px] gap-[24px] lg:gap-[14px]">
        {/* Título */}
        <div className="flex flex-col gap-[10px]">
          <h2 className="max-lg:text-center title font-abhaya uppercase leading-none">
            {t("title1")} <br />
            {t("title2")}
          </h2>
          <div className="w-full max-w-[310px]">
            <div className="divider-orange-full" />
          </div>
        </div>

        {/* Descripción */}
        <p className="paragraph font-light max-w-[445px]">{t("description")}</p>

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

        {/* Thumbnail inferior */}
        <div className="w-full max-w-[445px] pt-3">
          <img
            src={thumbnailNaves}
            alt={t("alt.thumbnail")}
            className="w-full h-auto rounded-[8px]"
          />
        </div>
      </div>

      {/* Columna derecha - imagen mapa con degradado */}
      <div className="relative w-full lg:flex-[4] min-h-[50svh] lg:min-h-svh overflow-hidden">
        <img
          src={mapaUbicacion}
          alt={t("alt.map")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Degradado hacia el panel izquierdo */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-overlay via-blue-overlay/95 via-2% via-blue-overlay/83 via-5% to-transparent" />
      </div>
    </div>
  );
}
