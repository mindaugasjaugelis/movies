import constants from '../constants/action-types';

export const setSelectedAuthor = key => ({
    type: constants.SET_SELECTED_AUTHOR,
    payload: key
});

export const setAsFavoriteAuthor = key => ({
    type: constants.SET_AS_FAVORITE_AUTHOR,
    payload: key
});

export const removeAuthor = key => ({
    type: constants.REMOVE_AUTHOR,
    payload: key
});

export const addAuthor = name => ({
    type: constants.ADD_AUTHOR,
    payload: name
});