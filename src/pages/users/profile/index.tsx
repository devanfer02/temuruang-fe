import { useForm } from "react-hook-form"
import { useAuth } from "../../../components/context/AuthContext"
import Input from "../../../components/input"
import { UserRegisterDTO } from "../../../types/dto"

export default function Profile() {
  const { register, handleSubmit } = useForm<UserRegisterDTO>();
  const { user } = useAuth()

  const onUpdate = async (data: UserRegisterDTO) => {

  }

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-4">Profile</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title">Account Information</h5>
              </div>
              <div className="card-body">
                <p><strong>Name:</strong> {user.fullname}</p>
                <p><strong>Email:</strong> {user.sub}</p>
                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#editProfile">Edit Profil</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Riwayat Pemesanan</h5>
              </div>
              <div className="card-body">
                <h6 className="fw-semibold">Pemesanan Terakhir:</h6>
                <ul className="list-unstyled">
                  <li><strong>Ruangan:</strong> Aula Utama</li>
                  <li><strong>Tanggal Pemesanan:</strong> 15 November 2024</li>
                  <li><strong>Status:</strong> Selesai</li>
                </ul>

                <h6 className="fw-semibold mt-4">Riwayat Pemesanan Lain:</h6>
                <ul className="list-unstyled">
                  <li><strong>Ruangan:</strong> Ruang Seminar</li>
                  <li><strong>Tanggal Pemesanan:</strong> 5 Oktober 2024</li>
                  <li><strong>Status:</strong> Pembayaran Diterima</li>
                </ul>
                <a href="history.html" className="btn btn-warning text-white mt-3">Lihat Semua Pemesanan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="editProfile" tabIndex={-1} aria-labelledby="editProfileLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editProfileLabel">Edit Profil</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" method="POST" onSubmit={handleSubmit(onUpdate)}>
                <Input<UserRegisterDTO> label="Fullname" name="fullname" type="text" register={register} requireMsg="Fullname is required" placeholder="Fullname" />
                <Input<UserRegisterDTO> label="Email" name="email" type="text" register={register} requireMsg="Email is required" placeholder="Email" />
                <Input<UserRegisterDTO> label="Password" name="password" type="password" register={register} requireMsg="Password is required" placeholder="Password" />
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Riwayat Pemesanan</h2>

        <div className="accordion" id="historyAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Aula Utama - 15 November 2024
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#historyAccordion">
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li><strong>Ruangan:</strong> Aula Utama</li>
                  <li><strong>Tanggal:</strong> 15 November 2024</li>
                  <li><strong>Status:</strong> <span className="text-success fw-bold">Selesai ✅</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Ruang Seminar - 5 Oktober 2024
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#historyAccordion">
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li><strong>Ruangan:</strong> Ruang Seminar</li>
                  <li><strong>Tanggal:</strong> 5 Oktober 2024</li>
                  <li><strong>Status:</strong> <span className="text-warning fw-bold">Pembayaran Diterima
                    ⏳</span></li>
                  <button className="btn btn-danger btn-sm mt-2">Batalkan Pesanan ❌</button>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Ruang Rapat VIP - 12 September 2024
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#historyAccordion">
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li><strong>Ruangan:</strong> Ruang Rapat VIP</li>
                  <li><strong>Tanggal:</strong> 12 September 2024</li>
                  <li><strong>Status:</strong> <span className="text-danger fw-bold">Dibatalkan ❌</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}