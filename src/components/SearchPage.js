import React from "react";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info mb-5">
        <span>300+ stays</span>
        <h2 className="font-weight-bold mb-3">Places to stay near you</h2>
        <span className="badge badge-pill badge-light mr-2 mb-3 mb-md-0">Cancellation flexibility</span>
        <span className="badge badge-pill badge-light mr-2 mb-3 mb-md-0">Type of place</span>
        <span className="badge badge-pill badge-light mr-2 mb-3 mb-md-0">Price</span>
        <span className="badge badge-pill badge-light mr-2 mb-3 mb-md-0">Instant Book</span>
        <span className="badge badge-pill badge-light">More filters</span>
      </div>
      <h4 className="mb-3">Bengaluru</h4>
      <div className="row mb-5">
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/c2130d30-fb8f-42af-a5c4-c5a3250ca374.jpg?im_w=720"
            details="Entire apartment · Bengaluru"
            price="989"
          />
        </div>
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/497e7654-9527-4a6c-8daa-e595b9251159.jpg?im_w=720"
            details="Entire flat · Bengaluru"
            price="803"
          />
        </div>
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/1c0d098b-db1b-4648-9833-98cb92f653f1.jpg?im_w=720"
            details="Entire flat · Bangalore"
            price="799"
          />
        </div>
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/04761314-37a6-4679-b24a-3942ebc041b8.jpg?im_w=720"
            details="Private room · Bengaluru"
            price="749"
          />
        </div>
      </div>

      <h4 className="mb-3">Ooty</h4>
      <div className="row">
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/fe525a79-335e-4deb-937c-491218b037e4.jpg?im_w=720"
            details="Entire guest suite · Ooty"
            price="3,143"
          />
        </div>
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/8696a3d0-40e6-46f8-8398-a41a09f53455.jpg?im_w=720"
            details="Tiny house · Ooty"
            price="2,000"
          />
        </div>
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/79e6eb3c-5c6d-4d98-bc61-dd6045777f51.jpg?im_w=720"
            details="Entire guest house · Ooty"
            price="3,643"
          />
        </div>
        <div className="col-12 col-md-3">
          <SearchResult
            src="https://a0.muscache.com/im/pictures/29cc0a21-4b94-41b5-a2e2-d4229307efb8.jpg?im_w=720"
            details="Entire bungalow · Bengaluru"
            price="9,856"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
