import Container from "@/component/container";
import Grid from "@/component/grid";
import Shimmer from "@/component/loading/shimmer";
import PokemonCard from "@/component/pokemon-card";
import { client } from "@/gql/client";
import { GET_POKEMONS } from "@/gql/query";
import SEO from "@/layout/seo";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Index({ pokemons: { results } }) {
  const [pokemons, setPokemons] = useState(results);
  const [getPokemon, { loading, data, error }] = useLazyQuery(GET_POKEMONS);

  if (error) return `Error! ${error.message}`;

  let page = 0;

  useEffect(() => {
    if (data) {
      const {
        pokemons: { results },
      } = data;
      setPokemons([...pokemons, ...results]);
    }
  }, [data]);

  const scrollListener = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      if (!loading) {
        getPokemon({ variables: { limit: 20, offset: (page += 10) } });
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <SEO desc="list all pokemons" title="Pokemon" />
      <Container>
        <Grid sm={1} md={4}>
          {pokemons?.map((data, idx) => (
            <PokemonCard key={idx} data={data} />
          ))}
        </Grid>

        {loading && <Shimmer />}
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
      limit: 20,
      offset: 0,
    },
  });

  return {
    props: {
      pokemons,
    },
  };
}
