import { random } from "./random"

export const getId = (length = 1) => {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    const numbers = '1234657890'
    let res = ""
    for (let idx = 0; idx < length / 2; idx++) {
        res += numbers[random(0, numbers.length)]
    }

    for (let idx = length / 2; idx <= length; idx++) {
        res += alphabet[random(0, alphabet.length)]
    }

    return res
}
