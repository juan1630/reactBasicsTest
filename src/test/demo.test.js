describe('Pruebas en el <DemoTest />', () => {
    test('should no must faild ', ()=> {
        const message1 = "Hola mundo";
        const message2 =message1.trim();
    
        expect(message1).toBe(message2);
    });
})