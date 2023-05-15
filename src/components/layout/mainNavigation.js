import { Link } from 'react-router-dom'; 

//here classes is actually a JS object where all the css classes defined  in the css file will be properties of this classes object, which then can be used in the JSX code and attach those classes to the elements and behind the scenes everything will be transformed as such that those class names are made unique per component eg - className={classes.header}
import classes from './mainNavigation.module.css';

//This is a header for the page

function MainNavigation () {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        {/* Here link is acting like a anchor tag which in browser will look as anchor */}
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;