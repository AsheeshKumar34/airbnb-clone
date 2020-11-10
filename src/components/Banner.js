import React from "react";
import {Link} from "react-router-dom";

function Banner() {
  return (
    <div className="banner d-flex flex flex-column justify-content-center">
      <div className="banner__info">
        <h1>Go Near</h1>
        <Link to="/search" className="btn btn-sm btn-light">Explore Nearby stays</Link>
      </div>
    </div>
  );
}

export default Banner;
