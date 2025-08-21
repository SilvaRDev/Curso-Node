import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import styles from './Profile.module.css'
import formStyles from '../../../components/form/Form.module.css'

import Input from '../../../components/form/Input'

const Profile = () => {
  const [user, setUser] = useState([])
  const storedToken = localStorage.getItem('token')

  useEffect(() => {
    api
      .get('/users/checkuser', {
        headers: {
          Authorization: `Bearer ${JSON.parse(storedToken)}`,
        },
      })
      .then((response) => {
        setUser(response.data)
      })
  }, [storedToken])

  function onFileChange(e) {}

  function handleChange(e) {}

  return (
    <div>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        <p>Preview Imagem</p>
      </div>
      <form className={formStyles.form_container}>
        <Input
          type="file"
          text="imagem"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          type="email"
          text="E-mail"
          name="email"
          placeholder="Digite o seu E-mail"
          handleOnChange={handleChange}
          value={user.email || ''}
        />
        <Input
          type="text"
          text="Nome"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
          value={user.name || ''}
        />
        <Input
          type="text"
          text="Telefone"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ''}
        />
        <Input
          type="password"
          text="Senha"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          type="password"
          text="Senha"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Editar" />
      </form>
    </div>
  )
}

export default Profile
