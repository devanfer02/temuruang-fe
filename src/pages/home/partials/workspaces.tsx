import { useLocation } from "react-router-dom";
import WorkspaceCard from "../../../components/card/workspace";
import Pagination from "../../../components/pagination";
import useFetch from "../../../hooks/useFetch";
import { Workspace } from "../../../types/type";
import Loading from "../../../components/loading/loading";

export default function Workspaces() {
  const loc = useLocation()

  const queryParams = new URLSearchParams(loc.search)

  const queryPage = Number(queryParams.get('page')) || 1;

  const { data: workspaces, loading, meta } = useFetch<Workspace[]>(`${import.meta.env.VITE_API_URL}/api/workspaces?page=${queryPage}`)

  if (workspaces == null) {
    return (
      <div className="tw-flex tw-justify-center tw-self-center tw-h-screen tw-items-center">
        <h1>Error Occured</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <div className="container my-5 text-white d-flex justify-content-between">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {workspaces.map((workspace: Workspace, index: number) => (
            <WorkspaceCard key={index} workspace={workspace} />
          ))}
        </div>
      </div>
      <Pagination path="/" length={meta.total_pages} current={queryPage} idLoc="workspaces"/>
    </>
  )
}