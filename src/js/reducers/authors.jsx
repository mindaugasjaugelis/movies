import constants from '../constants/action-types';

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

var getMovieByKey = (key, movies) => {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].key === key) {
            return movies[i];
        }
    }
}

var getNextMovieKey = (movies) => {
    var maxKey = movies.length > 0
        ? Number(movies[0].key)
        : 1;
    for (let i = 0; i < movies.length; i++) {
        if (Number(movies[i].key) > maxKey) {
            maxKey = Number(movies[i].key);
        }
    }

    return maxKey + 1;
}

var emptyState = () => {
    return {
        authors: [],
        selectedAuthor: null
    };
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

var addMovie = (state, name) => {
    if (state.selectedAuthor == null || name === null || name === undefined || name.length === 0) {
        return;
    }

    var movie = {
        key: getNextMovieKey(state.selectedAuthor.movies),
        name: name
    };

    var authors = [...state.authors];
    var selectedAuthor = getAuthorByKey(state.selectedAuthor.key, authors);
    selectedAuthor.movies.push(movie);

    return {
        authors: authors,
        selectedAuthor: {
            key: selectedAuthor.key,
            name: selectedAuthor.name,
            movies: [...selectedAuthor.movies]
        }
    };
}

var setAsFavoriteMovie = (state, key) => {
    var authors = [...state.authors];
    var selectedAuthor = getAuthorByKey(state.selectedAuthor.key, authors);
    var movieToSetAsFavorite = getMovieByKey(key, selectedAuthor.movies);
    movieToSetAsFavorite.isFavorite = !movieToSetAsFavorite.isFavorite;

    return {
        authors: authors,
        selectedAuthor: {
            key: selectedAuthor.key,
            name: selectedAuthor.name,
            movies: [...selectedAuthor.movies]
        }
    }
}

var removeMovie = (state, key) => {
    // Delete at a specific index, no matter what value is in it
    //update(state, { items: { $splice: [[index, 1]] } });
    var authors = [...state.authors];
    var selectedAuthor = getAuthorByKey(state.selectedAuthor.key, authors);
    selectedAuthor.movies = selectedAuthor.movies.filter((m) => {
        return m.key !== key;
    });

    return {
        authors: authors,
        selectedAuthor: {
            key: selectedAuthor.key,
            name: selectedAuthor.name,
            movies: [...selectedAuthor.movies]
        }
    }
}

const authorsReducer = (state, action) => {
    if (!state) {
        state = emptyState();
    }

    switch (action.type) {
        case constants.SET_SELECTED_AUTHOR:
            return setSelectedAuthor(state, action.payload);

        case constants.SET_AS_FAVORITE_AUTHOR:
            return setAsFavoriteAuthor(state, action.payload);
        case constants.REMOVE_AUTHOR:
            return removeAuthor(state, action.payload);
        case constants.ADD_AUTHOR:
            return addAuthor(state, action.payload);

        case constants.ADD_MOVIE:
            return addMovie(state, action.payload);
        case constants.SET_AS_FAVORITE_MOVIE:
            return setAsFavoriteMovie(state, action.payload);
        case constants.REMOVE_MOVIE:
            return removeMovie(state, action.payload);

        default:
            return state;
    }
}

export default authorsReducer;