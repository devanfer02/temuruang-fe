import BookingAccordionCard from "../../../../components/card/accordion/booking"
import { Booking } from "../../../../types/type"

interface UserBookingsParams {
  bookings: Booking[]
}

export default function UserBookings({bookings}: UserBookingsParams) {
  return (
    <div className="">
      <h2 className="text-center mb-4">Riwayat Pemesanan</h2>

      <div className="accordion" id="historyAccordion">
        {bookings.map((booking, index) => (
          <BookingAccordionCard booking={booking} key={index}/>
        ))}


      </div>
    </div>
  )
}