import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./ReptileGuideCard.css";

export const ReptileGuideCard = ({ reptileguide, delReptileGuide }) => {
// eslint-disable-next-line
  const history = useHistory();

  return (
    <section key={`reptileguide--${reptileguide.id}`} className="reptileguide">
      <div className="reptileguide__title">{reptileguide.title}</div>

      <div className="reptileguide__description">
        {reptileguide.description}
      </div>

      <div className="reptileguide__image">{reptileguide.image}</div>

      <div className="reptileguide__content">{reptileguide.content}</div>
      <div className="buttons">
        <Link to={`reptileguides/${reptileguide.id}/update`}>
          <button className="cardBtn">Edit</button>{" "}
        </Link>
        
        <button
          className="cardBtn"
          onClick={() => {
            delReptileGuide(reptileguide.id);
          }}
        >
          Delete
        </button>
      </div>
    </section>
  );
};
