import { Workspace } from "../../../../types/type"

interface BookingModalProps {
  workspace: Workspace
}

export default function BookingModal({workspace}: BookingModalProps){
  return (
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
              <input type="date" className="form-control" id="bookingDate" required />
            </div>
            <div className="mb-3">
              <label htmlFor="bookingDuration" className="form-label">Durasi Penggunaan (Hari)</label>
              <input type="number" className="form-control" id="bookingDuration" min="1" required />
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
  )
}