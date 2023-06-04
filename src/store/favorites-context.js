//it is a function exposed by react library, where it creates a context
import { createContext, useState } from "react";

//this createContext is a JS object 
//here we are starting the name of variable with capital letter because this object which is created by context actually will contain a react component
//here createContext also takes the argument and that argument is the inital value for that context 
//this is a context data
const FavoritesContext =  createContext({
    favorites: [],
    totalFavorites: 0
});

//this component will be a regular react component, it will have the job of providing context to all the components that are interested in listening to the values from the context and it will also be responsible for updating the context values
//this 'FavoritesContextProvider' will accept props and we will simply wrap this '<FavoritesContext.Provider>' component which we get from the 'FavoritesContext' object around props children.
function FavoritesContextProvider(props) {
    
    //we can manage some state here in the 'FavoritesContextProvider' and we can manage an array of favorited meetups here
    const [userFavorites, setUserFavorites] = useState([]);

    //Now we just need a way of changing our state here, now we can do this with function
    //this favoriteMeetup is the item which is been selected to mark as favorite.
    function addFavoriteHandler(favoriteMeetup) {

        //Since we want the update to reflect instantly so basically we depend on the last state snapshot, so here we will pass the function in the setUserFavorites, where we will take the previous state snapshot and will return the updated state here
        setUserFavorites((prevUserFavorites) => {

            //Here this prevUserFavorites will guarantee that we get the latest state snapshot, because react will execute these functions which we pass through these state updating functions in the correct order 
            //This is a better way to updating the state if we depend on the previous version of that state
            //Here concat returns the new version of the array after pushing/adding the new data. 
            return prevUserFavorites.concat(favoriteMeetup);
        }); 
    }
    
    //Here in this removeFavoriteHandler, we will expect the meetupId, which will identify the meetup which should be removed 
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {

            //Here filter returns a new array where we can filter out the items, and i want to filter out the items where the meetup id matches the id which we are getting as a parameter from the function
            //Here filter() is a built in method which takes a function as a argument and executes for every item in this prevUserFavorites array and we get that item as a parameter and then we have to return 'true' if we want to keep that item or 'false' if we want to get rid of it, in that new array which is returned. And here we want to return true if 'meetup.id' is not equal to meetupId that i get as a parameter. So if its equal we will return false here, which means we drop the item where the id is found to be equal that means that the returned array will be missing the item which has this 'meetupId', which is what we need here since we want to remove the item.
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    //This function will later help us determine whether the given item is a favorite item or not 
    //If the itemIsFavoriteHandler, i just want to return a response here or return a value where i want to check whether the item with a given id is part of our favorites and for this we don't need to update any states as its just a helper function, where i return userFavorites.some(). Here 'some()' is another built in method in vanila JS, which also wants a function as a argument which executes for every item in a array and this function should return true or false, and if atleast one of the items in the array returns true or false with that function and that allows us to findout if some item in this array matches our condition here - 'meetup.id === meetupId' 
    //So here we will return true if we have meetup with that id in our userFavorites 
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    //we will create this context object and will pass this as a value to the '<FavoritesContext.Provider>'
    //this context object now has favorites key and we are setting it to userFavorites which is a current state snapshot as a value, so when the state changes then this userFavorites value will change and then we will have the new context object and will pass this new updated context object to all the components that are wrapped by this provider in the end 
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    }

    return (
        //This is provider / provider component
        //'<FavoritesContext.Provider>' this is a component that 'FavoritesContext' object has built in and this '<FavoritesContext.Provider>' provider component needs to be wrapped around all the components that are interested in interacting with that context 
        //here we pass the current context value to the provider below as the value because we want to update the context values and pass the latest values with help of the value prop. And whenever the value changes, all components that are listening to our context will be updated in the end.
        //So now we just need to derive it context objects and its values dynamically where 'useState' comes into play
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}