import { useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

//Outputting list of Dummy data

function AllMeetupsPage () {
  //this useState is used to manage the loading of the data from the API
  const [isLoading, setIsLoading] =  useState(true);  

  //This useState will have the array of data once we fetch the data from the API
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //Fetching the data from the api on page load, here on fetch the default request is teh GET request which we currently need.
  fetch(
    'https://react-getting-started-2282b-default-rtdb.firebaseio.com/meetups.json'
  ).then(
    //now to handle the response once the fetch is made, now here we will get the response object as an argument automatically
    //Now from this response we want to body / data
    //Here we can read the data with the help of the json method, which will give access to the response data automatically converted from the json to a plain JS object. 
    //So here resonse.json() will also return promise as well so we also need to return response.json() here as well and will add another then() block, where we then get the actual data.
    response => {
      return response.json();
  }).then( data => {
    //now here we can work on the data

    //after we get the data then we will set the setIsLoading to false again
    setIsLoading(false); 

    //setting the loaded meetups data 
    setLoadedMeetups(data);
  });

  //check if we are loading then show the loading section
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  };

  //once we are done with the loading part then this actual content will be returned
  return (
      <section>
          <h1>All Meetups</h1>
          {/* here passing the loadedMeetups instead of the DUMMY_DATA */}
          <MeetupList meetups={loadedMeetups} />
      </section>
  );
}

export default AllMeetupsPage;