import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en el imp-exp', () => {
    test('Debe de retornar un hero por el ID', ()=> {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
    })

    test('Debe de retornar undefined sino existe el ID', ()=> {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        // expect(hero).toBe( undefined)
        expect(hero).toBeFalsy();

        //se puede evaluar con ambos 
    });


    test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = getHeroesByOwner('DC');
        expect( owner ).toHaveLength(3);
        expect(owner).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },])
    });

    test('Debe de retornar un arreglo con los heroes de Marvel', ()=> {
        const owner = getHeroesByOwner('Marvel');

        // expect( owner ).toHaveLength(2)
        expect( owner ).toEqual( owner.filter( (heroe) => heroe.owner === 'Marvel' ));
    }); 

})