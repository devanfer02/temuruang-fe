import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/card/article";
import Loading from "../../components/loading/loading";
import Pagination from "../../components/pagination";
import useFetch from "../../hooks/useFetch";
import { Article } from "../../types/type";

export default function ArticlePage() {
  const loc = useLocation()

  const queryParams = new URLSearchParams(loc.search);

  const queryPage = Number(queryParams.get('page')) || 1;

  const { data: articles, loading, error, meta } = useFetch<Article[]>(`${import.meta.env.VITE_API_URL}/api/articles?page=${queryPage}`)

  if (loading) {
    return <Loading />
  }


  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Blog and Articles</h2>
      {articles!.length!! && (
        <>
          <div className="row mb-5">
            <div className="col-md-6">
              <ArticleCard article={articles![0]} />
            </div>
            <div className="col-md-6">
              <ArticleCard article={articles![1]} />
            </div>
          </div>
          <h3 className="mb-4">Other Articles</h3>
          <div className="row">
            {articles!.map(article => (
              <div className="col-md-4 mb-4">
                <ArticleCard article={article} />
              </div>

            ))}
          </div>
          <Pagination length={meta.total_pages} path="/articles" current={queryPage}/>
        </>
      )}
    </div>
  )
}