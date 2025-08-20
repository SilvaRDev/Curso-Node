import { useState } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

const Register = () => {
  const [user, setUser] = useState({})

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Enviar o user ao banco
    console.log(user)
  }

  return (
    <section className={styles.form_container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Nome"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          type="text"
          text="Telefone"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />
        <Input
          type="email"
          text="E-mail"
          name="email"
          placeholder="Digite o seu E-mail"
          handleOnChange={handleChange}
        />
        <Input
          type="password"
          text="senha"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          type="password"
          text="Confirmação de senha"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </section>
  )
}

export default Register
