import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import trueCream from "../../assets/logos/true-cream.svg";
import mobileLogoCream from "../../assets/logos/true-developments-cream.svg";

import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

import { navLinks } from "../../const/navigation";
import { socials, whatsappInfo } from "../../const/socials";
import whatsappIcon from "../../assets/icons/social/whatsapp.svg";

const mobilebuttons = [
  ...navLinks.slice(0, 5),
  { id: "nosotros", label: "Nosotros", href: "#nosotros" },
  ...navLinks.slice(5, 6),
];

const socialButtons = [
  ...socials.slice(0, 2),
  { ...whatsappInfo, icon: whatsappIcon },
  ...socials.slice(2, 3),
];

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const visible = useScrollDirection();

  // Bloquear/restaurar el scroll del body cuando el menú abre/cierra
  useEffect(() => {
    if (isNavbarOpen) {
      const scrollY = document.body.style.top;
      document.body.style.position = "fixed";
      document.body.style.top = `${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup por si el componente se desmonta con el menú abierto
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isNavbarOpen]);

  // Cierra el menú, restaura scroll y navega a la sección
  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setIsNavbarOpen(false);

    // Esperamos a que el body deje de estar "fixed" antes de scrollear
    requestAnimationFrame(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, []);

  return (
    <>
      {/* Botón Logo True - fijo, fuera del navbar animado */}
      <div className="fixed z-60 top-0 left-0 w-full h-[83px] flex justify-center pointer-events-none">
        <div className="relative flex flex-row w-full h-full">
          {/* Botones laterales Logo True */}
          <div className="grow flex justify-center items-center h-full">
            <a
              href="#hero"
              className="navbar-enter hidden min-[660px]:flex w-[50px] lg:w-[60px] h-full justify-center items-center px-[10px] pointer-events-auto"
            >
              <img
                src={trueCream}
                alt="Logo de True Developments"
                className="w-[21px] h-[30px]"
              />
            </a>
          </div>

          {/* Fake navlinks */}
          <div className="w-full max-w-[1160px] h-full" />
          {/* Botón Toggle EN/ES */}
          <div className="opacity-0 pointer-events-none grow flex justify-center items-center h-full">
            <button className="navbar-enter hidden min-[660px]:flex w-[50px] lg:w-[60px] h-full justify-center items-center px-[10px] pointer-events-auto">
              <p className="boton font-medium">EN</p>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`navbar-enter fixed top-0 z-50 flex w-full justify-center bg-blue-overlay transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex w-full h-[83px] justify-between min-[660px]:justify-center items-center min-[660px]:justify-center">
          {/* Fake Botón Logo True */}
          <div className="grow hidden min-[660px]:flex justify-center items-center h-full">
            <a
              href="#hero"
              className="hidden min-[660px]:flex w-[60px] justify-center px-[10px] pointer-events-none invisible"
            >
              <img
                src={trueCream}
                alt="Logo de True Developments"
                className="w-[21px] h-[30px] "
              />
            </a>
          </div>

          {/* Navbar buttons */}
          <div className="hidden min-[660px]:flex w-full max-w-[1160px] h-full">
            <div className="relative hidden min-[660px]:flex w-full h-full max-w-[1160px] justify-around items-center max-[660px]:p-[20px] border-x-[0.5px] border-cream/50">
              {navLinks.map((button, index) => {
                return (
                  <a
                    key={index}
                    href={button.href}
                    className="flex text-center justify-center items-center h-[43px] px-[10px] py-[11px] lg:px-[16px] lg:pt-[11px] lg:pb-[12px] boton font-medium text-cream"
                  >
                    {button.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grow hidden min-[660px]:flex justify-center items-center h-full">
            {/* Botón Toggle EN/ES */}
            <button className="max-[660px]:hidden grow px-[10px]">
              <p className="boton font-normal">EN</p>
            </button>
          </div>

          {/* Mobile Logo */}
          <a
            href="#hero"
            className="relative z-10 block min-[660px]:hidden px-[10px]"
          >
            <img
              src={mobileLogoCream}
              alt="Logo de True Developments"
              className="w-[211px] h-[38px] "
            />
          </a>

          {/* Mobile */}
          <button
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className={`relative z-10 block min-[660px]:hidden flex size-[52px] justify-center items-center rounded-full hover:opacity-70 ${isNavbarOpen ? "bg-cream" : "bg-orange"}`}
          >
            <img
              src={isNavbarOpen ? closeIcon : menuIcon}
              alt="Ícono hamburguesa menu"
              className="hover:cursor-pointer"
            />
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {isNavbarOpen && (
              <motion.div
                key="mobile-menu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute min-[660px]:hidden top-0 left-0 z-0 flex flex-col w-full h-[100svh] bg-blue"
              >
                {/* Fake navbar */}
                <div className="shrink-0 w-full h-[clamp(58px,9vh,83px)]" />

                <div className="flex flex-col pt-[clamp(8px,3vh,30px)] pb-[clamp(12px,3.5vh,20px)] px-[clamp(14px,5vw,20px)] gap-[clamp(10px,3vh,15px)]">
                  {mobilebuttons.map((button) => {
                    return (
                      <motion.div
                        key={button.id}
                        variants={itemVariants}
                        className="flex flex-col w-full gap-[clamp(10px,3vh,15px)]"
                      >
                        <button
                          key={button.id}
                          onClick={(e) => handleLinkClick(e, button.href)}
                          className={`text-[14px] min-[370px]:boton text-left font-medium px-[clamp(18px,6vw,30px)] py-[clamp(6px,1.4vh,14px)] ${button.id === "contacto" ? "rounded-full bg-orange" : ""}`}
                        >
                          {button.label}
                        </button>
                        <div
                          className={`w-full divider-white-mobile ${button.id === "contacto" ? "hidden" : ""}`}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social media */}
                <motion.div
                  variants={itemVariants}
                  className="grow flex w-full h-[clamp(72px,14vh,92px)] justify-between p-[clamp(14px,5vw,20px)]"
                >
                  {socialButtons.map((button) => {
                    return (
                      <a
                        key={button.id}
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-end flex size-[clamp(44px,13vw,52px)] justify-center items-center rounded-t-[32px] drop-shadow-xl bg-orange"
                      >
                        <img
                          src={button.icon}
                          alt="Ícono de red social"
                          className="size-[clamp(22px,6.5vw,25.5px)]"
                        />
                      </a>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
