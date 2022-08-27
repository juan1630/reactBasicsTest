import { useState } from 'react'
import PropTypes from 'prop-types';

// const handleAdd =  (event) => { 
//     console.log(event)  
// } 
//si la funcion no interactua con el componente, se puede dejar afuera y eso es mas optimo en memoria

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd =  (event) => { 
        // console.log(event)  
        // setCounter(counter +1);
        // notificamos el cambio de estado, para que se vuelva a renderizar el componente
        setCounter( c => c+1 );
        //c es el valor del state
    } 

    const handleMinus = () => setCounter( counter => cminus -1 )

    const handleReset = () =>  setCounter( counter =>  counter = value );
    // el jsx siempre debe de ir lo mas limpio que se pueda
    return( <>
        <h1> Counter App </h1>
        <h2> {counter} </h2>
        <button onClick={  handleAdd  }> +1 </button>
        <button onClick={  handleMinus  }> -1 </button>
        <button onClick={  handleReset  }> Reset </button>
    </> )
};

CounterApp.propTypes = { 
    value: PropTypes.number.isRequired
}