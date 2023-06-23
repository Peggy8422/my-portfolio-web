import { NavbarMain } from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";
import headerStyles from "../components/Header.module.scss";
import {
  HeaderEggsOne,
  HeaderChickenOne,
  ReadMoreDeco,
  GithubIcon,
  CodepenIcon,
} from "../assets/images";

function Header() {
  return (
    <header id="eachwork_header" className={headerStyles.cateHeader}>
      <div className={headerStyles.container}>
        <div className={headerStyles.titleBox_2}>
          <div className={headerStyles.title_2}>React 專案</div>
          <div className={headerStyles.subtitle_2}>作品名稱</div>
        </div>
        <div className={headerStyles.decoRow_3}>
          <div className={headerStyles.header_eggs_2}>
            <HeaderEggsOne />
          </div>
          <div
            className={`${headerStyles.header_chicken_2} ${headerStyles.reverse}`}
          >
            <HeaderChickenOne />
          </div>
        </div>
      </div>
    </header>
  );
}

function SinglePrjSection() {
  return (
    <>
      <div className={pageStyles.container}>
        <div className={pageStyles.relevantLinks}>
          <a className="github" href="">
            <div className={pageStyles.relevant_link_btn}>
              <GithubIcon />
            </div>
          </a>
          <a className="codepen" href="">
            <div className={pageStyles.relevant_link_btn}>
              <CodepenIcon />
            </div>
          </a>
          <a className="github" href="">
            <div className={pageStyles.relevant_link_btn}></div>
          </a>
        </div>
      </div>
      <section id="main_pic" className={pageStyles.section_mainPic}>
        <div className={pageStyles.container}>
          <div className="row">
            {/* <div className="col-12" style={{ position: "relative" }}></div> */}
            <div className="col-12">
              <div className={pageStyles.imgBox}>
                <img
                  src="https://picsum.photos/id/236/1000/500"
                  alt=""
                  className={pageStyles.mainPic}
                />
              </div>
            </div>
            <div className="col-12 d-flex flex-column align-items-center mt-3">
              <div className={pageStyles.readMore}>Read More</div>
              <div className={pageStyles.deco}>
                <ReadMoreDeco />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="description"
        className={`${pageStyles.section_description} mt-3`}
      >
        <div className={pageStyles.container}>
          <div className="row">
            <div className="col-12 py-4">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                posuere massa nec mattis mollis. Mauris nec convallis ante, ac
                semper magna. Integer suscipit convallis metus id luctus.
                Suspendisse aliquam venenatis augue. Duis enim arcu,
                pellentesque ac imperdiet eget, tincidunt a arcu. Aenean mattis
                massa ut vehicula sollicitudin.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="work_pics"></section>
    </>
  );
}

function SinglePrjPage() {
  return (
    <>
      <NavbarMain bg={"white"} />
      <Header />
      <SinglePrjSection />
      <Footer />
    </>
  );
}

export default SinglePrjPage;
