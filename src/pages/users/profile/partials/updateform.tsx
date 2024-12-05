import { useForm } from "react-hook-form";
import { UserRegisterDTO } from "../../../../types/dto";
import { updateUser } from "../../../../services/users";
import { useAuth } from "../../../../components/context/AuthContext";
import Input from "../../../../components/input";
import { User } from "../../../../types/type";

interface UpdateFormProps {
  user: User
}

export default function UpdateUserForm({user}: UpdateFormProps) {
  const { register, handleSubmit } = useForm<UserRegisterDTO>();
  const { getToken } = useAuth()

  const onUpdate = async (data: UserRegisterDTO) => {
    const [success, _] = await updateUser( getToken(),data);

    if (!success) {
      return ;
    }

    window.location.reload()
  }


  return (
    <div className="modal fade" id="editProfile" tabIndex={-1} aria-labelledby="editProfileLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editProfileLabel">Edit Profil</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" method="POST" onSubmit={handleSubmit(onUpdate)}>
                <Input<UserRegisterDTO> label="Fullname" name="fullname" type="text" register={register} requireMsg="Fullname is required" placeholder="Fullname" defaultValue={user.fullname}/>
                <Input<UserRegisterDTO> label="Email" name="email" type="text" register={register} requireMsg="Email is required" placeholder="Email" defaultValue={user.email}/>
                <Input<UserRegisterDTO> label="Password" name="password" type="password" register={register} placeholder="Password" defaultValue={""}/>
                <button type="submit" className="btn btn-primary w-100">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}