import React from "react";
import activeStarImg from "../../images/full.svg";
import inactiveStarImg from "../../images/empty.svg";
import halfStarImg from "../../images/halfStar.svg";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const stars = []

  for (let i = 0; i < 10; i++) {
    let starImg = inactiveStarImg;

    if (i < fullStars) {
      starImg = activeStarImg;
    } else if (i === fullStars && decimal >= 0.8) {
      starImg = activeStarImg;
    } else if (i === fullStars && decimal >= 0.3) {
      starImg = halfStarImg;
    }
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