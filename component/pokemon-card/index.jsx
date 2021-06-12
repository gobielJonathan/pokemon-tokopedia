import { useContext } from "react";
import { PokemonContext } from "@/provider/pokemon.provider";
import Image from "next/image";
import { useRouter } from "next/router";
import Badge from "../badge";
import { RoundedBox } from "../box";
import Card from "../card";
import { TextRed } from "../text";

export default function PokemonCard({ data: { id, name, image } }) {
  const { push } = useRouter();
  const { get } = useContext(PokemonContext);

  return (
    <Card>
      <Badge position="right">
          <span data-testid="pokemon-counter">{get(id)} owned</span>
        </Badge>
      <div onClick={() => push({
        pathname: "/pokemon/[name]",
        query: {
          name,
        },
      }, undefined, { scroll: false })} data-testid="pokemon-redirect" className="position-relative d-flex justify-content-center">
        <Image alt={`${name}'s image`} objectFit="contain" src={image} width={350} height={350} />
      </div>
      <div data-testid="pokemon-name" className="text-bold">{name}</div>
    </Card>
  );
}

export function MyPokemonCard({ data: { id, name, image, custom_name } }) {
  const { push } = useRouter();
  const { remove } = useContext(PokemonContext)

  return (
    <Card
    >
      <RoundedBox click={() => remove(id, custom_name)}>
        <TextRed>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </TextRed>
      </RoundedBox>
      <div onClick={
        () => push({
          pathname: "/pokemon/[name]",
          query: {
            name,
            image,
          },
        }, undefined, { scroll: false })
      } data-testid="pokemon-redirect" className="position-relative d-flex justify-content-center">
        <Image alt={`${name}'s image`} objectFit="contain" src={image} width={350} height={350} />
      </div>
      <p className="text-bold">
        <span data-testid="custom-pokemon-name">{custom_name}</span> / <span data-testid="pokemon-name">{name}</span>
      </p>
    </Card>
  );
}
