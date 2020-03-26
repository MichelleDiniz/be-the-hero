import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import LogoImg from '../../assets/logo.svg';

import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  const [ incidents, setIncidents ] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response =>{
      setIncidents(response.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id != id));
    } catch (err) {
      alert('Erro ao deletar.')
    }
  }

  return(
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be the hero" />
        <span>Bem vida, {ongName}</span>

        <Link to="incidents/new" className="button">Cadastrar novo Caso</Link>
        <button type="button" className="button-power">
          <FiPower size="18" color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul className="incidents-list">
       {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 />
            </button>
          </li>
       ))}
      </ul>
    </div>
  );
}
