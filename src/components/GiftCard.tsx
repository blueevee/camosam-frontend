import React from 'react';
import '../style/GiftCard.css'

interface GiftCardProps {
    gift: {
        id: number;
        image_url: string;
        name: string;
        price: number;
        is_active: boolean;
    };
}

const GiftCard: React.FC<GiftCardProps> = ({ gift }) => {
    return (
        <div className="gift-card">
            <div className="header-img">
                <img src={gift.image_url} alt={gift.name} />
            </div>
            <div className="content">
                <p>{gift.name}</p>
                <p className="gift-price">R${gift.price}</p>
                <button className="give-btn">Presentear</button>
            </div>
        </div>
    );
};

export default GiftCard;