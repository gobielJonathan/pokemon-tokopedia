import Container from "@/component/container";
import Empty from "@/component/empty";
import Grid from "@/component/grid";
import { MyPokemonCard } from "@/component/pokemon-card";
import SEO from "@/layout/seo";
import { PokemonContext } from "@/provider/pokemon.provider";
import { useContext } from "react";

export default function PokemonMine() {
  const { pokemons } = useContext(PokemonContext);

  if (Object.keys(pokemons).length == 0) {
    return <Container>
      <Empty />
    </Container>
  }

  return (
    <>
      <SEO title="My Pokemon List" desc={"my collection of pokemon"} />
      <Container>
        <Grid sm={1} md={4}>
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
