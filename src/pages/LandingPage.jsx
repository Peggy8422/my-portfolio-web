import { FooterDeco } from "../assets/images";
import pageStyles from './Page.module.scss';

function Navbar() {
  return (
    <ul className={pageStyles.nav}>
      <li className={`${pageStyles.navItem} ${pageStyles.iLine}`}>
        <a className={pageStyles.navLink} href="#page_web">web design</a>
      </li>
      <li className={`${pageStyles.navItem} ${pageStyles.iLine}`}>
        <a className={pageStyles.navLink} href="#page_product">product design</a>
      </li>
      <li className={pageStyles.navItem}>
        <a className={pageStyles.navLink} href="#page_painting">paintings</a>
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