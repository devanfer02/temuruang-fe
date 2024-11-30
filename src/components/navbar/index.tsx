import { Icon } from "@iconify/react/dist/iconify.js"
import navs from '../../constant/navs.json'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning px-2 px-lg-5 py-3 z-index-5">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold d-flex" href="/">
          <Icon icon="cil:room" width="30" className='tw-text-blacked'/>
          TemuRuang
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { navs.map((nav, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={nav.link}>{nav.text}</a>
            </li>
            ))}
          </ul>
          <div className="dropdown-center tw-flex tw-gap-x-5">
          <a className="nav-link" href="/auth/login">Login</a>
          <a className="nav-link" href="/auth/register">Register</a>
          </div>
          {/* <div className="dropdown-center">
            <button className="btn  dropdown-toggle text-black" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Tade Gina
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/profile">Profile</a></li>
              <li><a className="dropdown-item" href="/logout">Logout</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  )
}