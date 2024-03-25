import Image from "next/image";

const Contact = () => {
  return (
    <div className="row mx-0">
      <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
        <div className="img-container">
          <a href="https://storyset.com/business" target="_blank">
            <Image
              src="/contact.png"
              alt="About Image"
              fill
              sizes="100vw"
              className="img-contain"
            />
          </a>
        </div>
      </div>
      <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center py-5">
        <h3 className="mb-4 d-lg-none txt-color-mid">Contact Us</h3>
        <form action="" data-bs-theme="dark">
          <div className="row mx-0">
            <div className="col-md-6 mb-2">
              <label htmlFor="fName" className="text-muted">
                First Name
              </label>
              <input type="text" className="form-control" id="fName" required />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="lName" className="text-muted">
                Last Name
              </label>
              <input type="text" className="form-control" id="lName" required />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="contact" className="text-muted">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                maxLength={11}
                className="form-control"
                placeholder="09XXXXXXXXX"
                id="contact"
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="email" className="text-muted">
                Email
              </label>
              <input
                type="email"
                maxLength={50}
                className="form-control"
                placeholder="example@example.com"
                id="email"
                required
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="email" className="text-muted">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                required
              ></textarea>
            </div>
            <div className="col-12 my-2">
              <button type="submit" className="primary-btn">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
