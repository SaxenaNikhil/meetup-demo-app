
//useEffect is a hook that allows you to run some code under certain conditions
import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

//Outputting list of Dummy data

function AllMeetupsPage () {
  //this useState is used to manage the loading of the data from the API
  const [isLoading, setIsLoading] =  useState(true);  

  //This useState will have the array of data once we fetch the data from the API
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //this useEffect takes two arguments, first is an annonymous arrow function and the second argument is an array of dependencies
  //So inside of the first arrow function we can execute our fetch code here, but this first argument will be executed by react on our behalf but only under certain circumstances
  //now with the help of useEffect we will restrict this fetch and define the conditions to when it should run, so that it does not always run 
  //Now for the second argument added, react will check the values added to this array and compare them to their equivalence, when this useEffect function was executed the last time
  //In the second argument which is dependencies array you should add all the external values in which your useEffect function relies on but in this case we don't have any external values, where fetch function is the built in browser function and other than that we didn't use any state or prop values in this effect function that would belong to our component. Now for example if we are somehow getting the url from the props then in that case props would become the dependency, where without this the useEffect won't execute until it gets it. 
  //Technically we can add setIsLoading and setLoadedMeetups to dependencies section since these function are external dependencies and whenever these function change the useEffect should run again because these function might do different things. But in this case react guarantees that these state updating functions will never change and they will always do exactly the same thing, so they are allowed to be omitted from the dependencies argument.
  //Since we don't have any external dependencies so that the dependencies will remain empty in the second argument of the useEffect function, which means that this fetch function code will only run once when this component is rendered for the first time. 
  useEffect(() => {

    //now setting the setIsLoading to true so that whenever this useEffect function is run again then we set this to true as the then block will set the setIsLoading to false after the promise.
    setIsLoading(true);

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
      
      //transforming the object data that we got from the API to array
      const meetups = [];
      
      //looping throught the keys in data
      for (const key in data) {
        //here we will create a new meetup here for every key in which we loop, so for every meetup which is stored in firebase
        //here we are distributing the data key into this object which is spread operator ...data, the default Js operator which will copy all the key value pair of this nested object into this meetup object 
        const meetup = {
          id: key,
          ...data[key]
        };

        //here we are pushing this meetup onto this meetups helper array here
        meetups.push(meetup)
      }

      //after we get the data then we will set the setIsLoading to false again
      setIsLoading(false); 

      //setting the loaded meetups data 
      setLoadedMeetups(meetups);
    });
  }, [])

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