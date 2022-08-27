import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en el 02 template-string', () => {
    test('getSaludo debe de retornar "Hola Juan"', ( ) => {
      
        const name = "Juan";
        const saludo = getSaludo(name);

        expect(saludo).toBe( 'Hola '+name )
    });
})