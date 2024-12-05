import { useAuth } from "../../../../components/context/AuthContext"
import { Workspace } from "../../../../types/type"

interface WorkspaceInfoProps {
  workspace: Workspace
}

export default function WorkspaceInfo({workspace}: WorkspaceInfoProps) {
  const { isAuthenticated } = useAuth()

  return (
    <div className="col-lg-8">
      <div className="card mb-4">
        <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Ruangan Image" />
        <div className="card-body">
          <h5 className="card-title fw-semibold">
            {workspace.name}
          </h5>
          <p className="card-text">
            {workspace.description}
          </p>
          <ul className="list-unstyled">
            <li><strong>Location:</strong> {workspace.location}</li>
            <li><strong>Capacity:</strong> {workspace.capacity}</li>
            <li><strong>Price:</strong> $ {workspace.price} per hari</li>
            <li><strong>Type:</strong> {workspace.type}</li>
          </ul>
        </div>
        <div className="card-footer text-center d-flex justify-content-center w-100">
          { isAuthenticated && (
            <button className="btn btn-warning text-black mx-2" data-bs-toggle="modal"
              data-bs-target="#bookingModal">Book Workspace</button>
          )}
          <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#chatModal">
            Open Chat
          </button>
        </div>
      </div>
    </div>
  )
}