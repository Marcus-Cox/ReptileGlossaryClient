import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createReptileGuide, getReptiles } from "./ReptileGuideManager.js";
import "./ReptileGuideForm.css";

export const NewReptileGuideForm = () => {
  const history = useHistory();
  const [reptiles, setReptiles] = useState([]);

  const [currentReptileGuide, setReptileGuide] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    reptileId: 0,
  });

  const getReptileTypes = () => {
    return getReptiles().then((data) => {
      setReptiles(data);
    });
  };

  useEffect(() => {
    getReptileTypes();
  }, []);

  const changeReptileGuideState = (domEvent) => {
    const newReptileGuide = { ...currentReptileGuide };
    let selectedVal = domEvent.target.value;
    newReptileGuide[domEvent.target.id] = selectedVal;
    setReptileGuide(newReptileGuide);
  };

  return (
    <form className="reptileguideForm">
      <h2 className="reptileguideForm__title"> New Guide</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            className="form-control"
            value={currentReptileGuide.title}
            onChange={changeReptileGuideState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="reptileId">Reptile Type</label>
          <select
            className="form-control"
            name="reptileId"
            id="reptileId"
            required
            value={currentReptileGuide.reptileId}
            onChange={changeReptileGuideState}
          >
            <option value="0">Please select ...</option>
            {reptiles.map((reptile) => (
              <option key={reptile.id} value={reptile.id}>
                {reptile.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="imageurl">Image URL</label>
          <input
            type="text"
            name="url"
            id="imageurl"
            required
            className="form-group"
            value={currentReptileGuide.image}
            onChange={changeReptileGuideState}
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
            onChange={changeReptileGuideState}
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
            onChange={changeReptileGuideState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const newReptileGuide = {
            id: currentReptileGuide.id,
            title: currentReptileGuide.title,
            image: currentReptileGuide.image,
            reptile: parseInt(currentReptileGuide.reptileId),
            description: currentReptileGuide.description,
            content: currentReptileGuide.content,
          };

          createReptileGuide(newReptileGuide).then(() =>
            history.push("/reptileguides")
          );
        }}
        className="btn btn-primary"
        id="createBtn"
      >
        Add Guide
      </button>
    </form>
  );
};
