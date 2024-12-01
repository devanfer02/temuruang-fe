export default function DetailWorkspace() {
  return (
    <div className="container my-5">
    <div className="row">
      <div className="col-lg-8">
        <div className="card mb-4">
          <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Ruangan Image"/>
          <div className="card-body">
            <h5 className="card-title fw-semibold">Aula Utama</h5>
            <p className="card-text">Aula Utama dengan kapasitas hingga 500 orang. Cocok untuk seminar atau konferensi.
            </p>
            <ul className="list-unstyled">
              <li><strong>Lokasi:</strong> Bandung, Indonesia</li>
              <li><strong>Kapasitas:</strong> 500 orang</li>
              <li><strong>Harga:</strong> Rp 8.000.000 per hari</li>
              <li><strong>Tipe:</strong> Indoor</li>
            </ul>
          </div>
          <div className="card-footer text-center d-flex justify-content-center w-100">
            <button className="btn btn-warning text-black mx-2" data-bs-toggle="modal"
              data-bs-target="#bookingModal">Pesen
              Ruangan</button>
            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#chatModal">
              Buka Chat
            </button>
          </div>
        </div>
      </div>


      <div className="col-lg-4">
        <div className="card">
          <div className="card-header" style={{backgroundColor: '#0f172a'}}>
            <h5 className="fw-semibold text-white pt-1">Reviews</h5>
          </div>
          <div className="card-body" style={{maxHeight: '400px', overflowY: "auto", paddingRight: '15px'}}>
            <div className="review mb-3">
              <h6 className="fw-bold">John Doe</h6>
              <p className="text-muted">2 minggu yang lalu</p>
              <p>Tempatnya sangat bagus untuk seminar, fasilitas lengkap dan nyaman!</p>
            </div>
            <div className="review mb-3">
              <h6 className="fw-bold">Jane Smith</h6>
              <p className="text-muted">1 bulan yang lalu</p>
              <p>Ruangan luas dan AC-nya dingin, sangat cocok untuk acara besar.</p>
            </div>
            <div className="review mb-3">
              <h6 className="fw-bold">Michael Tan</h6>
              <p className="text-muted">3 bulan yang lalu</p>
              <p>Fasilitas sangat lengkap dan lokasi mudah dijangkau. Sangat rekomended!</p>
            </div>
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-header" style={{backgroundColor: '#0f172a'}}>
            <h5 className="fw-semibold text-white pt-1">Tulis Review Anda</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="reviewText" className="form-label">Review</label>
                <textarea className="form-control tw-resize-none" id="reviewText" rows={4} required></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100 text-black">Kirim Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="bookingModalLabel">Booking Online - Ruangan 1</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="bookingDate" className="form-label">Pilih Tanggal</label>
              <input type="date" className="form-control" id="bookingDate" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="bookingDuration" className="form-label">Durasi Penggunaan (Hari)</label>
              <input type="number" className="form-control" id="bookingDuration" min="1" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">Pilih Metode Pembayaran</label>
              <select className="form-select" id="paymentMethod" disabled>
                <option value="dana">Dana</option>
              </select>
            </div>
            <button type="submit" className="btn btn-warning w-100">Konfirmasi Pemesanan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="chatModal" tabIndex={-1} aria-labelledby="chatModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">

        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title" id="chatModalLabel">Room Chat - Aula Utama</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div className="modal-body p-0">

          <div className="chat-area bg-light" style={{height: '400px', overflowY: 'auto', padding: '10px'}}>

            <div className="message my-2">
              <div className="text-end">
                <span className="badge bg-primary">You</span>
                <p className="bg-primary text-white p-2 rounded">Apakah ruangannya tersedia untuk tanggal sekian?</p>
                <small className="text-muted">10:30 AM</small>
              </div>
            </div>
            <div className="message my-2">
              <div className="text-start">
                <span className="badge bg-secondary">Admin</span>
                <p className="bg-white p-2 rounded border">Ya, ruangannya tersedia untuk tanggal segitu, silahkan segera booking</p>
                <small className="text-muted">11:30 AM</small>
              </div>
            </div>
          </div>
        </div>


        <div className="modal-footer">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Type your message..." aria-label="Chat input" />
            <button className="btn btn-primary" type="button">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}