import Input from "../../../components/input";
import { UserLoginDTO } from "../../../types/type";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm<UserLoginDTO>()

  const onSubmit = async (data: UserLoginDTO) => {

  }

  return (
    <div className="tw-flex">
      <div className="lg:tw-w-2/4 lg:tw-flex tw-hidden">
        <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" className="tw-w-[2000px]" />
      </div>
      <div className="tw-w-full tw-px-5 lg:tw-px-0 tw-pt-5 lg:tw-pt-0 lg:tw-w-3/4 tw-flex tw-self-center tw-items-center tw-justify-center">
        <div className="tw-w-full">
          <h2 className="text-center mb-4">Login to Your Account!</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <Input<UserLoginDTO> label="Email" name="email" type="text" register={register} requireMsg="Order is required" placeholder="Email" />
                <Input<UserLoginDTO> label="Password" name="password" type="text" register={register} requireMsg="Order is required" placeholder="Password" />
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <p>Don't have an account? <a href="/auth/register">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}