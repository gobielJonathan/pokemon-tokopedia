
/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { GET_POKEMONS } from '@/gql/query';
import PokemonCard from '@/component/pokemon-card';
import { getPage } from 'next-page-tester';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

afterEach(() => {
    cleanup()
})

const mocks = [
    {
        request: {
            query: GET_POKEMONS,
            variables: {
                "limit": 2,
                "offset": 2
            },
        },
        result: {
            "pokemons": {
                "count": 1118,
                "next": "https://pokeapi.co/api/v2/pokemon/?offset=4&limit=2",
                "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2",
                "status": true,
                "message": "",
                "results": [
                    {
                        "url": "https://pokeapi.co/api/v2/pokemon/3/",
                        "name": "venusaur",
                        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                        "id": 3
                    },
                    {
                        "url": "https://pokeapi.co/api/v2/pokemon/4/",
                        "name": "charmander",
                        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                        "id": 4
                    }
                ]
            }
        },
    },
]

describe('Pokemon Page', () => {
    it('renders without crashing', async () => {
        useRouter.mockImplementationOnce(() => ({
        }))
        const { render } = await getPage({
            route: '/pokemon',
        });

        render();
        expect(
            screen
        ).toMatchSnapshot()
    });
});