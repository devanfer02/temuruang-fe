import axios from "axios"
import { BookingDTO } from "../../types/dto"

export const createBooking = async (authToken: string, dto: BookingDTO): Promise<[boolean, string]> => {
    try {
        const res = await axios.post(import.meta.env.VITE_API_URL + '/api/bookings', dto, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })

        if (res.status != 200) {
            return [false, 'failed to create booking']
        }

        return [true, 'successfully create booking']
    } catch (err) {
        console.error(err)
        return [false, 'failed to create booking']
    }
}

export const deleteBooking = async (authToken: string, id: number) => {
    try {
        const res = await axios.delete(import.meta.env.VITE_API_URL + `/api/bookings/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })

        if (res.status != 200) {
            return [false, 'failed to delete booking']
        }

        return [true, 'successfully delete booking']
    } catch (err) {
        console.error(err)
        return [false, 'failed to delete booking']
    }
}