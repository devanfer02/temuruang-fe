export default function FormSearch() {
  return (
    <div
    className="container my-1 text-white rounded p-4"
    style={{ backgroundColor: '#0f172a' }}
  >
    <h3 className="form-label">Cari sesuai kebutuhan kamu!</h3>
    <div className="mb-4 row">
      <div className="col-12 col-lg-11">
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Nama gedung, lokasi, atau kata kunci"
        />
      </div>
      <div className="col-1 d-none d-lg-block">
        <button className="btn btn-warning px-4">Cari</button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 mb-3">
        <label htmlFor="locationFilter" className="form-label">Lokasi</label>
        <select className="form-select" id="locationFilter">
          <option value="">Pilih lokasi</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Surabaya">Surabaya</option>
        </select>
      </div>
      <div className="col-md-3 mb-3">
        <label htmlFor="capacityFilter" className="form-label">Kapasitas</label>
        <input
          type="number"
          className="form-control"
          id="capacityFilter"
          placeholder="Jumlah orang"
        />
      </div>
      <div className="col-md-3 mb-3">
        <label htmlFor="priceRange" className="form-label">Harga</label>
        <input
          type="range"
          className="form-range"
          id="priceRange"
          min="0"
          max="10000"
          step="500"
        />
        <small id="priceLabel" className="form-text text-white">
          Rentang harga: Rp 0 - Rp 10,000
        </small>
      </div>
      <div className="col-md-3 mb-3">
        <label htmlFor="roomTypeFilter" className="form-label">Tipe Ruangan</label>
        <select className="form-select" id="roomTypeFilter">
          <option value="">Pilih tipe</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="ballroom">Ballroom</option>
          <option value="aula">Aula</option>
        </select>
      </div>
      <div className="col-md-3 mb-3 d-block d-lg-none w-100">
        <button className="btn btn-warning px-4 w-100">Cari</button>
      </div>
    </div>
  </div>
  )
}