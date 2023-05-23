import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage () {

    //here this function addMeetupHandler will get the meetupData from the NewMeetupForm.js passing props. 
    function addMeetupHandler(meetupData) {
        
    }

    return <section>
        <h1>Add new Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;