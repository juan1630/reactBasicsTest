import { render } from "@testing-library/react"
import { CustomComponent } from "../customComponent";

describe('Pruebas en el componente <customComponent/> ', () => {
     test('Debe de hacer match con el snapshot', () => {
        // el snapShot es una fotografia del componente 

        render(<CustomComponent /> );
        //Se encarga de renderizar el componente en memeoria
     })
})