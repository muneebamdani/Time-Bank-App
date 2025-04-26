import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import timeIcon from '../../../images/time-icon.svg'; // Adjust path as needed

const DeliveryTime = () => {
  const [open, setOpen] = useState(true);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('24h'); // Default selected delivery time

  const handleToggleDeliveryTimeCollapse = () => {
    setOpen(!open);
  };

  const handleDeliveryTimeChange = (event) => {
    setSelectedDeliveryTime(event.target.value);
  };

  return (
    <div className="collapse-card">
      <h4 className="card-title">
        <a
          href="#!"
          onClick={handleToggleDeliveryTimeCollapse}
          aria-expanded={open}
        >
          <img src={timeIcon} alt="icon" className="me-2" />
          Delivery Time
        </a>
      </h4>

      <Collapse in={open}>
        <div>
          <div className="collapse-body">
            <ul className="checkbox-list list-unstyled">
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="deliveryTime"
                    value="24h"
                    checked={selectedDeliveryTime === '24h'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <span className="checkmark"></span>
                  Enter 24H
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="deliveryTime"
                    value="3days"
                    checked={selectedDeliveryTime === '3days'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <span className="checkmark"></span>
                  Upto 3 days
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="deliveryTime"
                    value="7days"
                    checked={selectedDeliveryTime === '7days'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <span className="checkmark"></span>
                  Upto 7 days
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="deliveryTime"
                    value="anytime"
                    checked={selectedDeliveryTime === 'anytime'}
                    onChange={handleDeliveryTimeChange}
                  />
                  <span className="checkmark"></span>
                  Anytime
                </label>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default DeliveryTime;
