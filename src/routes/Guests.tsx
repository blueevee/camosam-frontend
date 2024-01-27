import React from 'react'
import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'
import '../style/GiftsList.css'


const Guests: React.FC = () => {
    return (
      <div>
        <GuestForm/>
        <h1>Lista de Convidados Confirmados</h1>
        <GuestList/>
        </div>
    );
  };

  export default Guests;