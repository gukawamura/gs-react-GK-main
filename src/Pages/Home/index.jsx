import React from 'react'
import Vantagens from '../../Components/Vantagens'
import './Home.scss'
const index = () => {
  return (
    <>
      <section className='home-section'>
        <div className="container-max">
          <div className="container">
            <div className="imagem-impacto">
              <img src="src/assets/triagem.jpg" alt="imagem-de-impacto" />
            </div>

            <div className="rodape-img">

              <div className="titulo">
                <h2>Triagem On</h2>
              </div>
              <div className='texto'>
                <p>Nosso projeto é uma triagem online onde o paciente com a ajuda de um oxímetro consegui fazer mandar os dados dele para o médico e chegar somente para a consulta marcada.</p>
              </div>
              <div className='botao'>
                <button>Mais informações</button>
              </div>
            </div>

          </div>
          <article>
            <div className='lateral'>
              <h3>O que é a solução?</h3>
              <p>A solução apresentada é uma triagem online para minimizar a fila de espera nos hospitais</p>
              <h3>O que ela fará?</h3>
              <p>Ela fará uma pequena triagem do paciente ainda em casa perguntando os sintomas e coletando dados de um oxímetro</p>
              <h3>Como funcionará?</h3>
              <p>O paciente deverá responder um pequeno formulário infirmando sintomas,idade,saturação do oxigênio e frequência cardíaca,com isso ele te retornará uma possível doença e te encaminhará para o médico</p>
            </div>
          </article>
        </div>
        <h2 id='vtng'>Vantagens</h2>
        <Vantagens/>
      </section>
    </>
  )
}

export default index