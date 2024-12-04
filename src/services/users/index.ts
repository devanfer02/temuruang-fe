import axios from "axios";
import { UserRegisterDTO } from "../../types/dto";

export const updateUser = async (authToken: string, dto: UserRegisterDTO): Promise<[boolean, string]> => {
  try {
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/users`, dto, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })

    if (res.status != 200) {
      return [false, "failed to update user"]
    }

    return [true, "successfully update user"]
  } catch (err) {
    console.error(err)
    return [false, "failed to update user"]
  }
}