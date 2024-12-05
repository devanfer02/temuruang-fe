import { deleteBooking } from "../../../services/bookings";
import { Booking } from "../../../types/type";
import { useAuth } from "../../context/AuthContext";

interface BookingAccordionCard {
  booking: Booking

}

export default function BookingAccordionCard({booking}: BookingAccordionCard) {
  const { getToken } = useAuth() 

  const onDelete = async (id: number) => {
    const [ success, _ ] = await deleteBooking(getToken(), id)

    if (!success)  {
      return ;
    }

    window.location.reload();
  }

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${booking.id}`}>
        <button
          className={`accordion-button ${booking.id !== 0 ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${booking.id}`}
          aria-expanded={booking.id === 0}
          aria-controls={`collapse${booking.id}`}
        >
          {booking.workspace.name} - { booking.bookedAt }
        </button>
      </h2>
      <div
        id={`collapse${booking.id}`}
        className={`accordion-collapse collapse ${booking.id === 0 ? "show" : ""}`}
        aria-labelledby={`heading${booking.id}`}
        data-bs-parent="#historyAccordion"
      >
        <div className="accordion-body">
          <ul className="list-unstyled">
            <li>
              <strong>Ruangan:</strong> {booking.workspace.name}
            </li>
            <li>
              <strong>Tanggal:</strong> {booking.bookedAt}
            </li>
            <li>
              <strong>Status:</strong>{" "}
              <span className={`fw-bold`}>{booking.status}</span>
            </li>
            {booking.status !== "Finished" && (
              <button className="btn btn-danger btn-sm mt-2" onClick={() => onDelete(booking.id)}>
                Cancel Reservation
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
