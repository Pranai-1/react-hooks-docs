"use client";

import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const getRatingCategory = (rating: number) => {
    if (rating <= 3) return "Low Rating 😞";
    if (rating <= 7) return "Moderate Rating 🙂";
    return "High Rating 😃";
  };

  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"15px",
        flexWrap: "wrap", 
        
    }}>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((rating) => (
        <div key={rating} >
          <button
          style={{
            backgroundColor:selectedRating === rating ? "blue" : "yellow",
            padding:"10px 20px",
            borderRadius:"1rem"
          }}
            data-tooltip-id="rating-tooltip"
            data-tooltip-content={getRatingCategory(rating)}
            onClick={() => setSelectedRating(rating)}
          >
            {rating}
          </button>
        </div>
      ))}
      <Tooltip id="rating-tooltip" place="top" />
      
    </div>
  );
}
