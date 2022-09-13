import ReptileGuideItem from "./ReptileGuideItem";
import classes from "./ReptileList.module.css";

function ReptileList(props) {
  return (
    <ul className={classes.list}>
      {props.reptileguides.map((reptileguide) => (
        <ReptileGuideItem
        key={reptileguide.id}
        id={reptileguide.id}
        writer={reptileguide.writer}
        reptile={reptileguide.reptile}
        title={reptileguide.title}
        image={reptileguide.image}
        description={reptileguide.description}
        content={reptileguide.content}
        publishing_date={reptileguide.publishing_date} 
        />
      ))}
    </ul>
  );
}

export default ReptileList;
