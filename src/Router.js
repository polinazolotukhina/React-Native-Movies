import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CinemaMovies from './components/CinemaMovies';
import PopularMovies from './components/PopularMovies';
import KidsMovies from './components/KidsMovies';
import DramaMovies from './components/DramaMovies';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar';


const RouterComponent = () => (
    <Router>
        <Scene>
            <Scene key="navbar" component={Navbar} title="Menu" />
            <Scene key="cinemaMovies" component={CinemaMovies} title="In Cinema Now" />
            <Scene key="popularMovies" component={PopularMovies} title="Popular Movies" />
            <Scene key="kidsMovies" component={KidsMovies} title="Kids Movies" />
            <Scene key="dramaMovies" component={DramaMovies} title="Best Drama" />
            <Scene key="search" component={Search} title="Search" />
            <Scene key="favourites" component={Favourites} title="Favourites" />
        </Scene>
    </Router>
);
export default RouterComponent;
