import {Workspace} from '../../../types/type'

interface WorkspaceCardProps {
  workspace: Workspace
}

export default function WorkspaceCard({workspace}: WorkspaceCardProps) {
  return (
    <div className="col d-flex flex-column">
      <div className="card h-100">
        <img
          src="https://via.placeholder.com/350x200"
          className="card-img-top max-h-[350px]"
          alt="Ruangan Image"
        />
        <div className="card-body">
          <h5 className="card-title fw-semibold">
            {workspace.name}
          </h5>
          <p className="card-text">
            {workspace.description}
          </p>
          <ul className="list-unstyled">
            <li>
              <strong>Location:</strong> {workspace.location}
            </li>
            <li>
              <strong>Capacity:</strong> {workspace.capacity}
            </li>
            <li>
              <strong>Price:</strong> $ {workspace.price} per day
            </li>
            <li>
              <strong>Type:</strong> {workspace.type}
            </li>
          </ul>
        </div>
        <div className="card-footer text-center">
          <a href={`/workspaces/${workspace.id}`} className="btn btn-warning text-black">
            See Workspace
          </a>
        </div>
      </div>
    </div>
  )
}