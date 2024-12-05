import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { Workspace } from '../../../types/type'
import Loading from '../../../components/loading/loading'
import Reviews from './partials/reviews'
import BookingModal from './partials/bookingmodal'
import ChatModal from './partials/chatmodal'
import WorkspaceInfo from './partials/info'

export default function DetailWorkspace() {
  const { id } = useParams()

  const { data: workspace, loading } = useFetch<Workspace>(`${import.meta.env.VITE_API_URL}/api/workspaces/${id}`)

  if (workspace == null) {
    return (
      <div className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-self-center'>
        <h1>Error</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <WorkspaceInfo workspace={workspace}/>
        <Reviews />
      </div>
      <BookingModal workspace={workspace}/>
      <ChatModal />
    </div>
  )
}