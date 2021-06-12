import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PokemonMine from '@/page/pokemon/mine'
import { PokemonContext } from '@/provider/pokemon.provider'

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

const mocks = {
    3: [
        {
            "url": "https://pokeapi.co/api/v2/pokemon/2/",
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "id": 3,
            "custom_name": "tesing"
        }
    ], 4: [
        {
            "url": "https://pokeapi.co/api/v2/pokemon/2/",
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "id": 4,
            "custom_name": "tesing-1"
        }
    ]
}
const provider = {
    pokemons: mocks,
    remove: function (id, name) {
        if (!mocks[id]) return
        mocks[id] = mocks[id]?.filter(x => x.custom_name !== name)
        if (mocks[id]?.length == 0) delete mocks[id]
    },
}

test('Pokemon Mine Page', async () => {

    const { rerender } = render(
        <PokemonContext.Provider value={provider}>
            <PokemonMine />
        </PokemonContext.Provider>
    )

    let len = Object.values(provider.pokemons).flat().length

    await waitFor(() => {
        const names = screen.queryAllByTestId('pokemon-name')
        expect(names.length).toBe(len)

        fireEvent.click(screen.queryAllByTestId("rounded-box")[0])
    })

    rerender(
        <PokemonContext.Provider value={provider}>
            <PokemonMine />
        </PokemonContext.Provider>
    )

    len = Object.values(provider.pokemons).flat().length
    
    await waitFor(() => {
        const names = screen.queryAllByTestId('pokemon-name')
        expect(names.length).toBe(len)
    })

});