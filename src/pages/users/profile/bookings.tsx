export default function UserBookings() {
  return (
    <div className="">
      <h2 className="text-center mb-4">Riwayat Pemesanan</h2>

      <div className="accordion" id="historyAccordion">

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Aula Utama - 15 November 2024
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#historyAccordion">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li><strong>Ruangan:</strong> Aula Utama</li>
                <li><strong>Tanggal:</strong> 15 November 2024</li>
                <li><strong>Status:</strong> <span className="text-success fw-bold">Selesai ✅</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Ruang Seminar - 5 Oktober 2024
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#historyAccordion">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li><strong>Ruangan:</strong> Ruang Seminar</li>
                <li><strong>Tanggal:</strong> 5 Oktober 2024</li>
                <li><strong>Status:</strong> <span className="text-warning fw-bold">Pembayaran Diterima
                  ⏳</span></li>
                <button className="btn btn-danger btn-sm mt-2">Batalkan Pesanan ❌</button>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Ruang Rapat VIP - 12 September 2024
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#historyAccordion">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li><strong>Ruangan:</strong> Ruang Rapat VIP</li>
                <li><strong>Tanggal:</strong> 12 September 2024</li>
                <li><strong>Status:</strong> <span className="text-danger fw-bold">Dibatalkan ❌</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}