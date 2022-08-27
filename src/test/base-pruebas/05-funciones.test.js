import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas  en el componente <fuciones>', () => {
    test('getUser debe de retornar  un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user =  getUser();
        console.log(user);

        //no se debe de evaluar de esta forma ya que compara a valores de memoria diferentes, por eso se debe de usar el equal
        expect( testUser ).toStrictEqual( user );

    });


    test('Debe de regresar un objeto', () => {
        const name = 'Juan';

       const name2 = getUsuarioActivo('Juan');

       //expect( name ).toBe( name2.username );
       expect( name2 ).toStrictEqual({
        uid:"ABC567",
        username:name
       })

    })
});