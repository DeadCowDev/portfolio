import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Typography } from "./typography";

interface HeaderSmallProps {
  closeLink: string | (() => void);
  closeAltText: string;
  text: string;
}

export const HeaderSmall: FC<HeaderSmallProps> = ({
  closeLink,
  text,
  closeAltText,
}) => {
  return (
    <div className="z-10 h-[60px] bg-grey-1 sticky top-0 flex justify-start items-center px-4 gap-4">
      <Link
        href={closeLink instanceof Function ? "" : closeLink}
        className="w-6 h-6"
        onClick={(e) => {
          if (closeLink instanceof Function) {
            e.preventDefault();
            closeLink();
          }
        }}
      >
        <button className="w-6 h-6">
          <Image
            src="/icons/close.svg"
            width={24}
            height={24}
            alt={closeAltText}
          />
        </button>
      </Link>
      <Typography variant="smallTextLBold" className="text-white">
        {text}
      </Typography>
    </div>
  );
};
