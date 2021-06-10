import { PokemonContext } from "@/provider/pokemon.provider";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import Badge from "../badge";
import { RoundedBox } from "../box";
import Card from "../card";
import { TextRed } from "../text";

export default function PokemonCard({ data: { id, name, image } }) {
  const { push } = useRouter();
  const { pokemons } = useContext(PokemonContext);

  return (
    <Card
    >
      {pokemons[id] && (
        <Badge position="right">
          {Object.values(pokemons[id]).flat().length}
        </Badge>
      )}
      <div onClick={() => push({
          pathname: "/pokemon/[name]",
          query: {
            name,
            image,
          },
        })} className="position-relative d-flex justify-content-center">
        <Image alt={`${name}'s image`} objectFit="contain" src={image} width={350} height={350} />
      </div>
      <p className="text-bold">{name}</p>
    </Card>
  );
}

export function MyPokemonCard({ data: { id, name, image, custom_name } }) {
  const { push } = useRouter();
  const {remove} = useContext(PokemonContext)

  return (
    <Card
    >
      <RoundedBox click={() => remove(id, custom_name)}>
        <TextRed>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </TextRed>
      </RoundedBox>
      <div onClick={
        () =>  push({
          pathname: "/pokemon/[name]",
          query: {
            name,
            image,
          },
        })
      } className="position-relative d-flex justify-content-center">
        <Image alt={`${name}'s image`} objectFit="contain" src={image} width={350} height={350} />
      </div>
      <p className="text-bold">
        {custom_name} / {name}
      </p>
    </Card>
  );
}
