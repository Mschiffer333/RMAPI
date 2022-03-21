import axios from 'axios';
export const apiCharacters = 'apiCharacters';
export const apiEpisodes = 'apiEpisodes';
export const apiLocations = 'apiLocations';
export const SEARCH = 'SEARCH';


//I think is more easy to declare a variable with the URL API,
//so I can call it only with the variable in the functions.
//RMAPI means Rick Morty API
const ROOT_URL = 'https://rickandmortyapi.com/api/'

//For this excersise I used AXIOS,  is a good library for HTTP requests
//and responses.

export function getCharacters(page) {
    let characters;
    if(page) {
        characters = axios.get(`${ROOT_URL}character?page=${page}`);
    } else {
        characters = axios.get(`${ROOT_URL}character`);
    }
    return {
        type: apiCharacters,
        payload: characters
    }
}

export function getEpisodes(page) {
    let episodes;
    if(page) {
        episodes = axios.get(`${ROOT_URL}episode?page=${page}`);
    } else {
        episodes = axios.get(`${ROOT_URL}episode`);
    }
    return {
        type: apiEpisodes,
        payload: episodes,
    }
}

export function getLocations(page) {
    let locations;
    if(page) {
        locations = axios.get(`${ROOT_URL}location?page=${page}`);
    } else {
        locations = axios.get(`${ROOT_URL}location`);
    }
    return {
        type: apiLocations,
        payload: locations,
    }
}

export function search(category, term, next) {
    let searchUrl;
    if(next) {
        searchUrl = axios.get(next);
    } else {
        searchUrl = axios.get(`${ROOT_URL}${category}?name=${term}`);
    }
    return {
        type: SEARCH,
        payload: searchUrl,
    }
}