import { Article } from "../../../types/type"
import { getFirstNWord } from "../../../utils/utils"

interface ArticleCardProps {
  article?: Article
}

export default function ArticleCard({article}: ArticleCardProps) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Tips Memilih Ruangan" />
      <div className="card-body">
        <h5 className="card-title tw-font-semibold">
          {article?.title}
        </h5>
        <p className="card-text">
          {getFirstNWord(20, article?.description!)}
        </p>
        <a href={`/articles/${article?.id}`} className="btn btn-primary">Baca Selengkapnya</a>
      </div>
    </div>
  )
}