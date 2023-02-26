import React, { useContext } from "react";
import { GalleryContext } from "../../../context/tabs/GalleryContext";

export default function PCard({ children, category }) {
  const { tab } = useContext(GalleryContext);

  if (tab === 1 || tab === category) {
    return (
      <div
        className={
          "w-44 sm:w-80 lg:w-[380px] h-44 sm:h-80 lg:h-[380px] " +
          "bg-white shadow-xl transition-all duration-200 ease-out relative overflow-hidden " +
          " hover:scale-95 group"
        }
      >
        {children}
      </div>
    );
  } else {
    return "";
  }
}
export function CImg({ src }) {
  return (
    <img
      src={src}
      alt="products"
      className="w-full h-full object-cover absolute left-0 top-0"
    />
  );
}
export function Effect({ children }) {
  return (
    <div className="w-full h-full bg-alaina-gray/50 relative items-end hidden  group-hover:flex">
      {children}
    </div>
  );
}
export function CTitle({ children }) {
  return (
    <div className="px-5 py-4 text-lg font-medium capitalize z-20 bg-alaina-gray text-white w-full text-center">
      {"Commercial Cleaning Service"}
    </div>
  );
}
export function CDes({ children }) {
  return <div className="px-5 pb-4 text-textgray">{children}</div>;
}
