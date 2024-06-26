import Link from 'next/link';
import style from './style.min.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';
import Lupa from '../buttons/lupa';
import ListArrow from '../buttons/listArrow';

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div id={style.logo}>
        <BiSolidCameraMovie />
        <h2 className={style.logo_title}>Cinemania</h2>
        <ul id={style.menu}>
          <li>
            <Link href={'/'}>Inicio</Link>
          </li>
          <li>
            <Link href={'/'}>Filmes</Link>
          </li>
          <li className={style.block}>
            <Link href={'/'}>Series</Link>
          </li>
          <li className={style.genero_list}>
            <div id={style.arrow}>
              <ListArrow
                text="Gênero "
                elementId="#generos"
                classValue="style_min_visibl__z0LRL"
              />
            </div>
            <div id="generos" className={style.generos}>
              <div className={style.selected}>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
              <div>teste sdsf</div>
            </div>
          </li>
        </ul>
      </div>
      <form id={style.search}>
        <Lupa text="" elementId="#lupa" classValue="style_min_active__RJ0Ed" />
        <input id="lupa" className="" type="text" placeholder="Buscar ..." />
      </form>
    </nav>
  );
};

export default NavBar;
