import Link from 'next/link';
import style from './style.min.module.css';
import { BiArrowFromTop, BiSearchAlt, BiSolidCameraMovie } from 'react-icons/bi';
//import Input from '@/components/Input';

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div id="logo">
        <BiSolidCameraMovie />
        <h2 className="logo_title">Cinemania</h2>
      </div>
      <ul id="menu">
        <li>Navegar</li>
        <li>
          <Link href={'/'}>Inicio</Link>
        </li>
        <li>
          <Link href={'/'}>Filmes</Link>
        </li>
        <li>
          <Link href={'/'}>Series</Link>
        </li>
        <li>
          <Link href={'/'}>Bombando</Link>
        </li>
        <li className="genro">
          <p>
            Gênero <BiArrowFromTop />
          </p>
          <ul>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
          </ul>
        </li>
      </ul>
      <form id="search">
        <label htmlFor="search">
          <BiSearchAlt />
        </label>
        <input type="text" placeholder="Buscar" />
      </form>
    </nav>
  );
};
export default NavBar;
