import Container from "@/component/container";
import Grid from "@/component/grid";
import { MyPokemonCard } from "@/component/pokemon-card";
import SEO from "@/layout/seo";
import { PokemonContext } from "@/provider/pokemon.provider";
import { useContext } from "react";

export default function Index() {
  const { pokemons } = useContext(PokemonContext);

  return (
    <>
      <SEO title="My Pokemon List" desc={"my collection of pokemon"} />
      <Container>
        <Grid sm={12} md={4}>
          {Object.values(pokemons)
            .flat()
            .map((data, idx) => (
              <MyPokemonCard key={idx} data={data} />
            ))}
        </Grid>
      </Container>
    </>
  );
}
