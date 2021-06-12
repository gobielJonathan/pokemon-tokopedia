import { getByTestId, render, screen } from '@testing-library/react'
import PokemonCard from '@/component/pokemon-card'

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push() { }
        }
    }
}))

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />)

describe('Pokemon Card', () => {

    render(<PokemonCard data={{ id: 3, name: "venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }} />)

    test('should has image link', () => {
        const image = screen.getByRole('img')
        expect(image).toHaveAttribute("src", 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png')
    })

    test('should has name', () => {
        const name = screen.getByTestId("name")
        expect(name).not.toBeNull()
    })


    test('should has badge owned', () => {
        const count = screen.getByTestId('counter')
        expect(count).not.toBeNull()
        expect(count.textContent).toBe('1')
    })


});