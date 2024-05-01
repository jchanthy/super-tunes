import React from "react";
import PropTypes from "prop-types";

const Rating = ({stars}) => {
  return <div className="rating">
    {
      [...Array(Math.round(stars <=5 ? stars : 0)).keys()].map((_, index) => {
        return <div key={index} className="star"></div>
      })
    }
  </div>;
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
}

export default Rating;
