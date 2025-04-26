import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import moneyIcon from '../../../images/money-icon.svg'; // Adjust path as needed

const Budget = () => {
  const [open, setOpen] = useState(true);
  const [selectedBudget, setSelectedBudget] = useState('value'); // Default selected budget type

  const handleToggleBudgetCollapse = () => {
    setOpen(!open);
  };

  const handleBudgetChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  return (
    <div className="collapse-card">
      <h4 className="card-title">
        <a
          href="#!"
          onClick={handleToggleBudgetCollapse}
          aria-expanded={open}
        >
          <img src={moneyIcon} alt="icon" className="me-2" />
          Budget
        </a>
      </h4>

      <Collapse in={open}>
        <div>
          <div className="collapse-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Custom Budget"
              />
            </div>

            <ul className="checkbox-list list-unstyled">
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="budget"
                    value="value"
                    checked={selectedBudget === 'value'}
                    onChange={handleBudgetChange}
                  />
                  <span className="checkmark"></span>
                  <span className="text-dark"> Value: </span> Under $4500
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="budget"
                    value="midrange"
                    checked={selectedBudget === 'midrange'}
                    onChange={handleBudgetChange}
                  />
                  <span className="checkmark"></span>
                  <span className="text-dark"> Mid-range: </span> Under $8500
                </label>
              </li>
              <li>
                <label className="custom_radio">
                  <input
                    type="radio"
                    name="budget"
                    value="highend"
                    checked={selectedBudget === 'highend'}
                    onChange={handleBudgetChange}
                  />
                  <span className="checkmark"></span>
                  <span className="text-dark"> High-end: </span> Over $8500
                </label>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Budget;
