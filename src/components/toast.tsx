import { htmlClass } from "@/utils";
import { FC, useEffect } from "react";
import { Typography } from "./typography";

interface ToastProps {
  close: () => void;
  text: string;
  type: "success" | "error";
}

export const Toast: FC<ToastProps> = ({ close, text, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      close();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      id="toast"
      className={htmlClass(
        "flex items-center justify-between w-full max-w-xs p-4 text-gray-500 rounded-lg shadow gap-4 fixed top-24 right-1/2 translate-x-1/2 xl:right-6 xl:top-[unset] xl:bottom-6 xl:translate-x-0",
        type === "success" ? "bg-green-1" : "bg-red-1"
      )}
      role="alert"
    >
      <Typography variant="smallTextLMedium" className="text-white break-all">
        {text}
      </Typography>
      <button
        onClick={close}
        type="button"
        className="ml-auto shrink-0 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-undo"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};
