// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4)
// })


test('object assignment', () => {
    let obj = { name: 'person' }
    obj['age'] = 1
    expect(obj).toEqual({ name: 'person', age: 1 })
})


// test('add a + b not zero', () => {
//     expect(12 + 2).not.toBe(0)
// })

// test('null', () => {
//     const n = null
//     expect(n).toBeNull()
//     expect(n).toBeDefined()
//     expect(n).not.toBeUndefined()
//     expect(n).not.toBeTruthy()
//     expect(n).toBeFalsy()
// })
