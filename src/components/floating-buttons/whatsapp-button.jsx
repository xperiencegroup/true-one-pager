import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

import whatsappIcon from "../../assets/icons/social/whatsapp.svg";

export default function WhatsappButton() {
  return (
    <div className="fixed z-50 right-0 bottom-0">
      <a
        href="https://wa.me/528184640002"
        target="_blank"
        rel="noopener noreferer"
        onClick={() => track(TRACK.home.whatsapp.float)}
        className="flex size-[52px] justify-center items-center rounded-t-[32.5px] bg-orange"
      >
        <img
          src={whatsappIcon}
          alt={`Ícono de Whatsapp`}
          className="size-[25.5px]"
        />
      </a>
    </div>
  );
}
