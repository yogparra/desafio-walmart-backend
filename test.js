describe('Prueba 1', () => {
    describe('suma', () => {
      it('suma 2 numeros', () => {
        const suma = (a, b) => {
            return a + b
        }
        expect(suma(4, 5)).toEqual(9)
      })
    })
})
