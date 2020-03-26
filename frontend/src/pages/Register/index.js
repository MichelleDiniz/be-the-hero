import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register() {
  return(
    <div className="register-container">
      <div className="register-content">
        <section>
          <img src={logo} alt="Heroes" />

          <h1>Cadastro</h1>
          <p>Faça se cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

          <Link to="/" className="back-link">
            <FiArrowLeft size="16" color="#e02041" /> 
            Já tenho cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="Whatsapp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
