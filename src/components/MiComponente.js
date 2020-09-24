import React, {Component} from 'react';
//import React from 'react'; Opcion B

//class MiComponente extends React.Component{ Opcion B
class MiComponente extends Component{

    /*el return solo puede devolver 1 etiqueta que englobe otras, pero no 
    puede devoler mas de una. Una solucion es react.fragment
    Otra solucion es usando div*/
    render(){
        let receta ={
            nombre:'Pizza',
            ingredientes:['Tomate','Queso','Jamon'],
            calorias: 400            
        };
        //map recorre un array y saca los datos
        // {} es para usar javascript
        return(
            <div className="mi-componente">     
            <h1>{'Receta: ' + receta.nombre} </h1>
            <h2>{'Calorias: ' + receta.calorias}</h2>
            <ol>
                {
                receta.ingredientes.map((ingrediente,i)=>{
                    console.log(ingrediente);
                    return(
                        <li key={i}>
                            {ingrediente}
                        </li>
                    );
                })
                }
            </ol>
            <hr/>
            </div>
            //React fragmente es una etiqueta vacia, no genera ningun elemento
        /*<React.Fragment> 
            <h1>
                Hola, soy el componente llamado: MiComponente
            </h1>
            <h2>
                Estoy probando el componente
            </h2>
            <hr/>
        </React.Fragment>*/        
        );
    };
}

export default MiComponente