import CardComponent from "../ui/CardComponent";
import classes from "./NewReptileGuideForm.module.css";

function NewReptileGuideForm() {
  return (
    <CardComponent>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="reptile">Reptile Type</label>
          <input type="text" required id="reptile" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Guide Description</label>
          <input type="text" required id="description" />
        </div>
        <div className={classes.control}>
          <label htmlFor="content">Guide Content</label>
          <textarea id="content" required rows="5" />
        </div>
        <div className={classes.actions}>
          <button>Add Guide</button>
        </div>
      </form>
    </CardComponent>
  );
}
export default NewReptileGuideForm;
