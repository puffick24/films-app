import React from "react";
import activeStarImg from "../../images/full.svg";
import inactiveStarImg from "../../images/empty.svg";

const StarRating = ({ rating }) => {
  const stars = []

  for (let i = 0; i < 10; i++) {
    const isActive = i < rating;
    const starImg = isActive ? activeStarImg : inactiveStarImg;

    stars.push(
      <img
        key={i}
        src={starImg}
      />
    );
  }

  return <div>{stars}</div>;
}

export default StarRating;