import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CategoryHeader } from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";
import { CardTwo } from "../components/Cards";


function WebCateSection() {
  return (
    <section id="section_cards">
      <div className={pageStyles.container}>
        <div class="row g-5">
          <div class="col-12 col-md-6">
            <CardTwo title={"Asking Board_線上家教問答平台"} imgSrc={"https://picsum.photos/id/236/1000/500"} />
          </div>
          <div class="col-12 col-md-6">
            <CardTwo title={"test2"} imgSrc={"https://picsum.photos/id/236/1000/500"} />
          </div>
          <div class="col-12 col-md-6">
            <CardTwo title={"test3"} imgSrc={"https://picsum.photos/id/236/1000/500"} />
          </div>
          <div class="col-12 col-md-6">
            <CardTwo title={"test4"} imgSrc={"https://picsum.photos/id/236/1000/500"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WebCategoryPage() {
  const [headersInfo, setHeadersInfo] = useState({
    title: '',
    subtitle: ''
  });
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (category) {
      case 'UI_RWD': {
        setHeadersInfo({
          title: 'UI/ RWD切版',
          subtitle: 'UI design · Responsive Web Design'
        });
        break;
      }
      case 'DOM': {
        setHeadersInfo({
          title: '小工具(DOM+API)',
          subtitle: 'Useful tools design by interacting with DOM and fetching data from 3rd place API'
        });
        break;
      }
      case 'React': {
        setHeadersInfo({
          title: 'React 專案',
          subtitle: 'Pojects built with React and its relevant libraries'
        });
        break;
      }
      case 'StaticSite': {
        setHeadersInfo({
          title: '企業官網',
          subtitle: "Enterprise products' introduction site"
        });
        break;
      }
      default: {
        break;
      }
    }
  }, [category]);

  return (
    <>
      <CategoryHeader title={headersInfo.title} subtitle={headersInfo.subtitle} />
      <WebCateSection />
      <Footer />
    </>
  );
}

export default WebCategoryPage;
