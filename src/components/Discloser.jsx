/** @format */

import { useState } from "react";

const Discloser = ({ title, content, isOpen, setIsOpen }) => {
  return (
    <div className='flex flex-col gap-1 bg-orange-100 p-4 w-full max-w-3xl'>
      <button
        type='button'
        className='font-semibold text-xl text-start'
        onClick={() => setIsOpen((crr) => !crr)}>
        {title}
      </button>
      {isOpen && (
        <p className='text-opacity-80 text-black leading-relaxed'>{content}</p>
      )}
    </div>
  );
};

export default Discloser;
