import React from "react";

function Card({ src, title }) {
  return (
    <div class="card border-0">
      <img src={src} className="card-img-top rounded" alt="" />
      <div className="card-body px-0 py-2">
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Card;
