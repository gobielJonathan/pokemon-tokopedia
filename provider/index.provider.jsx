import { PokemonProvider } from "./pokemon.provider";
import ToastProvider from "./toast.provider";

export default function Provider({ children }) {
  return (
    <ToastProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </ToastProvider>
  );
}
