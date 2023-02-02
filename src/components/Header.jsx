import { NavLink, useNavigate } from "react-router-dom";
import { HomeIcon, HeaderChickenOne, HeaderEggsOne } from "../assets/images";
import headerStyles from "./Header.module.scss";

export function NavbarMain() {
  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <ul className={headerStyles.nav}>
        <li className={headerStyles.navItem}>
          <HomeIcon onClick={() => {
            navigate('home');
          }} />
        </li>
        <li className={`${headerStyles.navItem} ${headerStyles.iLine}`}>
          <NavLink 
            to="/web_design"
            className={({isActive}) => 
              isActive ? headerStyles.active : ''
            }
          >web design</NavLink>
        </li>
        <li className={`${headerStyles.navItem} ${headerStyles.iLine}`}>
          <NavLink 
            to="/product_design"
            className={({isActive}) => 
              isActive ? headerStyles.active : '' 
            }
          >product design</NavLink>
        </li>
        <li className={headerStyles.navItem}>
          <NavLink 
            to="/painting"
            className={({isActive}) => 
              isActive ? headerStyles.active : '' 
            }
          >paintings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <>
      <NavbarMain />
      <header id="header">
        <div className={headerStyles.container}>
          <div className={headerStyles.titleBox}>
            <h2 className={headerStyles.title}>Web Design</h2>
            <p className={headerStyles.subtitle}>UI/Front-end development</p>
          </div>
          <div className={headerStyles.decoRow}>
            <div className={headerStyles.header_chicken_1}>
              <HeaderChickenOne />
            </div>
            <div className={headerStyles.header_eggs_1}>
              <HeaderEggsOne />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;