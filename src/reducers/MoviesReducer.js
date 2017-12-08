import {
    MOVIES_REQUEST,
    MOVIES_SUCCESS,
    MOVIES_FAILURE,
    MOVIE_SELECT,
} from '../constants/actionTypes';
import initialState from './initialState';


export default function moviesReducer(state = initialState.movies, action) {
    switch (action.type) {
        case MOVIES_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
          };

        case MOVIES_SUCCESS:
            return {
              isLoading: false,
              error: null,
              data: action.data,
          };

        case MOVIES_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.data,
          };
        case MOVIE_SELECT:
            return {
            ...state,
            selectedMovie: action.selectedMovie
        };

        default:
            return state;
    }
}
