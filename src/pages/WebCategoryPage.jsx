import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CategoryHeader } from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";
import { CardTwo } from "../components/Cards";
//works
import { rwdWorks, domApiWorks, reactWorks, staticSiteWorks } from "../works_info/works";

function WebCateSection({ works }) {
  return (
    <section id="section_cards">
      <div className={pageStyles.container}>
        <div class="row g-5">
          {works.map((work, index) => (
            <div class="col-12 col-md-6" key={index}>
              <CardTwo
                title={work.title}
                imgSrc={work.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebCategoryPage() {
  const [headersInfo, setHeadersInfo] = useState({
    title: "",
    subtitle: "",
  });
  const [works, setWorks] = useState([{ title: "", imgSrc: "" }]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (category) {
      case "UI_RWD": {
        setHeadersInfo({
          title: "UI/ RWD切版",
          subtitle: "UI design · Responsive Web Design",
        });
        setWorks(rwdWorks);
        break;
      }
      case "DOM": {
        setHeadersInfo({
          title: "小工具(DOM+API)",
          subtitle:
            "Useful tools design by interacting with DOM and fetching data from 3rd place API",
        });
        setWorks(domApiWorks);
        break;
      }
      case "React": {
        setHeadersInfo({
          title: "React 專案",
          subtitle: "Pojects built with React and its relevant libraries",
        });
        setWorks(reactWorks);
        break;
      }
      case "StaticSite": {
        setHeadersInfo({
          title: "企業官網",
          subtitle: "Enterprise products' introduction site",
        });
        setWorks(staticSiteWorks);
        break;
      }
      default: {
        break;
      }
    }
  }, [category]);
  // useEffect(() => {

  // }, [])

  return (
    <>
      <CategoryHeader
        title={headersInfo.title}
        subtitle={headersInfo.subtitle}
      />
      <WebCateSection works={works} />
      <Footer />
    </>
  );
}

export default WebCategoryPage;
