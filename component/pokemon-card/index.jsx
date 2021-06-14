/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import { useContext } from "react";
import { PokemonContext } from "@/provider/pokemon.provider";
import Image from "next/image";
import { useRouter } from "next/router";
import Badge from "../badge";
import { RoundedBox } from "../box";
import Card from "../card";
import { TextRed } from "../text";

const colors = ["#ffc074", "#b6c867", "#01937c", "#5e8b7e", "#e99497"]

export default function PokemonCard({ data: { id, name, image } }) {
  const { push } = useRouter();
  const { get } = useContext(PokemonContext);

  return (
    <Card>
      <Badge position="right">
        <span data-testid="pokemon-counter">{get(id)} owned</span>
      </Badge>
      <div css={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 40,
        height: 32,
        borderBottomRightRadius: "50%",
        color: "white",
        display: "flex",
        borderTopLeftRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors[parseInt(Math.random() * colors.length)]
      }}>
        #{id}
      </div>
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
    <Card>
      <RoundedBox click={() => remove(id, custom_name)}>
        {/* <TextRed> */}
          <i className="fa fa-trash" aria-hidden="true"></i>
        {/* </TextRed> */}
      </RoundedBox>
      <div css={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 40,
        height: 32,
        borderBottomLeftRadius: "50%",
        color: "white",
        display: "flex",
        borderTopRightRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors[parseInt(Math.random() * colors.length)]
      }}>
        #{id}
      </div>
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
