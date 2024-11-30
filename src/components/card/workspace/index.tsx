import {Workspace} from '../../../types/type'

interface WorkspaceCardProps {
  workspace?: Workspace
}

export default function WorkspaceCard({workspace}: WorkspaceCardProps) {
  return (
    <div className="col d-flex flex-column">
      <div className="card h-100">
        <img
          src="https://via.placeholder.com/350x200"
          className="card-img-top"
          alt="Ruangan Image"
        />
        <div className="card-body">
          <h5 className="card-title fw-semibold">Aula Utama</h5>
          <p className="card-text">
            Aula Utama dengan kapasitas hingga 500 orang. Cocok untuk seminar atau konferensi.
          </p>
          <ul className="list-unstyled">
            <li>
              <strong>Lokasi:</strong> Bandung, Indonesia
            </li>
            <li>
              <strong>Kapasitas:</strong> 500 orang
            </li>
            <li>
              <strong>Harga:</strong> Rp 8.000.000 per hari
            </li>
            <li>
              <strong>Tipe:</strong> Indoor
            </li>
          </ul>
        </div>
        <div className="card-footer text-center">
          <a href="ruang.html" className="btn btn-warning text-black">
            Lihat Ruangan
          </a>
        </div>
      </div>
    </div>
  )
}