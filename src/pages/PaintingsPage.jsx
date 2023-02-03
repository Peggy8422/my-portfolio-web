import Header from "../components/Header";
import pageStyles from "./Page.module.scss";

function PaintingsPage() {
  return (
    <>
      <Header title={"Paintings"} subtitle={"Oil paintings as amateur"}/>
      <section>
        <p className={pageStyles.tempNoti}>網頁建置中...</p>
      </section>
    </>
  );
}

export default PaintingsPage;