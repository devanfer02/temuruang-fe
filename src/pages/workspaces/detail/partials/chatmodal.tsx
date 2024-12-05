export default function ChatModal() {
  return (
    <div className="modal fade" id="chatModal" tabIndex={-1} aria-labelledby="chatModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="chatModalLabel">Room Chat - Aula Utama</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>


          <div className="modal-body p-0">

            <div className="chat-area bg-light" style={{ height: '400px', overflowY: 'auto', padding: '10px' }}>

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
  )
}