import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import styles from './Profile.module.css'
import formStyles from '../../../components/form/Form.module.css'

import Input from '../../../components/form/Input'

import useFlashMessage from '../../../hooks/useFlashMessage'

const Profile = () => {
  const [user, setUser] = useState([])
  const [preview, setPreview] = useState()
  const storedToken = localStorage.getItem('token')
  const { setFlashMessage } = useFlashMessage()

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

  function onFileChange(e) {
    setPreview(e.target.files[0])
    setUser({ ...user, [e.target.name]: e.target.files[0] })
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let msgType = 'success'

    const formData = new FormData()

    await Object.keys(user).forEach((key) => {
      formData.append(key, user[key])
    })

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(storedToken)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        msgType = 'error'
        return err.response.data
      })
      setFlashMessage(data.message, msgType)
    }

  return (
    <div>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        {(user.image || preview) && (
          <img src={preview ? URL.createObjectURL(preview) : `${process.env.REACT_APP_API}/images/users/${user.image}`} alt={user.name}/>
        )}
      </div>
      <form onSubmit={handleSubmit} className={formStyles.form_container}>
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
