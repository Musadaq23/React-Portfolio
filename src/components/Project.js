import React, { useState } from "react";

function Project({ title, description, image, link }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="project">
      <div
        className="project-image"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <img src={image} alt={`${title} project`} />
      </div>
      {showInfo && (
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-links">
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
            <a href="#" className="project-details">
              View Details
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;