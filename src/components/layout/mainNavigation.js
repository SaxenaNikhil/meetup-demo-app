import { Link } from 'react-router-dom'; 

//This is a header for the page

function MainNavigation () {
    return (
        <header>
            <div>React Meetups</div>
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