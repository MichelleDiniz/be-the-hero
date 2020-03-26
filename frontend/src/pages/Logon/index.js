import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

function Logon() {
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Heroes" />

        <form action="">
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size="16" color="#e02041" /> 
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}

export default Logon;
