import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { useTranslation } from "react-i18next";

const preguntasData = [
  { id: "energia", n: 1 },
  { id: "tiempo-nave", n: 2 },
  { id: "crecimiento", n: 3 },
  { id: "rentar-comprar", n: 4 },
  { id: "administracion", n: 5 },
  { id: "moneda", n: 6 },
];

export default function Preguntas() {
  const [openItems, setOpenItems] = useState(() => new Set());

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const [headerRef, isHeaderVisible] = useInView();
  const { t } = useTranslation("faq");

  return (
    <div className="flex flex-col w-full min-h-svh justify-center items-center px-[44px] sm:px-[90px] py-[60px] gap-[30px] bg-brown">
      <div className="flex flex-col w-full max-w-[1110px] gap-[30px]">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex justify-between items-center gap-[5px] reveal ${isHeaderVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-abhaya title leading-none text-white uppercase">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col w-full gap-[30px]">
          {preguntasData.map((item) => {
            const isOpen = openItems.has(item.id);

            return (
              <div key={item.id} className="flex flex-col w-full gap-[10px]">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full text-left cursor-pointer"
                >
                  <span className="font-semibold paragraph text-white pr-[20px]">
                    {t(`q${item.n}`)}
                  </span>

                  <span
                    className={`flex shrink-0 items-center justify-center size-[35px] sm:size-[43px] drop-shadow-xl shadow-black rounded-full ${isOpen ? "bg-orange" : "bg-cream"}`}
                  >
                    {isOpen ? (
                      <div className="w-[14.45px] h-[5.65px] bg-cream" />
                    ) : (
                      <div className="relative w-[14.45px] h-[14.45px]">
                        {/* barra horizontal */}
                        <div className="absolute top-1/2 left-0 w-[14.45px] h-[4px] -translate-y-1/2 bg-orange" />
                        {/* barra vertical */}
                        <div className="absolute left-1/2 top-0 h-[14.45px] w-[4px] -translate-x-1/2 bg-orange" />
                      </div>
                    )}
                  </span>
                </button>

                <div className="w-full h-px bg-white/15" />

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="paragraph leading-[120%] font-extralight whitespace-pre-line text-white">
                      {t(`a${item.n}`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
