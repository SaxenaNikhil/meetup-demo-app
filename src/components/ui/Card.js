import classes from './Card.module.css';

function Card (props) {
    return  (
        // prop.children is a special prop which every component recieves by default and also children always hold the content which is passed between the opening and closing component tag. And now we are outputting the value stored in the children which is MeetupItem li inner data between these Card div tag mentioned below.
        <div className={classes.card}>{ props.children }</div>
    );
}

export default Card;