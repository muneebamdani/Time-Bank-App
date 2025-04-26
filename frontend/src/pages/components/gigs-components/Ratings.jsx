import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import ratingIcon from '../../../images/rating-icon.svg'; // Adjust the path as needed

const ratingsData = [
  { stars: 5, rating: 5.0 },
  { stars: 4, rating: 4.0 },
  { stars: 3, rating: 3.0 },
  { stars: 2, rating: 2.0 },
  { stars: 1, rating: 1.0 },
];

const Ratings = () => {
  const [open, setOpen] = useState(true);

  const renderStars = (stars) => {
    const filled = Array(stars).fill('fa-solid fa-star filled');
    const empty = Array(5 - stars).fill('fa-solid fa-star');
    return [...filled, ...empty].map((cls, i) => (
      <i key={i} className={cls}></i>
    ));
  };

  return (
    <div className="collapse-card">
      <h4 className="card-title">
        <a
          href="#!"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <img src={ratingIcon} alt="icon" className="me-2" />
          Ratings
        </a>
      </h4>

      <Collapse in={open}>
        <div>
          <div className="collapse-body">
            <ul className="checkbox-list star-rate list-unstyled">
              {ratingsData.map((item, index) => (
                <li key={index}>
                  <label className="custom_check">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="ratings">
                      {renderStars(item.stars)}
                    </span>
                    <span className="rating-count">({item.rating})</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Ratings;
