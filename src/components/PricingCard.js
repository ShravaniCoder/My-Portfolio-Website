import { Link } from "react-router-dom";
import "./PricingCard.css";

import React from 'react'

const PricingCard = () => {
    return (
      <div className="pricing">
        <div className="card-container">
          <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">$70</p>
            <p>- 3Days -</p>
            <p>- 3Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design</p>
            <Link to="/contact" className="btn">
              PURCHASE NOW
            </Link>
          </div>
          <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">$80</p>
            <p>- 2Days -</p>
            <p>- 5Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design</p>
            <Link to="/contact" className="btn">
              PURCHASE NOW
            </Link>
          </div>
          <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc">$90</p>
            <p>- 5Days -</p>
            <p>- 8Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design</p>
            <Link to="/contact" className="btn">
              PURCHASE NOW
            </Link>
          </div>
        </div>
      </div>
    );
}

export default PricingCard;