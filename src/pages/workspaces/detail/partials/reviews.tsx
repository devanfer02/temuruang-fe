import { useAuth } from "../../../../components/context/AuthContext"

export default function Reviews() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#0f172a' }}>
          <h5 className="fw-semibold text-white pt-1">Reviews</h5>
        </div>
        <div className="card-body" style={{ maxHeight: '400px', overflowY: "auto", paddingRight: '15px' }}>
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

      {isAuthenticated && (
        <div className="card mt-4">
          <div className="card-header" style={{ backgroundColor: '#0f172a' }}>
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
      )}
    </div>
  )
}