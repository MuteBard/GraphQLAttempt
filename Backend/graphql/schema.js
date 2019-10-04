var { buildSchema } = require('graphql');

exports.graphQLSchema = buildSchema(`
    type PokemonData {
        id : Int!
        name : String!
        type1 : String!
        type2 : String  
    }

    type RootQuery {
        pokemon : PokemonData!
    }

    schema { 
        query : RootQuery
    }
`);
