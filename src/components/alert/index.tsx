interface AlertProps {
  onClick: () => void
  message: string
}

export default function Alert({ message, onClick }: AlertProps) {
  return (
    <div className="alert alert-danger alert-dismissible text-center" role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        onClick={onClick}
        aria-label="Close"
      ></button>
    </div>
  )
}