interface PaginationParams {
  length: number;
  path: string;
  current: number;
}

export default function Pagination({length, path, current}: PaginationParams) {
  return (
    <nav aria-label="Page navigation example" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {Array.from({ length: length }, (_, index) => (
          <li className="page-item" key={index}>
            <a className={`page-link ${current === index + 1 ? 'bg-primary text-white' : ''}`} href={`${path}?page=${index + 1}`}>
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )

}