import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
      id
    }
  }
}
`;


export const GET_POKEMON = gql`
query getpokemon($name: String!) {
  pokemon(name: $name) {
    id
    weight
    name
    base_experience
    moves {
      move {
        name
      }
    }
    height
    abilities {
      ability {
        name
      }
    }
    types {
      slot
      type {
        name
      }
    }
  }
}


`;
