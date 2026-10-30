import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

import clickIcon from "../../assets/icons/click-icon.svg";
import isotipo from "../../assets/logos/true-cream.svg";

export default function ClickAndXperienceButton() {
  return (
    <div className="fixed z-50 right-0 bottom-20">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferer"
        onClick={() => track(TRACK.home.clickAndXperience.float)}
        className="flex w-[68px] h-[52px] justify-center items-center rounded-t-[32.5px] gap-[10px] bg-orange drop-shadow-xl"
      >
        <img src={isotipo} alt={`Isotipo de True`} className="w-fit h-[20px]" />
        <img src={clickIcon} alt={`Click ícono`} className="w-fit h-[20px]" />
      </a>
    </div>
  );
}
