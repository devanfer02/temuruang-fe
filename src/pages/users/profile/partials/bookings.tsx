import BookingAccordionCard from "../../../../components/card/accordion/booking"
import { Booking } from "../../../../types/type"

interface UserBookingsParams {
  bookings: Booking[]
}

export default function UserBookings({bookings}: UserBookingsParams) {
  return (
    <div className="">
      <h2 className="text-center mb-4">Riwayat Pemesanan</h2>

      { bookings.length!! ? (
        <div className="accordion" id="historyAccordion">
          {bookings.map((booking, index) => (
            <BookingAccordionCard booking={booking} key={index}/>
          ))}
        </div>
      ) : (
        <div className="tw-flex tw-w-full tw-justify-center tw-self-center tw-items-center">
          <div className="tw-text-center">
          <p>There's no order history yet</p>
          <a href="/#workspaces">Go reserve a workspace</a>

          </div>
        </div>
      )}
    </div>
  )
}