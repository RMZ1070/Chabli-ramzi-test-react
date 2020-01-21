import React from 'react'
import Vehicule from './Vehicule'

const Garage = () =>{
   

return(
    <div>
    <Vehicule marque ='Mercedes Benz S 260' modeles ='S 260' couleur ='bleu' carburant ='Essence' etat ='non-validé' />
        <Vehicule marque ='fiat500' modeles ='2010' couleur ='bleu' carburant ='Essence' etat ='non-validé' />
        <Vehicule marque ='Volkswagen Crafter' modeles ='2016' couleur ='blanche' carburant ='diesel' etat ='validé' />
        <Vehicule marque ='BMW 114' modeles ='2012' couleur ='bleu' carburant ='Essence' etat ='non-validé' />
        <Vehicule marque ='Audi A3' modeles ='2015' couleur ='bleu' carburant ='Essence' etat ='validé' />
</div>
    

    )
}
export default Garage