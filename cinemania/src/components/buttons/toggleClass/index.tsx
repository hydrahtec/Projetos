'use client';

import './style.min.css';

import { BiSearchAlt } from 'react-icons/bi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToggleClass = (props: any) => {
  const toggle = () => {
    const inputEl = document.querySelector(props.elementId) as HTMLElement;
    inputEl.classList.toggle(props.classValue);
  };
  return (
    <>
      <button className="buttonLupa" onClick={toggle} type="button">
        <BiSearchAlt />
      </button>
    </>
  );
};

export default ToggleClass;
