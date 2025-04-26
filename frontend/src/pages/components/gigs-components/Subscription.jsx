import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import subscribeIcon from '../../../images/subscribe-icon.svg'; // Adjust path as needed

const Subscription = () => {
  const [open, setOpen] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('all'); // Default selected subscription plan

  const handleToggleSubscriptionCollapse = () => {
    setOpen(!open);
  };

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <div className="collapse-card">
      <h4 className="card-title">
        <a
          href="#!"
          onClick={handleToggleSubscriptionCollapse}
          aria-expanded={open}
        >
          <img src={subscribeIcon} alt="icon" className="me-2" />
          Subscription
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
                    name="subscription"
                    value="all"
                    checked={selectedPlan === 'all'}
                    onChange={handlePlanChange}
                  />
                  <span className="checkmark"></span>
                  All Subscription
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="subscription"
                    value="basic"
                    checked={selectedPlan === 'basic'}
                    onChange={handlePlanChange}
                  />
                  <span className="checkmark"></span>
                  Basic Plan
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="subscription"
                    value="premium"
                    checked={selectedPlan === 'premium'}
                    onChange={handlePlanChange}
                  />
                  <span className="checkmark"></span>
                  Premium Plan
                </label>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Subscription;
