import React, { useState, useEffect }  from 'react'
import axios from "axios";
import GiftCard from '../components/GiftCard'
import '../style/GiftsList.css'


interface Gift {
  id: number;
  image_url: string;
  name: string;
  price: number;
  is_active: boolean;
}


const GiftsList: React.FC = () => {
    const [gifts, setGifts] = useState([])

    useEffect(() => {
      axios
        .get('http://localhost:8000/gift')
        .then((response) => {
          setGifts(response.data.map((gift: Gift) => ({
            id: gift.id,
            image_url: gift.image_url,
            name: gift.name,
            price: gift.price,
            is_active: gift.is_active
          })))
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
        <div className="page-content">
          <h1>Lista de Presentes</h1>
            <div  className="gifts-list">
              {gifts.map((gift: Gift) => (
                gift.is_active && <GiftCard key={gift.id} gift={gift}/>
              ))}
            </div >
        </div>
    )
  };

  export default GiftsList;