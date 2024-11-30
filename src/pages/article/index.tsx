
import MainArticle from "./partials/mainarticle";
import OtherArticle from "./partials/otherarticle";

export default function Article() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Blog dan Artikel Panduan</h2>
      <MainArticle/>
      <h3 className="mb-4">Artikel Lainnya</h3>
      <OtherArticle/>
    </div>
  )
}