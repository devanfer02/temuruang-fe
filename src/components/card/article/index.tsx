import { Article } from "../../../types/type"

interface ArticleCardProps {
  article?: Article
}

export default function ArticleCard({article}: ArticleCardProps) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Tips Memilih Ruangan" />
      <div className="card-body">
        <h5 className="card-title tw-font-semibold">Tips Memilih Ruangan</h5>
        <p className="card-text">Cari tahu cara memilih ruangan yang tepat untuk acara Anda! Dalam artikel ini, kami
          memberikan tips praktis untuk memastikan Anda memilih ruangan yang sesuai dengan kebutuhan acara, jumlah
          peserta, dan fasilitas yang dibutuhkan.</p>
        <a href="/articles/1" className="btn btn-primary">Baca Selengkapnya</a>
      </div>
    </div>
  )
}