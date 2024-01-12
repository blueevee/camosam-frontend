import React, {useState} from 'react'
import GiftCard from '../components/GiftCard'
import '../style/Home.css'


const Home: React.FC = () => {
    const [gifts, setGifts] = useState([
        {
            "id": 1,
            "name": "1° mês da escolinha",
            "image_url": "https://i0.wp.com/escolasdobem.com.br/wp-content/uploads/2017/10/dr_setubal_a_importc3a2ncia_das_creches_e_da_educac3a7c3a3o_infantil_01_09_2017.jpg?fit=849%2C565&ssl=1",
            "price": 572.5,
            "is_active": true
        },
        {
            "id": 2,
            "name": "Um livro de histórias",
            "image_url": "https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=sph",
            "price": 12.99,
            "is_active": true
        },
        {
            "id": 3,
            "name": "Implante de cabelo",
            "image_url": "https://http2.mlstatic.com/D_NQ_NP_657946-MLB73637591276_122023-O.webp",
            "price": 100.0,
            "is_active": true
        },
        {
            "id": 4,
            "name": "Charmander de pelúcia",
            "image_url": "https://img.elo7.com.br/product/main/2ED9EB3/charmander-baby-amigurumi-anime.jpg",
            "price": 58.99,
            "is_active": true
        }
    ])
    return (
        <div className="page-content">
          <h1>Lista de Presentes</h1>
            <div id='gifts-sec' className="gifts-list">
              {gifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift}/>
              ))}
            </div >
        </div>
    )
  };

  export default Home;