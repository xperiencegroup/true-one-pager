import { useSearchParams } from "react-router";

const PARAM = "form";
const VALUE = "maqueta";

export function useXperiencePopup() {
  const [params, setParams] = useSearchParams();

  const isOpen = params.get(PARAM) === VALUE;

  const openXperiencePopup = () => {
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
