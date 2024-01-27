import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/CAMOSAM-logo.svg';
import '../style/Header.css'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-logo">
            <Link to="/" className='link'> <img src={logo} alt="camosam logo" /></Link>
            </div>
            <nav className="pages">
                    <Link className='link' to="/gifts">Lista de presentes</Link>
                    <Link className='link' to="/guests">Convidados confirmados</Link>
                    <Link className='link' to="/about">Sobre</Link>
            </nav>
        </div>
    );
};

export default Header;