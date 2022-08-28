import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en el compoente async - await', () => {
    test('Debe de  la url de la imagen', async()=>{

        const url = await getImagen();

        expect(  typeof url ).toBe('string');
    });

    test('Debe de regresar un error cuando entre al catch', async () => {
        const resp = await getImagen();
        console.log(  resp)
        expect(resp).toBe('No se pudo encontrar');
    });
})