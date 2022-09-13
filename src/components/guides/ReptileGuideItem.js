import classes from './ReptileGuideItem.module.css'

function ReptileGuideItem(props) {
    return <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
            <h3>{props.title}</h3>
            <h1>{props.writer}</h1>
            <h2>{props.description}</h2>
            <p>{props.content}</p>
            <p>{props.publishing_date}</p>
        </div>
        <div className={classes.actions}>
        <button>To Favorites</button>
        </div>
    </li>
}

export default ReptileGuideItem