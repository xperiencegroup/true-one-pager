import { useSearchParams } from "react-router";
import { hasValidLead } from "../lib/leadStorage";
import { CLICK_AND_XPERIENCE_URL } from "../const/clickAndXperience";
import { track } from "../analytics/track";
import { TRACK } from "../analytics/track.constants";

const PARAM = "form";
const VALUE = "maqueta";

export function useXperiencePopup() {
  const [params, setParams] = useSearchParams();

  const isOpen = params.get(PARAM) === VALUE;

  const openXperiencePopup = () => {
    if (hasValidLead()) {
      track(TRACK.home.popup.clickAndXperience.redirect);
      window.open(CLICK_AND_XPERIENCE_URL, "_blank", "noopener,noreferrer");
      return;
    }

    setParams((prev) => {
      prev.set(PARAM, VALUE);
      return prev;
    });
  };

  const closeXperiencePopup = () => {
    setParams(
      (prev) => {
        prev.delete(PARAM);
        return prev;
      },
      { replace: true },
    );
  };

  return { isOpen, openXperiencePopup, closeXperiencePopup };
}
