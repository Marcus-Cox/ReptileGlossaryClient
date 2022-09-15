import { useRef } from "react";
import CardComponent from "../ui/CardComponent";
import classes from "./NewReptileGuideForm.module.css";

function NewReptileGuideForm() {
  const titleInputRef = useRef();
  const reptileInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const contentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredReptile = reptileInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

    const reptileGuideData = {
      title: enteredTitle,
      reptile: enteredReptile,
      image: enteredImage,
      description: enteredDescription,
      content: enteredContent,
    };
    console.log(reptileGuideData);
  }
  return (
    <CardComponent>
      <form className={classes.form}>
        <div className={classes.control} onSubmit={submitHandler}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="reptile">Reptile Type</label>
          <input type="text" required id="reptile" ref={descriptionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Guide Description</label>
          <input type="text" required id="description" ref={descriptionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="content">Guide Content</label>
          <textarea id="content" required rows="5" ref={contentInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Guide</button>
        </div>
      </form>
    </CardComponent>
  );
}
export default NewReptileGuideForm;
