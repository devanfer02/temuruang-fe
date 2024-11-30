import WorkspaceCard from "../../../components/card/workspace";

export default function Workspaces() {
  return (
    <div className="container my-5 text-white d-flex justify-content-between">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <WorkspaceCard key={index} />
          ))}
      </div>
    </div>
  )
}