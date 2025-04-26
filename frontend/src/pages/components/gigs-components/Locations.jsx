import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import locationIcon from '../../../images/map-icon.svg'; // Adjust path if needed

const locations = [
  'Canada', 'Bolivia', 'Tunsania', 'Indonesia', 'UK', 'UAE', 'USA', 'Malaysia', 'Japan'
];

const Locations = () => {
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="collapse-card">
      <h4 className="card-title">
        <a
          href="#!"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <img src={locationIcon} alt="icon" className="me-2" />
          Locations
        </a>
      </h4>

      <Collapse in={open}>
        <div>
          <div className="collapse-body">
            <div className="form-group search-group position-relative">
              <span className="search-icon position-absolute top-50 translate-middle-y">
                <i className="feather-search"></i>
              </span>
              <input
                type="text"
                className="form-control ps-4"
                placeholder="Search Locations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <ul className="checkbox-list list-unstyled">
              {filteredLocations.map((location, index) => (
                <li key={index}>
                  <label className="custom_check">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="checked-title">{location}</span>
                  </label>
                </li>
              ))}

              <li>
                <div className="view-content">
                  <div className="view-all">
                    <a href="javascript:void(0);" className="viewall-button-one">
                      <span>More 20+ Locations</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Locations;
