import api from '../utils/api'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Home.module.css'

const Home = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    api.get('/pets').then((response) => {
      setPets(response.data.pets)
    })
  }, [])

  return (
    <section>
      <div>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um e conheça o tutor deles</p>
        <div>
          {pets &&
            pets.length > 0 &&
            pets.map((pet) => (
              <div key={pet._id}>
                <p>Imagem do pet</p>
                <h3>{pet.name}</h3>
                <p>
                  <span className="bold">Peso: {pet.weight}Kg</span>
                </p>
                {pet.available ? <Link to={`/pet/${pet._id}`}>Mais detalhes</Link> : <p>Adotado</p>}
              </div>
            ))}
          {pets && pets.length === 0 && (
            <p>Não há pets disponíveis para adoção no momento.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home
