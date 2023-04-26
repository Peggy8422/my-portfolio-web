import { CategoryHeader } from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";
// import cardStyles from "../components/Cards.module.scss";
import { CardTwo } from "../components/Cards";


function WebCateSection() {
  return (
    <section id="section_cards">
      <div className={pageStyles.container}>
        <div class="row g-5">
          <div class="col-12 col-md-6">
            <CardTwo title={"test1"} />
          </div>
          <div class="col-12 col-md-6">
            <CardTwo title={"test2"} />
          </div>
          <div class="col-12 col-md-6">
            <CardTwo title={"test3"} />
          </div>
          <div class="col-12 col-md-6">
            <CardTwo title={"test4"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WebCategoryPage() {
  return (
    <>
      <CategoryHeader title={'UI/ RWD切版'} subtitle={'UI design · Responsive Web Design'} />
      <WebCateSection />
      <Footer />
    </>
  );
}

export default WebCategoryPage;
