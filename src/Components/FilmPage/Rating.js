import React from "react";

import FullStar from "../../images/FullStar";
import EmptyStar from "../../images/EmptyStar";
import HalfStar from "../../images/HalfStar";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const stars = []
  
  const Rating = () => {
    for (let i = 0; i < 10; i++) {
      let Star = EmptyStar;
  
      switch(true) {
        case i < fullStars:
          Star = FullStar;
          break
        case i === fullStars && decimal >= 0.8:
          Star = FullStar;
          break
        case i === fullStars && decimal >= 0.3:
          Star = HalfStar;
          break
      }
      stars.push(
        <Star key = {i} alt = 'Star'/>
      );
    }
    return <div>{stars}</div> 
  }
  


  return Rating()
  }

export default StarRating;