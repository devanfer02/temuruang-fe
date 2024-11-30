export default function Hero() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div className="carousel-inner" style={{ maxHeight: '90vh', minHeight: '90vh' }}>
      <div className="carousel-item active">
        <div
          style={{
            backgroundImage: "url('assets/carousel3.jpeg')",
            minHeight: '90vh',
            backgroundSize: 'cover',
            position: 'relative',
          }}
          className="d-flex justify-content-center align-items-center"
          id="hero"
        >
          <div className="overlay">
            <div className="text-container">
              <h1 className="fw-semibold">Temu Ruang</h1>
              <h5>Temukan dan Pesan Ruangan Sempurna untuk Acara Anda!</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel2.jpg" className="d-block w-100" alt="Carousel 2" />
        <div className="overlay">
          <div className="text-container">
            <h5>Jelajahi Pilihan Ruangan Terbaik untuk Acara Anda</h5>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  ) 
}