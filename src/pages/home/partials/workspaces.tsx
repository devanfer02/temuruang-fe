import WorkspaceCard from "../../../components/card/workspace";
import useFetch from "../../../hooks/useFetch";
import { Workspace } from "../../../types/type";

export default function Workspaces() {
  const { data: workspaces, loading } = useFetch<Workspace[]>(import.meta.env.VITE_API_URL + '/api/workspaces')

  if (workspaces == null) {
    return (
      <div className="tw-flex tw-justify-center tw-self-center tw-h-screen tw-items-center">
        <h1>Error Occured</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="tw-h-screen">
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <div className="container my-5 text-white d-flex justify-content-between">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {workspaces.map((workspace: Workspace, index: number) => (
          <WorkspaceCard key={index} workspace={workspace}/>
        ))}
      </div>
    </div>
  )
}