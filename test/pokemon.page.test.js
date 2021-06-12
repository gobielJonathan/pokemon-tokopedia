import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Pokemon from '@/page/pokemon'
import { MockedProvider } from '@apollo/client/testing'
import { GET_POKEMONS } from '@/gql/query'

jest.mock('next/router', () => require("next-router-mock"))

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />)

jest.mock('next/head', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <>{children}</>;
        },
    };
});

const mocks = [
    {
        request: {
            query: GET_POKEMONS,
            variables: {
                limit: 1,
                offset: 1,
            }
        },
        result: {
            data: {
                "pokemons": {
                    "count": 1118,
                    "next": "https://pokeapi.co/api/v2/pokemon/?offset=2&limit=1",
                    "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1",
                    "status": true,
                    "message": "",
                    "results": [
                        {
                            "url": "https://pokeapi.co/api/v2/pokemon/2/",
                            "name": "ivysaur",
                            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            "id": 2
                        }
                    ]
                }
            }
        }
    },
]

test('Pokemon Page', async () => {

    render(
        <MockedProvider addTypename={false} mocks={mocks}>
            <Pokemon pokemons={{
                results: [{
                    "url": "https://pokeapi.co/api/v2/pokemon/2/",
                    "name": "ivysaur",
                    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                    "id": 2
                }]
            }} />
        </MockedProvider>
    )

    await waitFor(() => {
        const title = screen.queryByTestId('title-page')
        expect(title.innerHTML).toBe("Pokemon")
    })

});