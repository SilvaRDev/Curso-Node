import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/form/Input'

import styles from '../../components/form/Form.module.css'

/* CONTEXT */
import { Context } from '../../context/userContext'

const Login = () => {

  function handleChange(e) {
    
  }

  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form>
        <Input 
          type="email"
          text="E-mail"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input 
          type="senha"
          text="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Entrar" />
      </form>
      <p>
        Não tem conta: <Link to='/register'>Clique Aqui</Link>
      </p>
    </section>
  )
}

export default Login