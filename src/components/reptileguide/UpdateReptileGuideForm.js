import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  updateReptileGuide,
  getReptileGuideById,
  // getReptiles,
} from "./ReptileGuideManager";
import "./ReptileGuideForm.css";

export const UpdateGameForm = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const { reptileguideId } = useParams();

  //Sets game type dropdown on page load
  const [reptiles, setReptiles] = useState([]);

  // const loadReptiles = () => {
  //   return getReptiles().then((data) => {
  //     setReptiles(data);
  //   });
  // };

  // useEffect(() => {
  //   loadReptiles();
  // }, []);

  //Sets game to be edited on page load
  const [currentReptileGuide, setReptileGuide] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    // reptileId: 0,
  });

  const loadReptileGuide = () => {
    if (reptileguideId) {
      getReptileGuideById(reptileguideId).then((data) => {
        setReptileGuide({
          id: reptileguideId,
          // reptileId: data.reptile.id,
          title: data.title,
          description: data.description,
          image: data.image,
          content: data.content,
        });
      });
    }
  };

  useEffect(() => {
    loadReptileGuide();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("currentReptileGuide", currentReptileGuide);
  }, [currentReptileGuide]);

  const handleFieldChange = (domEvent) => {
    const updatedReptileGuide = { ...currentReptileGuide };
    let selectedVal = domEvent.target.value;
    updatedReptileGuide[domEvent.target.name] = selectedVal;
    setReptileGuide(updatedReptileGuide);
  };

  return (
    <form className="reptileguideForm">
      <h2 className="reptileguide__title">
        Update Guide
      </h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            className="form-control"
            value={currentReptileGuide.title}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      {/* <fieldset>
        <div className="form-group">
          <label htmlFor="reptileId">Reptile Type</label>
          <select
            className="form-control"
            name="reptileId"
            id="reptileId"
            required
            value={currentReptileGuide.reptileId}
            onChange={handleFieldChange}
          >
            {reptiles.map((reptile) => (
              <option key={reptile.id} value={reptile.id}>
                {reptile.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset> */}

      <fieldset>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            name="url"
            id="image"
            required
            className="form-group"
            value={currentReptileGuide.image}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Guide Description</label>
          <input
            type="text"
            name="description"
            id="description"
            required
            className="form-group"
            value={currentReptileGuide.description}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Guide Content</label>
          <textarea
            type="text"
            name="content"
            id="content"
            required
            className="form-group"
            rows="5"
            value={currentReptileGuide.content}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          // adjusts code  to snake case to match back end
          const editedReptileGuide = {
            // id: reptilguideId,
            // reptile: parseInt(currentReptileGuide.reptileId),
            title: currentReptileGuide.title,
            description: currentReptileGuide.description,
            image: currentReptileGuide.image,
            content: currentReptileGuide.content,
          };

          // Send POST request to your API
          updateReptileGuide(editedReptileGuide, reptileguideId).then(() =>
            history.push("/reptileguides")
          );
        }}
        className="btn btn-primary"
        id="createBtn"
      >
        Update
      </button>
    </form>
  );
};
