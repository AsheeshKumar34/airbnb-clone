import React from "react";

function Footer() {
  return (
    <div className="footer bg-light">
      <div className="row">
        <div className="col-6 col-md-3">
          <h6 className="footer__heading mb-3">ABOUT</h6>
          <ul className="list-unstyled">
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-6 col-md-3">
          <h6 className="footer__heading mb-3">COMMUNITY</h6>
          <ul className="list-unstyled">
            <li>Diversity & Belonging</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Frontline Stays</li>
            <li>Invite friends</li>
          </ul>
        </div>
        <div className="col-6 col-md-3">
          <h6 className="footer__heading mb-3">HOST</h6>
          <ul className="list-unstyled">
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Responsible hosting</li>
            <li>Open Homes</li>
            <li>Resource Centre</li>
          </ul>
        </div>
        <div className="col-6 col-md-3">
          <h6 className="footer__heading mb-3">SUPPORT</h6>
          <ul className="list-unstyled">
            <li>Our COVID-19 Response</li>
            <li>Help Centre</li>
            <li>Cancellation options</li>
            <li>Neighbourhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="footer__copyright">
        <p>© 2020 Airbnb-Clone, Inc. No rights reserved · Privacy · Terms · Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
