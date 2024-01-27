import React, { useState, useEffect } from 'react';
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
    const [showModal, setShowModal] = useState(false);
    const [QrCodePix, setQrCodePix] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8000/gift_charge/${gift.price}`)
            .then(response => response.blob())
            .then(blob => {
                var reader = new FileReader();
                reader.onload = function() {
                    console.log('========================',this.result)
                    setQrCodePix(this.result as string);
                }
                reader.readAsDataURL(blob);
            });
    });

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='gift-card'>
            <div className='header-img'>
                <img src={gift.image_url} alt={gift.name} />
            </div>
            <div className='content'>
                <p>{gift.name}</p>
                <p className='gift-price'>R${gift.price}</p>
                <button className='give-btn' onClick={handleOpenModal}>Presentear</button>
            </div>

            {showModal && (
                <div className='pix-modal'>
                    <div className='pix-modal-content'>
                        <button className='close-modal-btn' onClick={handleCloseModal}>X</button>
                        <h2>Realize o pagamento do pix abaixo para presentear SAM com: {gift.name}</h2>
                        <img className='qr-code-pix' src={QrCodePix} alt={gift.name} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiftCard;
