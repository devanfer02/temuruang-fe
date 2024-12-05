import { useAuth } from "../../../../components/context/AuthContext"
import Input from "../../../../components/input"
import Select from "../../../../components/input/select"
import { createBooking } from "../../../../services/bookings"
import { BookingDTO } from "../../../../types/dto"
import { Workspace } from "../../../../types/type"
import { useForm } from "react-hook-form"

interface BookingModalProps {
  workspace: Workspace
}

export default function BookingModal({workspace}: BookingModalProps){
  const { getToken } = useAuth()
  const { register, handleSubmit } = useForm<BookingDTO>()

  const onBooking = async(data: BookingDTO) => {
    const [success, _] = await createBooking(getToken(), data)

    if (!success) {
      return ; 
    }

    
    window.location.href = '/profile'
  }

  return (
    <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="bookingModalLabel">Booking Online - {workspace.name}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit(onBooking)}>
            <Input<BookingDTO> label={'Choose Booking Date'} name="bookedAt" register={register} requireMsg="Booking Date is needed" type="date"/>
            <Input<BookingDTO> label={'Duration of Use (Days)'} name="durationOfUse" register={register} requireMsg="Duration of Use is needed" type="number"/>
            <Select<BookingDTO> label={'Choose Payment Method'} name="paymentMethod" register={register} requireMsg="Duration of Use is needed" options={['Dana', 'QRIS', 'BCA', 'Mandiri', 'GOPAY']}/>
            <Input<BookingDTO> label={'workspaceId'} name="workspaceId" register={register} requireMsg="Duration of Use is needed" type="hidden" defaultValue={workspace.id}/>
            <button type="submit" className="btn btn-warning w-100 ">Book</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}