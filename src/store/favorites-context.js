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