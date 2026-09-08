import toast from "react-hot-toast";
import circleCheck from "../../assets/icons/circle-check.svg";
import triangleAlert from "../../assets/icons/triangle-alert.svg";

export const showToast = (message, isError = false) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } flex justify-center items-center px-4 py-3 gap-2 rounded-full shadow-lg font-medium text-sm border-1 ${
          isError
            ? "bg-dark-brown text-cream border-orange"
            : "bg-blue-overlay text-cream border-orange"
        }`}
      >
        <img
          src={isError ? triangleAlert : circleCheck}
          alt="Ícono de estado"
          className="size-[16px] invert-100"
        />
        {message}
      </div>
    ),
    { duration: 4000, position: "bottom-center" },
  );
};
