import React from 'react';
import './Home.css';
import Banner from '../BannerComponent/Banner'; // ✅ Add this line

function Home() {
  return (
    <>
      <Banner /> {/* ✅ Add this component here */}

      <div className="hero-section text-white py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          
          {/* LEFT CONTENT */}
          <div className="hero-text mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">Your Lightning Fast<br />Delivery Partner</h1>
            <p className="mb-4 text-white-50">
              Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt
              optio quis sit odio nemo quisquam. Eius quos reiciendis eum vel eum voluptatem
              eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit.
            </p>

            {/* STATS */}
            <div className="d-flex gap-4 flex-wrap mt-4">
              <div>
                <h2 className="fw-bold text-white">232</h2>
                <p className="text-white-50 mb-0">Clients</p>
              </div>
              <div>
                <h2 className="fw-bold text-white">521</h2>
                <p className="text-white-50 mb-0">Projects</p>
              </div>
              <div>
                <h2 className="fw-bold text-white">1453</h2>
                <p className="text-white-50 mb-0">Support</p>
              </div>
              <div>
                <h2 className="fw-bold text-white">32</h2>
                <p className="text-white-50 mb-0">Workers</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image text-center">
            <img
              src="/assets/img/assets/img/hero-img.svg"
              alt="Home"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
