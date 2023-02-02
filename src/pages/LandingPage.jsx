import { Link } from "react-router-dom";
import { FooterDeco } from "../assets/images";
import pageStyles from './Page.module.scss';

function Navbar() {
  return (
    <ul className={pageStyles.nav_L}>
      <li className={`${pageStyles.navItem_L} ${pageStyles.iLine}`}>
        <Link to="/web_design">
          web design
        </Link>
      </li>
      <li className={`${pageStyles.navItem_L} ${pageStyles.iLine}`}>
        <Link to="/product_design">
          product design
        </Link>
      </li>
      <li className={pageStyles.navItem_L}>
        <Link to="/painting">
          paintings
        </Link>
      </li>
    </ul>
  );
}

function LandingPage() {
  return (
    <main>
      <div className={pageStyles.container}>
        <div className={pageStyles.titleBox}>
          <h1 className={pageStyles.title}>PORTFOLIO</h1>
          <h6 className={pageStyles.subtitle}>___Peggy G.</h6>
        </div>
        {/* navbar */}
        <Navbar />
        <div className={pageStyles.footer_chicken_egg}>
          <FooterDeco />
        </div>
      </div>
    </main>
  );
}

export default LandingPage;