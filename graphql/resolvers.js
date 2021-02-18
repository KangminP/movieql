// import { getById, getMovies, addMovie, deleteMovie } from "./db"

// const resolvers = {
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, {id}) => getById(id)
//     },
//     Mutation: {
//         addMovie: (_, {name, score}) => addMovie(name, score),
//         deleteMovie: (_, {id}) => deleteMovie(id)
//     }
// }

// export default resolvers

import { getMovies, getMovie, geSuggestions } from "./db"

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => geSuggestions(id)
    }
}

export default resolvers