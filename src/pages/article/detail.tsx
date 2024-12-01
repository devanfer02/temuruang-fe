export default function DetailArticle() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-9">
          <h1 className="fw-bold mb-4">Tips Memilih Ruangan untuk Acara Anda</h1>
          <p className="text-muted">Ditulis oleh <strong>Tade Gina</strong> | 18 November 2024</p>
          <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="Tips Memilih Ruangan"/>
            <p className="lead">Cari tahu cara memilih ruangan yang tepat untuk acara Anda! Dalam artikel ini, kami
              memberikan tips praktis untuk memastikan Anda memilih ruangan yang sesuai dengan kebutuhan
              acara, jumlah peserta, dan fasilitas yang dibutuhkan.</p>
            <hr/>
              <p>
                Dalam dunia acara, memilih ruangan yang tepat adalah salah satu kunci keberhasilan. Ada banyak
                faktor yang harus dipertimbangkan, mulai dari ukuran ruangan, lokasi, hingga fasilitas
                pendukung. Pastikan Anda mengetahui kebutuhan acara Anda sebelum memutuskan.
              </p>
              <h3>1. Pertimbangkan Kapasitas</h3>
              <p>
                Pastikan ruangan yang Anda pilih memiliki kapasitas yang sesuai dengan jumlah peserta. Jangan
                memilih ruangan yang terlalu kecil atau terlalu besar agar suasana tetap nyaman.
              </p>
              <h3>2. Periksa Fasilitas</h3>
              <p>
                Beberapa fasilitas seperti proyektor, sound system, dan Wi-Fi mungkin diperlukan. Pastikan
                ruangan memiliki fasilitas yang mendukung kebutuhan acara Anda.
              </p>
              <h3>3. Lokasi Strategis</h3>
              <p>
                Pilih ruangan dengan lokasi yang mudah diakses oleh peserta, terutama jika Anda mengundang tamu
                dari luar kota. Perhatikan juga ketersediaan parkir.
              </p>
            </div>

            <div className="col-lg-3">
              <h5 className="mb-4">Artikel Terkait</h5>
              <ul className="list-unstyled">
                <li className="mb-3 card">
                  <a href="#" className="text-decoration-none">
                    <img src="https://via.placeholder.com/100x70" className="w-100 rounded" alt="Artikel Terkait"/>
                      <div className="px-2 py-1">
                        <p className="fw-bold">Dekorasi Ruangan untuk Acara Spesial</p>
                      </div>
                  </a>
                </li>
                <li className="mb-3 card">
                  <a href="#" className="text-decoration-none">
                    <img src="https://via.placeholder.com/100x70" className="w-100 rounded" alt="Artikel Terkait"/>
                      <div className="px-2 py-1">
                        <p className="fw-bold">Inspirasi Acara</p>
                      </div>
                  </a>
                </li>
                <li className="mb-3 card">
                  <a href="#" className="text-decoration-none">
                    <img src="https://via.placeholder.com/100x70" className="w-100 rounded" alt="Artikel Terkait"/>
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