'use client';

import './style.min.css';

import { BiSearchAlt } from 'react-icons/bi';

const ButtonLupa = () => {
  const Lupa = () => {
    const inputEl = document.querySelector('#lupa') as HTMLElement;
    inputEl.classList.toggle('');
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
