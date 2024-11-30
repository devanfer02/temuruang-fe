import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-warning">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 mx-5 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

        <a href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <Icon icon="cil:room" className='tw-text-blacked'/>
            TemuRuang 
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Artikel</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
      </div>
    </footer>
  )
}