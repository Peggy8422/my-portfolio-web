import Header from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";
import cardStyles from "../components/Cards.module.scss";
import { CardDecoOne, CardDecoTwo, CardDecoThree, CardDecoFour } from "../assets/images";
import { CardOne } from "../components/Cards";

function WebSection() {
  return (
    <section id="section_cards">
      <div className={pageStyles.container}>
        <div className="row gy-5">
          {/* 先寫四張卡片 */}
          <div className="col-11 col-md-8 col-lg-7">
            <CardOne title={"UI/ RWD 切版"} />
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
            <CardOne title={"小工具(DOM+API)"} />
          </div>
          <div className="col-11 col-md-8 col-lg-7">
            <CardOne title={"React 專案"}/>
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
            <CardOne title={"企業官網"} />
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