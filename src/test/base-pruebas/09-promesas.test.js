import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en la promesas', ()=> {

    test('Debe de retornar un heroe', (done)=> {
        const id = 1;

        getHeroeByIdAsync(id)
        .then( hero => {
            
            expect(hero).toEqual( {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    });


    test('Debe de tener un error si el ID no existe', (done) => {
        const id = 100;
        console.log(id);
        getHeroeByIdAsync(id)
        .then( heroe => {
            expect(heroe).toBeFalsy();
            done();
        } )
        .catch( error => {
                console.log(error, "ERROR");
                expect(  error ).toBe('No se pudo encontrar el héroe' + id);
            done();
        }); 
    });
});