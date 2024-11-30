import faq from '../../constant/faqs.json'

export default function FAQ() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions (FAQ)</h2>


      {faq.faqs.map((faq, index) => (
        <div className="accordion" id="faqAccordion" key={index}>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}