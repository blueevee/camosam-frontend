import React, { useState } from 'react';
import axios from 'axios';
import '../style/GuestForm.css'


const ConfirmAttendanceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Substitua 'API_ENDPOINT' pelo seu endpoint real
    //   const response = await axios.post('API_ENDPOINT', formData);
      console.log(formData); // Aqui você pode lidar com a resposta da API

      // Limpar o formulário após o envio bem-sucedido
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className='container'>
      <h3 className='title'>Confirme Sua Presença!</h3>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            className='name-field'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            className='phone-field'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
          className='email-field'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className='button'>
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default ConfirmAttendanceForm;
