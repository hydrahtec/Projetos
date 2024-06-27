'use client';

import './style.min.css';

import { BiSearchAlt } from 'react-icons/bi';

const ButtonLupa = () => {
  const Lupa = () => {
    const inputEl = document.querySelector('#lupa') as HTMLElement;
    inputEl.classList.toggle('style_min_active__RJ0Ed');
  };

  return (
    <>
      <button className='buttonLupa' onClick={Lupa} type="button">
        <BiSearchAlt />
      </button>
    </>
  );
};

export default ButtonLupa;
