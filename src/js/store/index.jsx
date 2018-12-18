import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const initialState = {
    authors: [{
        key: 1,
        name: "Quentin Tarantino",
        movies: [
            { key: 1, name: "Love Birds in Bondage" },
            { key: 2, name: "My Best Friend's Birthday" },
            { key: 3, name: "Reservoir Dogs" },
            { key: 4, name: "True Romance" },
            { key: 5, name: "Pulp Fiction" },
            { key: 6, name: "Natural Born Killers" }]
    }, {
        key: 2,
        name: "James Cameron",
        movies: [
            { key: 4, name: "Aliens" },
            { key: 5, name: "The Abyss" },
            { key: 6, name: "Avatar" }]
    }, {
        key: 3,
        name: "Rob Cohen",
        movies: [
            { key: 7, name: "The running man" },
            { key: 8, name: "Mummy" },
            { key: 9, name: "Stealth" },
            { key: 10, name: "Dragon heart" }]
    }]
};

var store = createStore(rootReducer, initialState);
export default store;