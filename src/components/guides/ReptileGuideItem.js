import CardComponent from '../ui/CardComponent'
import classes from './ReptileGuideItem.module.css'

function ReptileGuideItem(props) {
    return <li className={classes.item}>
        <CardComponent>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
            <h3>{props.title}</h3>
            <h1>{props.writer}</h1>
            <p>{props.reptile}</p>
            <h2>{props.description}</h2>
            <p>{props.content}</p>
            <p>{props.publishing_date}</p>
        </div>
        <div className={classes.actions}>
        <button>To Favorites</button>
        </div>
        </CardComponent>
    </li>
}

export default ReptileGuideItem