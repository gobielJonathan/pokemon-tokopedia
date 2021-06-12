import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { MyPokemonCard as PokemonCard } from '@/component/pokemon-card'
import { PokemonContext } from '@/provider/pokemon.provider'
import router from 'next/router'
import './mock/localstorage.mock'

jest.mock('next/router', () => require("next-router-mock"))

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />)

const mocks = {
    3: [
        {
            "url": "https://pokeapi.co/api/v2/pokemon/2/",
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "id": 2,
            "custom_name": "test"
        },
    ], 4: [
        {
            "url": "https://pokeapi.co/api/v2/pokemon/3/",
            "name": "venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            "id": 3,
            "custom_name": "test_2"
        },
    ]
}

global.localStorage.setItem("pokemons", JSON.stringify(mocks))

test('My Pokemon Card', async () => {

    for await (const data of Object.values(mocks).flat()) {
        let root = render(
            <PokemonContext.Provider value={{
                pokemons: mocks,
            }}>
                <PokemonCard data={data} />
            </PokemonContext.Provider>
        )
        await waitFor(() => {
            const image = root.getByRole("img")
            expect(image).toHaveAttribute("src", data.image)

            const name = root.getByTestId("pokemon-name")
            expect(name.innerHTML).toBe(data.name)

            const custom_name = root.getByTestId("custom-pokemon-name")
            expect(custom_name.innerHTML).toBe(data.custom_name)
        })
        
        fireEvent.click(root.getByTestId('pokemon-redirect'))
        expect(router).toMatchObject({
            pathname: '/pokemon/[name]'
        })
        cleanup()
    }

});