import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/49538313?s=460&u=3d05e4d58bcae17d11a2354e95f432668b289e0f&v=4" alt="Caique"/>
        <div>
          <strong>Caique Giovannini</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br /><br />
        Ea sit earum ullam vitae a, porro, odit iusto explicabo omnis distinctio totam. Reprehenderit id maiores debitis, quia doloremque quisquam? Est, natus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
