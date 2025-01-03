import { useState } from "react";
import Input from "../../../components/input";
import { authRegsiter } from "../../../services/auth";
import { UserRegisterDTO } from "../../../types/dto";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Alert from "../../../components/alert";

export default function Register() {
  const { register, handleSubmit } = useForm<UserRegisterDTO>()
  const navigate = useNavigate();
  const [ error, setError ] = useState<string | null>(null);

  const onSubmit = async (cred: UserRegisterDTO) => {
    try {
      const [success, _] = await authRegsiter(cred);

      if (!success) {
        setError("Server error")
        return 
      }

      
    } catch (err) {
      console.error(err);
      return 
    }


    navigate("/auth/login", { replace: true})
  }

  return (
    <div className="tw-flex">
      <div className="lg:tw-w-2/4 lg:tw-flex tw-hidden">
        <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" className="tw-w-[2000px]" />
      </div>
      <div className="tw-w-full tw-px-5 lg:tw-px-0 tw-pt-5 lg:tw-pt-0 lg:tw-w-3/4 tw-flex tw-self-center tw-items-center tw-justify-center">
        <div className="tw-w-full">
          <h2 className="text-center mb-4">Create Your Account!</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <Input<UserRegisterDTO> label="Fullname" name="fullname" type="text" register={register} requireMsg="Fullname is required" placeholder="Fullname" />
                <Input<UserRegisterDTO> label="Email" name="email" type="text" register={register} requireMsg="Email is required" placeholder="Email" />
                <Input<UserRegisterDTO> label="Password" name="password" type="password" register={register} requireMsg="Password is required" placeholder="Password" />
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account? <a href="/auth/login">Login</a></p>
              </div>
              { error && (
                <Alert
                  message={error}
                  onClick={() => setError(null)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}