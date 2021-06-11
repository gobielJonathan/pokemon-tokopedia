/** @jsxImportSource @emotion/react */
import { breakpoints } from "@/styles/variable";
import { jsx, css } from "@emotion/react";
import facepaint from "facepaint";
import { Formik, Form } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { PokemonContext } from "provider/pokemon.provider";
import { useContext } from "react";
import { ButtonPrimary } from "../button";
import Container from "../container";
import Heading from "../heading";
import InputText from "../input/text";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default function Header() {
  const { pokemons } = useContext(PokemonContext);
  const { push } = useRouter();

  return (
    <header
      css={css`
        box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.1);
        height: 50px;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 10;
      `}
    >
      <Container>
        <div className="d-flex align-items-center h-100">
          <Link href="/pokemon">
            <p
              className="text-bold hover"
              css={css`
                font-size: 1.5rem;
                html:not([data-scroll="0"]) {
                  body {
                    color: red;
                  }
                }
              `}
            >
              Pokemon
            </p>
          </Link>

          <div
            style={{ marginLeft: 10 }}
            css={mq({
              display: ["none", "flex"],
            })}
          >
            <Formik
              initialValues={{ search: "" }}
              onSubmit={({ search }) => {
                push({ pathname: "/pokemon/[name]", query : {name : search} });
              }}
            >
              {(props) => (
                <Form>
                  <InputText name="search" type='text' placeholder="Search any pokemon" />
                </Form>
              )}
            </Formik>
          </div>

          <div className="ml-auto">
            <Link href="/pokemon/mine">
              <p className="hover">
                My Pokemon ({Object.values(pokemons).flat().length})
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
