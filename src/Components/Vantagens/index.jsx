import React from 'react'
import './Vantagens.scss'
const index = () => {
  return (
    <div className='box-vants'>
        <div className="box-um">
            <div className='card-imagem'>
                <img src="./src/assets/saude-publica.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Lorem .</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quos?</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
                <img src="./src/assets/equipe-medica.png" alt="imagem-home" />
            </div >
            <div className="text">
                <h3>Lorem .</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quos?</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
                <img src="./src/assets/farmacia.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Lorem .</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quos?</p>
            </div>
        </div>
    </div>
  )
}

export default index