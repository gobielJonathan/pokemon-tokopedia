import { client } from "@/gql/client";
import { ApolloProvider } from "@apollo/client";
import { PokemonProvider } from "./pokemon.provider";
import ToastProvider from "./toast.provider";

export default function Provider({ children }) {
  return (
   <ApolloProvider client={client}>
      <ToastProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </ToastProvider>
   </ApolloProvider>
  );
}
