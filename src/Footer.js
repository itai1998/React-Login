const Footer = () => {
  return (
    <div>
      <section className="">
        <footer className="text-center text-white" style={{backgroundColor: "#0a4275"}}>
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                >
                  Sign up!
                </button>
              </p>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2024 Copyright:
            <a className="text-white" href="">
              I-Tai Lin
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
