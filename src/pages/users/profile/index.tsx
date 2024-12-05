import { useAuth } from "../../../components/context/AuthContext"
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/loading";
import { User } from "../../../types/type";
import UserBookings from "./bookings";
import UpdateUserForm from "./updateform";

export default function Profile() {
  
  const { getToken } = useAuth()
  const { data:user, loading, error } = useFetch<User>(`${import.meta.env.VITE_API_URL}/api/users/profile`, {
    Authorization: `Bearer ${getToken()}`
  }) 

  if (loading) {
    return <Loading/>
  }

  if (user == null || error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <div className="tw-min-h-screen lg:tw-flex my-5">
      <div className="lg:tw-w-1/2">
        <h2 className="text-center mb-4">Profile</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title">Account Information</h5>
              </div>
              <div className="card-body">
                <p><strong>Name:</strong> {user.fullname}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#editProfile">Edit Profil</button>
              </div>
            </div>
            <UpdateUserForm user={user}/>    
          </div>
        </div>
      </div>
      <div className="lg:tw-w-1/2">
        <UserBookings/>
      </div>
    </div>
  )
}