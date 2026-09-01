import facebookIcon from "../assets/icons/social/facebook.svg";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import instagramIcon from "../assets/icons/social/instagram.svg";

import link from "../assets/icons/link.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

export const socials = [
  {
    id: "face",
    icon: facebookIcon,
    href: "",
  },
  {
    id: "linkedin",
    icon: linkedinIcon,
    href: "",
  },
  {
    id: "instagram",
    icon: instagramIcon,
    href: "",
  },
];

export const contactInfo = [
  {
    id: "web",
    icon: link,
    label: "www.truedevelopments.mx",
    href: "https://www.truedevelopments.mx",
  },
  {
    id: "tel",
    icon: phone,
    label: "Tel. Oficina: +52 (81) 1356 1142",
    href: "tel:+528113561142",
  },
  {
    id: "mail",
    icon: mail,
    label: "info@truedevelopments.mx",
    href: "mailto:info@truedevelopments.mx",
  },
];

export const whatsappInfo = {
  id: "whatsapp",
  icon: whatsapp,
  label: "+52 (81) 8464 0002",
  buttonText: "Enviar WhatsApp",
  href: "https://wa.me/528184640002",
};
