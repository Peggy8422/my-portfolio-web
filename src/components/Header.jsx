import { NavLink, useNavigate } from "react-router-dom";
import { HomeIcon, HeaderChickenOne, HeaderEggsOne, HeaderChickenTwo } from "../assets/images";
import headerStyles from "./Header.module.scss";

export function NavbarMain({bg = 'yellow'}) {
  const navigate = useNavigate();

  return (
    <nav id="navbar" className={`${headerStyles.navBox} ${(bg === 'white' && headerStyles.bg_white)}`}>
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

//Web分類Page 的 Header(米白底)
export function CategoryHeader({title, subtitle}) {
  return (
    <>
      <NavbarMain bg={'white'} />
      <header id="category_header" className={headerStyles.cateHeader}>
        <div className={headerStyles.container}>
          <div className={headerStyles.titleBox_2}>
            <h2 className={headerStyles.title}>{title}</h2>
            <p className={headerStyles.subtitle}>{subtitle}</p>
          </div>
          <div className={headerStyles.decoRow_2}>
            <div className={headerStyles.line}></div>
            <div className={headerStyles.header_eggs_2}>
              <HeaderEggsOne />
            </div>
            <div className={headerStyles.header_chicken_2}>
              <HeaderChickenTwo />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// 黃底大分類標頭
function Header({title, subtitle}) {
  return (
    <>
      <NavbarMain />
      <header id="header" className={headerStyles.commonHeader}>
        <div className={headerStyles.container}>
          <div className={headerStyles.titleBox}>
            <h2 className={headerStyles.title}>{title}</h2>
            <p className={headerStyles.subtitle}>{subtitle}</p>
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