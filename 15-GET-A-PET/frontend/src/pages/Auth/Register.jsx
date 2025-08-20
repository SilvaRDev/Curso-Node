import Input from '../../components/form/Input'

const Register = () => {
  function handleChange(e) {}

  return (
    <section>
      <h1>Register</h1>
      <form>
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
    </section>
  )
}

export default Register
