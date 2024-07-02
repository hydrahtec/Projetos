import Link from 'next/link';
import style from './style.min.module.css';

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div id={style.logo}>
        <h2 className={style.logo_title}>Portfolio</h2>
        <ul id={style.menu}>
          <li>
            <Link href={'/'}>Sobre</Link>
          </li>
          <li>
            <Link href={'/'}>Skill</Link>
          </li>
          <li>
            <Link href={'/'}>Projetos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
