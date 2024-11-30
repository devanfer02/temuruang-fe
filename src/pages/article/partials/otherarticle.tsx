import ArticleCard from "../../../components/card/article";
import Pagination from "../../../components/pagination";


export default function OtherArticle() {
  return (
    <div className="row">

      <div className="col-md-4 mb-4">
        <ArticleCard />
      </div>


      <div className="col-md-4 mb-4">
        <ArticleCard />
      </div>


      <div className="col-md-4 mb-4">
        <ArticleCard />
      </div>
      <Pagination length={5} path="/articles" />
    </div>
  )
}