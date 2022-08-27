import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en el 07-deses-arr ', ()=> {
    test('Debe de retornar un string y un numero', ()=> {
        
        const [letters, numbers]  = retornaArreglo();

        expect(letters).toBe('ABC');
        //el tobe Se encarga de evaluar el tipo de dato tambien
        expect(numbers).toBe(123);

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');
        //podemos evaluar por el tipo de dato
    });
})