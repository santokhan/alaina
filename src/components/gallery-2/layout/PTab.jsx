import { useContext } from "react";
import { GalleryContext } from "../../../context/tabs/GalleryContext";

export default function PTabs({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center border-b pt-8 w-full overflow-x-auto overflow-y-hidden whitespace-nowrap">
      {children}
    </div>
  );
}

export function Tab({ children, id }) {
  const { tab, handleTab } = useContext(GalleryContext);

  return (
    <button
      type="button"
      onClick={() => {
        handleTab(id);
      }}
      className={
        id === tab
          ? "text-sky-600 font-medium lg:text-lg mx-4 py-2 border-b-2 border-sky-600 -mb-[1px]"
          : "text-textgray font-medium lg:text-lg mx-4 py-2 border-b-2 border-transparent -mb-[1px]"
      }
    >
      {children}
    </button>
  );
}
