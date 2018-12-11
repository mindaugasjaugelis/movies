import constants from '../constants/action-types';

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

var getAuthorByKey = (key, authors) => {
    return authors[getAuthorIndexByKey(key, authors)];
}

var getAuthorIndexByKey = (key, authors) => {
    for (let i = 0; i < authors.length; i++) {
        if (authors[i].key === key) {
            return i;
        }
    }
}

var getNextAuthorKey = (authors) => {
    var maxKey = authors.length > 0
      ? Number(authors[0].key)
      : 1;
    for (let i = 0; i < authors.length; i++) {
      if (Number(authors[i].key) > maxKey) {
        maxKey = Number(authors[i].key);
      }
    }

    return maxKey + 1;
  }

var setSelectedAuthor = (state, key) => {
    if (key === undefined) {
        return;
    }

    var authors = [...state.authors];
    var selectedAuthor = getAuthorByKey(key, authors);
    return {
        authors: authors,
        selectedAuthor: selectedAuthor
    };
}

var setAsFavoriteAuthor = (state, key) => {
    if (key === undefined) {
        return state;
    }

    var authors = [...state.authors];
    var authorToSetAsFavorite = getAuthorByKey(key, authors);
    authorToSetAsFavorite.isFavorite = !authorToSetAsFavorite.isFavorite;

    return {
        authors: authors,
        selectedAuthor: state.selectedAuthor
    }
}

var removeAuthor = (state, key) => {
    if (key === undefined) {
        return state;
    }

    var authors = state.authors.filter(a => {
        return a.key !== key;
    });

    var newState = {
        authors: authors
    };

    if (state.selectedAuthor != null && state.selectedAuthor.key !== key) {
        newState.selectedAuthor = state.selectedAuthor;
    }

    return newState;
}

var addAuthor = (state, name) => {
    if (name === null || name === undefined || name.length === 0) {
        return state;
    }

    var author = {
        key: getNextAuthorKey(state.authors),
        name: name,
        movies: []
    };

    var authors = [...state.authors, author];
    return {
        authors: authors,
        selectedAuthor: author
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_SELECTED_AUTHOR:
            return setSelectedAuthor(state, action.payload);
        case constants.SET_AS_FAVORITE_AUTHOR:
            return setAsFavoriteAuthor(state, action.payload);
        case constants.REMOVE_AUTHOR:
            return removeAuthor(state, action.payload);
        case constants.ADD_AUTHOR:
            return addAuthor(state, action.payload);
        default:
            return state;
    }
}

export default rootReducer;