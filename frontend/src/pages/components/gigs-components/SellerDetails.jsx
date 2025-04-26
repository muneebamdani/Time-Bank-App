import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import userIcon from '../../../images/user-icon.svg'; // Adjust path if needed

const sellerDetails = [
  'Seller Level',
  'Seller Availability',
  'Seller Speaks',
  'Seller Lives in',
];

const SellerDetails = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="collapse-card">
      <h4 className="card-title">
        <a
          href="#!"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <img src={userIcon} alt="icon" className="me-2" />
          Seller Details
        </a>
      </h4>

      <Collapse in={open}>
        <div>
          <div className="collapse-body">
            <ul className="seller-list list-unstyled">
              {sellerDetails.map((label, index) => (
                <li key={index}>
                  <a href="#!">
                    {label}
                    <span>
                      <i className="feather-chevron-right"></i>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SellerDetails;
