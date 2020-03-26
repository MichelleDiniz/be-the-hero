import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import LogoImg from '../../assets/logo.svg';

import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  return(
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be the hero" />
        <span>Bem vida, APAD</span>

        <Link to="incidents/new" className="button">Cadastrar novo Caso</Link>
        <button type="button" className="button-power">
          <FiPower size="18" color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul className="incidents-list">
        <li>
          <strong>Caso:</strong>
          <p>caso teste</p>

          <strong>Descrição:</strong>
          <p>teste</p>

          <strong>Valor:</strong>
          <p>120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso teste</p>

          <strong>Descrição:</strong>
          <p>teste</p>

          <strong>Valor:</strong>
          <p>120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso teste</p>

          <strong>Descrição:</strong>
          <p>teste</p>

          <strong>Valor:</strong>
          <p>120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso teste</p>

          <strong>Descrição:</strong>
          <p>teste</p>

          <strong>Valor:</strong>
          <p>120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso teste</p>

          <strong>Descrição:</strong>
          <p>teste</p>

          <strong>Valor:</strong>
          <p>120,00</p>

          <button type="button">
            <FiTrash2 />
          </button>
        </li>
      </ul>
    </div>
  );
}
