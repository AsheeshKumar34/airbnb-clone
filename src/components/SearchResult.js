import React from "react";

function SearchResult({ src, details, price }) {
  return (
    <div className="searchResult">
      <div class="searchResult__card border-0">
        <img src={src} className="card-img-top rounded" alt="" />
        <div className="card-body px-0 py-2">
          <p className="mb-0">{details}</p>
          <p>
            <span className="font-weight-bold">₹{price}</span> / night
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
