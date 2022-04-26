//primer componentes //funcional component
import React from 'react';
import PropTypes from 'prop-types';
//import { Fragment } from 'react/cjs/react.production.min';


//const saludo = 'hola mundo desde react';
const PrimerApp = ({saludo, subti}) =>{


    return (<div><h1>{saludo}</h1>
    <p>{subti}</p></div>);

    /*return(
        <Fragment>
            <h1>hola mundo primer componentes</h1>
    <p>Hola desde el Fragment</p>
        </Fragment>
    );*/


}
 //validacion
   
PrimerApp.propType={
    saludo: PropTypes.string.isRequired
}

//valores por defecto
PrimerApp.defaultProps = {
    subti: 'soy parte subti'
}

export default PrimerApp;
