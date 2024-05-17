import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card" data-tip data-for={image.id}>
      <img src={image.urls.small} alt={image.description} />
      <ReactTooltip id={image.id} place="top" effect="solid">
        <div>
          <p>
            <strong>Description:</strong>{" "}
            {image.description || "No description"}
          </p>
          <p>
            <strong>Photographer:</strong> {image.user.name}
          </p>
        </div>
      </ReactTooltip>
    </div>
  );
};

export default ImageCard;
