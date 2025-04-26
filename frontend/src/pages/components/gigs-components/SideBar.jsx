import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import categoryIcon from '../../../images/category-icon.svg'; // Adjust path
import CardOne from '../gigs-components/service-cards/CardOne';
import CardTwo from '../gigs-components/service-cards/CardTwo';
import CardThree from '../gigs-components/service-cards/CardThree';
import CardFour from '../gigs-components/service-cards/CardFour';
import CardFive from '../gigs-components/service-cards/CardFive';
import CardSix from '../gigs-components/service-cards/CardSix';
import CardSeven from '../gigs-components/service-cards/CardSeven';
import CardEight from '../gigs-components/service-cards/CardEight';
import CardNine from '../gigs-components/service-cards/CardNine';
import Locations from './Locations';
import SellerDetails from './SellerDetails';
import Ratings from './Ratings';
import Budget from './Budget';
import Subscription from './Subscription';
import DeliveryTime from './DeliveryTime';

const categories = [
  "Programming & Coding",
  "Data Science & Analysis",
  "Databases",
  "Mobile App Development",
  "Email Template Development",
  "CMS Development",
  "ECommerce CMS Development",
  "Programming"
];

const FilterSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="row">
      {/* Sidebar with Filters */}
      <div className="col-lg-3">
        <div className="sidebar-widget">
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            <h3>Filter</h3>
            <a href="#" className="reset-link">Reset Filter</a>
          </div>

          <div className="sidebar-body p-0">
            {/* Categories Collapse */}
            <div className="collapse-card">
              <h4 className="card-title">
                <a
                  href="#!"
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                >
                  <img src={categoryIcon} alt="icon" className="me-2" />
                  Categories
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
                        placeholder="Search Category"
                      />
                    </div>

                    <ul className="checkbox-list list-unstyled">
                      {categories.map((cat, index) => (
                        <li key={index}>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="checked-title">{cat}</span>
                          </label>
                        </li>
                      ))}

                      <li>
                        <div className="view-content">
                          <div className="view-all">
                            <a href="javascript:void(0);" className="viewall-button-one">
                              <span>More 20+ Categories</span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Additional Filters */}
            <Locations />
            <SellerDetails />
            <Ratings />
            <Budget />
            <Subscription />
            <DeliveryTime />
          </div>

          {/* Filter Button */}
          <a href="#" className="btn btn-primary w-100">
            <i className="fa-solid fa-caret-right"></i>Filter
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="col-lg-9">
        <div className="row g-3">
          {/* Displaying cards in a more compact, clear layout */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardOne />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardTwo />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardThree />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardFour />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardFive />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardSix />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardSeven />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardEight />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardNine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
