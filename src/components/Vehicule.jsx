import React from 'react'

const Vehicule = (props) =>{
    let color;
    if(props.etat == 'non-validé' ){
        color = "red"
    }
    
    else{
        color =""
    }



    return(
    <div>
        {props.marque}
        <div>
        {props.modeles}

        </div>
        <div>
            {props.couleur}
        </div>
        <div>
            {props.carburant}
        </div>
        <div className={color}>
            {props.etat}
        </div>
    </div>
        
    )
}

export default Vehicule