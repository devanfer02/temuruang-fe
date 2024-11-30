import ArticleCard from "../../../components/card/article";

export default function MainArticle() {
  return (
    <div className="row mb-5">
      <div className="col-md-6">
        <ArticleCard/>
      </div>


      <div className="col-md-6">
        <ArticleCard/>
      </div>
    </div>
  )
}