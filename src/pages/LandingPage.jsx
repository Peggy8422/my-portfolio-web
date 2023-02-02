import { FooterDeco } from "../assets/images";
import landingPage from './LandingPage.module.scss';

function Navbar() {
  return (
    <ul className={landingPage.nav}>
      <li className={`${landingPage.navItem} ${landingPage.iLine}`}>
        <a className={landingPage.navLink} href="#page_web">web design</a>
      </li>
      <li className={`${landingPage.navItem} ${landingPage.iLine}`}>
        <a className={landingPage.navLink} href="#page_product">product design</a>
      </li>
      <li className={landingPage.navItem}>
        <a className={landingPage.navLink} href="#page_painting">paintings</a>
      </li>
    </ul>
  );
}

function LandingPage() {
  return (
    <main>
      <div className={landingPage.container}>
        <div className={landingPage.titleBox}>
          <h1 className={landingPage.title}>PORTFOLIO</h1>
          <h6 className={landingPage.subtitle}>___Peggy G.</h6>
        </div>
        {/* navbar */}
        <Navbar />
        <div className={landingPage.footer_chicken_egg}>
          <FooterDeco />
        </div>
      </div>
    </main>
  );
}

export default LandingPage;