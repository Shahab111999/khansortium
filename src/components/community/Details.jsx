import React from "react";

const Details = ({ dets }) => {
  return (
    <div className="CommunityDetails">
      <h3>{dets.heading}</h3>
      <p>{dets.p}</p>
    </div>
  );
};

export default Details;
