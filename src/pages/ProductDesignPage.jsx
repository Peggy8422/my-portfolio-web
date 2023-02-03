import Header from "../components/Header";
import pageStyles from "./Page.module.scss";

function ProductDesignPage() {
  return (
    <>
      <Header title={"Product Design"} subtitle={"Industrial design"}/>
      <section>
        <p className={pageStyles.tempNoti}>網頁建置中...</p>
      </section>
    </>
  );
}

export default ProductDesignPage;