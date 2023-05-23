import { useRef } from "react";

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

//we are using props on this NewMeetupForm to send the data from this component to the parent component
function NewMeetupForm (props) {

    //using refs / references to DOM elements to get the direct access to DOM element for this we will use 'useRef' hook from react.
    //here we will store the ref value in the titleInputRef and to connect this titleInputRef with the input field we will a special prop on the input field which is ref and will point it to the variable titleInputRef.
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    //a function to trigger the onSubmit form on button click
    function submitHandler(event) {
        event.preventDefault();

        //get the value that the user entered
        //for titleInputRef.current.value to get all those ref object created with useRef were as such that they use the current property and it holds the actual connected value of the input
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        //Note - Do not use ref to change the existing value of the user input, only use the ref to read the user input data but to change the value use the 'useState' concept.

        //storing the entered value in the meetupData
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        //Here we will then send the data to the server which then stores the data in the database, so we will be sending this data using props to the parent component which in this case is NewMeetup.js file.
        // console.log(meetupData);
        //Now on props, we have some prop which actually get a function as a value, so we will make a custom function here which here is onAddMeetup and it will take the meetupData as an argument.
        props.onAddMeetup(meetupData); 
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup Image</label>
                <input type="text" required id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea required id="description" rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;