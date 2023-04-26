import Header from "../components/Header";
import Footer from "../components/Footer";
import pageStyles from "./Page.module.scss";

function PaintingsPage() {
  return (
    <>
      <Header title={"Paintings"} subtitle={"Oil paintings as amateur"}/>
      <section>
        <p className={pageStyles.tempNoti}>網頁建置中...</p>
      </section>
      <Footer />
    </>
  );
}

export default PaintingsPage;