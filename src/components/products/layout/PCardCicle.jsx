import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AgriculturalContext } from '../../../context/tabs/AgriculturalContext';

export default function PCard({ children, category, id, to = '/' }) {
  const { tab } = useContext(AgriculturalContext);

  if (tab === 1 || tab === category) {
    return (
      <div className="w-[372px] rounded-xl overflow-hidden" id={id}>
        {children}
      </div>
    );
  } else {
    return '';
  }
}
export function CImg({ src }) {
  return (
    <div className="p-4">
      <img
        src={src}
        alt="products"
        className="w-[340px] h-[340px] object-cover rounded-full"
      />
    </div>
  );
}
export function CTitle({ children }) {
  return (
    <div className="px-5 pt-2 text-xl font-semibold capitalize text-center">
      {children}
    </div>
  );
}
export function CDes({ children, className = '' }) {
  return (
    <div
      className={'px-5 pb-4 text-sm lg:text-base py-3 text-center ' + className}
    >
      {children}
    </div>
  );
}
export function Price({ children, className }) {
  return <div className={'flex justify-center ' + className}>{children}</div>;
}
