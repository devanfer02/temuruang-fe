import { useParams } from "react-router-dom"
import { Article } from "../../types/type"
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/loading/loading"
import { formatDate } from "../../utils/utils"

export default function DetailArticle() {
  const { id } = useParams()

  const { data: article, loading } = useFetch<Article>(`${import.meta.env.VITE_API_URL}/api/articles/${id}`)

  if (article == null) {
    return (
      <div className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-self-center'>
        <h1>Error</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <Loading />
    )
  }


  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-9">
          <h1 className="fw-bold mb-4">
            {article.title}
          </h1>
          <p className="text-muted">Written by <strong>{article.user.fullname}</strong> | {formatDate(article.createdAt)}</p>
          <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Tips Memilih Ruangan" />
          <p className="lead tw-mt-5">
            {article.description}
          </p>
        </div>

        <div className="col-lg-3">
          <h5 className="mb-4">Artikel Terkait</h5>
          <ul className="list-unstyled">
            <li className="mb-3 card">
              <a href="/articles/30" className="text-decoration-none">
                <img src="https://via.placeholder.com/100x70" className="w-100 rounded" alt="Artikel Terkait" />
                <div className="px-2 py-1">
                  <p className="fw-bold">Dekorasi Ruangan untuk Acara Spesial</p>
                </div>
              </a>
            </li>
            <li className="mb-3 card">
              <a href="/articles/30" className="text-decoration-none">
                <img src="https://via.placeholder.com/100x70" className="w-100 rounded" alt="Artikel Terkait" />
                <div className="px-2 py-1">
                  <p className="fw-bold">Inspirasi Acara</p>
                </div>
              </a>
            </li>
            <li className="mb-3 card">
              <a href="/articles/30" className="text-decoration-none">
                <img src="https://via.placeholder.com/100x70" className="w-100 rounded" alt="Artikel Terkait" />
                <div className="px-2 py-1">
                  <p className="fw-bold">Fasilitas untuk Acara Bisnis</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}