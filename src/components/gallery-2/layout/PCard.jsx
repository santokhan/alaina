import React, { useContext } from "react";
import { GalleryContext } from "../../../context/tabs/GalleryContext";

export default function PCard({ children, category }) {
  const { tab } = useContext(GalleryContext);

  if (tab === 1 || tab === category) {
    return (
      <div className="w-[380px] h-[380px] bg-white shadow-xl transition-all duration-200 ease-out relative overflow-hidden">
        {children}
      </div>
    );
  } else {
    return "";
  }
}
export function CImg({ src }) {
  return (
    <img src={src} alt="products" className="w-full h-full object-cover" />
  );
}
export function CTitle({ children }) {
  return (
    <div className="px-5 py-4 text-lg font-medium capitalize absolute bottom-0 left-0 z-20 bg-alaina-gray text-white w-full text-center hidden group-hover:block">
      {children && "Commercial Cleaning Service"}
    </div>
  );
}
export function CDes({ children }) {
  return <div className="px-5 pb-4 text-textgray">{children}</div>;
}
