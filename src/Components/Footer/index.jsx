import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <>
        <footer>
          <div className='footer-max'>

            <div className='logo-footer'>
                <h2>Health On</h2>
            </div>
            <div className="desenvolv">
                <h3>Desenvolvedores :</h3>
                <p>Gustavo Kawamura Christofani</p>
                <p>Felipe Capriotti da Silva Santos</p>
            </div>
          </div>
            <Link to=''>2023 | Todos os direitos estão reservados!</Link>
        </footer>
    </>
  )
}

export default index