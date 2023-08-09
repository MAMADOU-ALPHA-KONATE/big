import React from 'react';
import './service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faTrophy, faVideo, faComputer} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
      <div className="service-container">
        <div className="service-header">
          <span>My</span>
          <h2>Services</h2>
          <p>Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore</p>
          <div className="service-stats">
            <div className="service-stat">
              <span>120</span>
              <h6>Satisfied Clients</h6>
            </div>
            <div className="service-stat">
              <span>285</span>
              <h6>Projects Completed</h6>
            </div>
          </div>
        </div>
        <div className="service-list">
          <div className="service-item">
            <FontAwesomeIcon icon={faTrophy} className="service-icon" />
            <div className="service-content">
              <span>BRAND</span>
              <h4>CONSULTANT</h4>
              <p>Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut</p>
            </div>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faComputer} className="service-icon" />
            <div className="service-content">
              <span>UI/UX</span>
              <h5>SOLUTIONS</h5>
              <p>Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut</p>
            </div>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faCube} className="service-icon" />
            <div className="service-content">
              <span>PACKAGING</span>
              <h5>DESIGN</h5>
              <p>Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut</p>
            </div>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faVideo} className="service-icon" />
            <div className="service-content">
              <span>MOTION VIDEO</span>
              <h5>& TVC</h5>
              <p>Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut</p>
            </div>
          </div>
        </div>  
      </div> 
  );
}

export default Service;
