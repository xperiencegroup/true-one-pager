import facebookIcon from "../assets/icons/social/facebook.svg";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import instagramIcon from "../assets/icons/social/instagram.svg";

import link from "../assets/icons/link.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

export const socials = [
  {
    id: "facebook",
    icon: facebookIcon,
    href: "https://www.facebook.com/profile.php?id=61585251991992#",
  },
  {
    id: "linkedin",
    icon: linkedinIcon,
    href: "https://www.linkedin.com/company/true-developments/?viewAsMember=true",
  },
  {
    id: "instagram",
    icon: instagramIcon,
    href: "https://www.instagram.com/truedevelopments/?fbclid=IwY2xjawUL0_9wZG9mA2V4dG4DYWVtAjExAGJyaWQRMTdycDVjTWhZMUxjV1BHZzhzcnRjBmFwcF9pZAEwAAEeVHUhT-Kpi_l8XFkUbuVa0FDddOpNUxTROFZu8-Q8E34PzfQJQrLTTWidHeE_aem_ZA-dUZhnyTQZxg9rfAUEzA",
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
    labelKey: "phone.label",
    value: "+52 (81) 1356 1142",
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
