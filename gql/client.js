import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    // uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    link: new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql", fetch }),
    cache: new InMemoryCache(),
});