//to navigate through after the form send to another page we will use the useNavigate hook from the react-router-dom
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage () {

    //This navigate object exposes certain methods to us to manipulate the browser history, to navigate a way for something 
    const navigate = useNavigate();

    //here this function addMeetupHandler will get the meetupData from the NewMeetupForm.js passing props. 
    function addMeetupHandler(meetupData) {
        //Now inside this function we will send an HTTP request using fetch()
        //This is a default Js function built into JS supported in modern browser which allows us to send an HTTP request
        //For now we are not using any 3rd party library such as axios, because for now we just want it to be simple.
        //Now fetch() will take the first argument as string which is basically url to which we want to send a request
        //Now this below url can be manipulated and can segments after this 'firebaseio.com/' domain and these segments will be translated into folders or tables in the database, so here we have crated the meetups table which is meetups.json amd also we will add .json extension to the end as well.
        //Now to send the stored data, we must send the 'POST' request since the default behavior is to recieve teh 'GET' request.
        //here fetch returns the promise which resolves as soon as it is done, we will execute the then() block as soon as the promise is completed
        fetch(
            'https://react-getting-started-2282b-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            //here we will be navigated back to the starting page which here is the first page which is '/' also in this case after re-direction to another page the back button of the browser won't work.
            navigate('/', { replace: true });
        });
    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;