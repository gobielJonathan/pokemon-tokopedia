import Container from "@/component/container";
import Grid from "@/component/grid";
import PokemonCard from "@/component/pokemon-card";
import { client } from "@/gql/client";
import { GET_POKEMONS } from "@/gql/query";
import SEO from "@/layout/seo";

export default function Index({ pokemons: { results: pokemons } }) {
  return (
    <>
      <SEO desc="list all pokemons" title="Pokemon" />
      <Container>
        <Grid sm={1} md={4}>
          {pokemons?.map((data, idx) => (
            <PokemonCard key={idx}  data={data} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const {
    data: { pokemons },
  } = await client.query({
    query: GET_POKEMONS,
    variables: {
      limit: 50,
      offset: 0,
    },
  });

  return {
    props: {
      pokemons,
    },
  };
}
