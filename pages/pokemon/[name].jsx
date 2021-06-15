/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Formik, Form } from "formik";
import { ButtonPrimary } from "@/component/button";
import Card from "@/component/card";
import Col from "@/component/column";
import Container from "@/component/container";
import Flex from "@/component/flex";
import Grid from "@/component/grid";
import Heading from "@/component/heading";
import Space from "@/component/space";
import { client } from "@/gql/client";
import { GET_POKEMON } from "@/gql/query";
import SEO from "@/layout/seo";
import Image from "next/image";
import { NavTab } from "@/component/nav";
import { NavItem } from "@/component/nav";
import { useContext, useState } from "react";
import { PokemonContext } from "@/provider/pokemon.provider";
import { ToastContext } from "@/provider/toast.provider";
import InputText from "@/component/input/text";
import Empty from "@/component/empty";
import Margin from "@/component/margin";

const tabs = ["Moves", "Abilities", "Type"];

export default function PokemonDetail({
  pokemon: {
    id,
    weight,
    name,
    base_experience,
    moves,
    height,
    abilities,
    types,
    sprites
  },
}) {

  const {
    back_default,
    back_shiny,
    front_default,
    front_shiny,
  } = sprites ?? {}

  const pictures = [back_default, back_shiny, front_default, front_shiny]

  const [activeTab, setActiveTab] = useState(0);
  const { open } = useContext(ToastContext);
  const [canAdd, setCanAdd] = useState(false);
  const { add, find: findPokemon } = useContext(PokemonContext);
  const [thumbnail, setThumbnail] = useState(pictures[0])

  const changeTab = (idx) => {
    setActiveTab(idx);
    document
      .getElementById(tabs[idx].toLowerCase())
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const catchPokemon = () => {
    if (Math.random() >= 0.5) {
      setCanAdd(true)
    } else {
      open("Ups I'm so sorry you failed to catch :(", "danger");
    }
  };

  if (!id) {
    return <Container>
      <Empty />
    </Container>
  }

  return (
    <>
      <SEO desc={`${name} details`} title={name} />
      <nav
        css={{
          position: "fixed",
          top: 50,
          zIndex: 11,
          backgroundColor: "white",
          boxShadow: "0 2px 1px 1px rgba(0, 0, 0, 0.1)",
          width: "100%",
          height: 50,
          maxHeight: 0,
          opacity: 0,
          transition: "all .3s linear",
          'html:not([data-scroll="0"]) &': {
            maxHeight: 50,
            opacity: 1,
          },
        }}
      >
        <Container>
          <Flex centerV height={"full"}>
            <Col col={4}>
              <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                <Heading>
                  <p className="text-center">{name}</p>
                </Heading>
              </div>
            </Col>
            <Col sm={8} md={6} lg={6}>
              <Space direction="horizontal">
                {tabs.map((data, idx) => (
                  <NavTab
                    key={idx}
                  >
                    <NavItem
                      active={idx == activeTab}
                      click={() => changeTab(idx)}
                    >{data}</NavItem>
                  </NavTab>
                ))}
              </Space>
            </Col>
          </Flex>
        </Container>
      </nav>

      <Container>
        <div className="d-flex flex-wrap">
          <Col sm={12} md={12} lg={5} xl={4}>
            <div style={{ height: 300 }}>
              <Card>
                <Image
                  src={thumbnail}
                  alt={`${name}'s image`}
                  objectFit="contain"
                  layout="fill"
                  className="border-radius"
                />
              </Card>
            </div>

            <div className="d-flex overflow-x" direction="horizontal">
                {
                  pictures.slice(1).map((url, idx) => (
                    <div key={idx} onClick={() => setThumbnail(url)} style={{flex : "0 0 100px"}} className="position-relative
                    ">
                      <Image
                        src={url}
                        width={100}
                        height={100}
                        alt={`${name}'s image`}
                        objectFit="cover"
                        className="border-radius"
                      />
                    </div>
                  ))
                }
              </div>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
                <Margin sm={"ml-0"} md={"ml-5"}>
                <Margin sm={"mt-2"} md="mt-2" lg="mt-0">
              <Heading size={2}>{name}</Heading>
            </Margin>

            <Space>
              <Flex>
                <Col col={3}>Weight</Col>
                <Col col={2}>: {weight}</Col>
              </Flex>

              <Flex>
                <Col col={3}>Height</Col>
                <Col col={2}>: {height}</Col>
              </Flex>

              <Flex>
                <Col col={3}>Base Experience</Col>
                <Col col={2}>: {base_experience}</Col>
              </Flex>

              {canAdd ? (
                <Formik
                  initialValues={{ name: "" }}
                  validate={({ name }) => {
                    const errors = {};
                    if (!name) {
                      errors.name = "Name cannot be empty.";
                    }
                    if (findPokemon(id, name)) {
                      errors.name = "Name already exists, please another name.";
                    }
                    return errors;
                  }}
                  onSubmit={({ name: custom_name }, { setSubmitting }) => {
                    add(id, { custom_name, name, id, image: pictures[0] });
                    open(`${custom_name}  has been catched`);
                    setCanAdd(false);
                  }}
                >
                  {(props) => (
                    <Form>
                      <InputText
                        name="name"
                        type="text"
                        label="Input Pokemon Name (cannot duplicate)"
                      />
                      <ButtonPrimary type="submit">
                        <Heading size=".9">Save</Heading>
                      </ButtonPrimary>
                    </Form>
                  )}
                </Formik>
              ) :
                <ButtonPrimary click={catchPokemon}>
                  <Heading size=".9">
                    <Flex centerV>
                      Catch
                    </Flex>
                  </Heading>
                </ButtonPrimary>
              }


            </Space>
                </Margin>
          </Col>
        </div>

        <div id="moves" style={{ marginTop: "3rem" }}>
          <Space>
            <Heading size="2">
              <u>Moves</u>
            </Heading>
            <Grid sm={2} md={3} xl={4}>
              {moves?.map(({ move: { name } }, idx) => {
                return <p key={idx}>{name}</p>;
              })}
            </Grid>
          </Space>
        </div>

        <div id="abilities" style={{ marginTop: "3rem" }}>
          <Space>
            <Heading size="2">
              <u>Abilities</u>
            </Heading>
            <Grid sm={2} md={3} xl={4}>
              {abilities?.map(({ ability: { name } }, idx) => {
                return <p key={idx}>{name}</p>;
              })}
            </Grid>
          </Space>
        </div>

        <div id="type" style={{ marginTop: "3rem" }}>
          <Space>
            <Heading size="2">
              <u>Type</u>
            </Heading>
            <Grid sm={2} md={3} xl={4}>
              {types?.map(({ type: { name } }, idx) => {
                return <p key={idx}>{name}</p>;
              })}
            </Grid>
          </Space>
        </div>
      </Container>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const {
    query: { name },
  } = ctx;

  const {
    data: { pokemon },
  } = await client.query({
    query: GET_POKEMON,
    variables: {
      name,
    },
  });

  return {
    props: {
      pokemon,
    },
  };
}
