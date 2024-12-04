import axios from "axios"
import { UserLoginDTO, UserRegisterDTO } from "../../types/dto"

export const authLogin = async (dto: UserLoginDTO) => {
  try {
    const res = await axios.post(import.meta.env.VITE_API_URL + '/api/auth/login', dto);

    if (res.status != 200) {
      return [false, res.data.errors];
    }

    return [true, res.data.data.token]
  } catch (err) {
    console.error(err)
    return [false, (err as Error).message]
  }
}

export const authRegsiter = async (dto: UserRegisterDTO): Promise<[boolean, string]> => {
  try {
    const res = await axios.post(import.meta.env.VITE_API_URL + '/api/auth/register', dto);

    if (res.status != 200) {
      return [false, res.data.errors];
    }

    return [true, "success"]
  } catch (err) {
    console.error(err)
    return [false, (err as Error).message]
  }
}