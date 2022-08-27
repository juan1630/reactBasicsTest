import PropTypes from 'prop-types';

// const newMesagge = {
//     message:"Hola mundo",
//     title: "Saludo",
//     _id: "123"
// };

// const getReult = () => {
//     return 4+4
// }

export const CustomComponent = ({ title , 
                                subtitle = "Hola que tal",
                                name
                            }) => {
    // console.log(props) 
    // if(!title){
    //     throw new Error('El titulo no existe')
    // }

    return ( 
        <>
        {/* Se recomienda usar el fragment para que no rompa el layout  */}
            {/* <h2>  Hola mundo   </h2> */}
            <p> { title } </p>
            <p> { subtitle  } </p>
            <p> { name } </p>
            {/* <h4> { newMesagge.message } </h4>
            <h5> { newMesagge.title } </h5>
            <h5> { newMesagge._id } </h5> */}
            {/* <h2> { getReult() } </h2> */}
            {/* <code> { JSON.stringify(newMesagge) } </code>  */}

            {/* <p> Desde el elemento P </p> */}
        </>
    );
}

// Configuraciones del componente, siempre va al final
CustomComponent.propTypes ={
    title:PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

CustomComponent.defaultProps = {
    title: "No hay titulo",
    subtitle: 0,
    name: "JUAN PATRON"
}