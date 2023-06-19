import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";
import cardStyles from "../components/Cards.module.scss";
import { CardDecoOne, CardDecoTwo, CardDecoThree, CardDecoFour } from "../assets/images";
import { CardOne } from "../components/Cards";
//卡片背景圖
import ReactBg from "../assets/asking-board-d.jpg";
import StaticSiteBg from "../assets/rainsave-d.jpg";
import UiBg from "../assets/profile_ui.jpg";

function WebSection() {
  return (
    <section id="section_cards">
      <div className={pageStyles.container}>
        <div className="row gy-5">
          {/* 先寫四張卡片 */}
          <div className="col-11 col-md-8 col-lg-7">
            <Link to={'/web_design/web_works?category=UI_RWD'}>
              <CardOne 
                title={"UI/ RWD 切版"} 
                imgSrc={UiBg}
              />
            </Link>
          </div>
          <div className="col-1 d-flex align-items-end">
            <div className={cardStyles.card_deco_illus_1}>
              <CardDecoOne />
            </div>
          </div>
          <div className="col-11 col-md-8 col-lg-7 offset-md-4 offset-lg-5 offset-sm-1">
            <div className={cardStyles.card_deco_illus_2}>
              <CardDecoTwo />
            </div>
            <Link to={'/web_design/web_works?category=DOM'}>
              <CardOne 
                title={"小工具(DOM+API)"} 
                imgSrc={'https://picsum.photos/id/234/1000/500'}
              />
            </Link>
          </div>
          <div className="col-11 col-md-8 col-lg-7">
            <Link to={'/web_design/web_works?category=React'}>
              <CardOne 
                title={"React 專案"}
                imgSrc={ReactBg}
              />
            </Link> 
          </div>
          <div className="col-1 d-flex align-items-end">
            <div className={cardStyles.card_deco_illus_3}>
              <CardDecoThree />
            </div>
          </div>
          <div className="col-1 offset-md-3 offset-lg-4 d-flex align-items-end">
            <div className={cardStyles.card_deco_illus_4}>
              <CardDecoFour />
            </div>
          </div>
          <div class="col-11 col-md-8 col-lg-7">
            <Link to={'/web_design/web_works?category=StaticSite'}>
              <CardOne 
                title={"企業官網"} 
                imgSrc={StaticSiteBg}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebDesignPage() {
  return (
    <>
      <Header title={"Web Design"} subtitle={"UI/Front-end development"} />
      <WebSection />
      <Footer />
    </>
  );
}

export default WebDesignPage;