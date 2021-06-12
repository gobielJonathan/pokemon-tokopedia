import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import PokemonCard from '@/component/pokemon-card'
import { PokemonContext } from '@/provider/pokemon.provider'
import router from 'next/router'
import './mock/localstorage.mock'

jest.mock('next/router', () => require("next-router-mock"))

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />)

global.localStorage.setItem("pokemons", JSON.stringify({ 3: [], 4: [] }))

const mocks = [
    {
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "name": "ivysaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "id": 2
    },
    {
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "name": "venusaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "id": 3
    },
]
const mockmine = { 3: [], 4: [] }

test('Pokemon Card', async () => {

    for await (const data of mocks) {
        let root = render(
            <PokemonContext.Provider value={{
                pokemons: mockmine,
                get: id => {
                    if (!mockmine[id]) return 0;
                        return Object.values(mockmine[id]).flat().length
                }
            }}>
                <PokemonCard data={data} />
            </PokemonContext.Provider>
        )
        await waitFor(() => {
            const image = root.getByRole("img")
            expect(image).toHaveAttribute("src", data.image)

            const name = root.getByTestId("pokemon-name")
            expect(name.innerHTML).toBe(data.name)
        })

        if (global.localStorage.getItem("pokemons")) {
            const localData = JSON.parse(global.localStorage.getItem("pokemons"))

            let len = 0

            if (localData[data.id]) {
                len = Object.values(localData[data.id]).flat().length    
            }

            await waitFor(() => {
                const count = root.getByTestId('pokemon-counter')
                expect(count.innerHTML).toBe(len.toString() + " owned")
            })

            
        }

        fireEvent.click(root.getByTestId('pokemon-redirect'))
        expect(router).toMatchObject({
            pathname : '/pokemon/[name]'
        })
        cleanup()
    }

});