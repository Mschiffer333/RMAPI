import { combineReducers } from 'redux';
import getCharacters from './ReducerCharacters';
import getEpisodes from './ReducerEpisodes';
import getLocations from './ReducerLocations';
import search from './ReducerSearch';

//With reducers  we can determine changes on an application
//state. Here it is the main reducer, and then we use
//actions on the other reducers (Characters, Episodes, Locations and Search)

const rootReducer = combineReducers({
  characters: getCharacters,
  episodes: getEpisodes,
  locations: getLocations,
  searchResults: search,
});

export default rootReducer;
