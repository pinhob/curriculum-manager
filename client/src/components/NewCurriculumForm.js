import { brazilianStates, formatPhoneNumber } from "../helpers";

export const NewCurriculumForm = () => {
  const handlePhoneNumber = ({ target }) => {
    const phoneFormatted = formatPhoneNumber(target.value);
    target.value = phoneFormatted;
  }

  return (
    <form>
      <h2>Informações pessoais</h2>
      <label htmlFor="name">
        Nome:
        <input type="text" name="name" id="name" placeholder="Informe seu nome" />
      </label>
      <label htmlFor="role">
        Função:
        <input type="text" name="role" id="role" placeholder="Informe seu função" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" placeholder="Informe seu email" />
      </label>
      <label htmlFor="phone">
        Telefone:
        <input type="text" name="phone" id="phone" placeholder="Informe seu telefone" onChange={handlePhoneNumber} />
      </label>
      <label htmlFor="city">
        Cidade:
        <input type="text" name="city" id="city" placeholder="Informe sua cidade" />
      </label>
      <label htmlFor="state">
        Estado:
        <select name="state" id="state">
          {brazilianStates.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </label>
      <h2>Redes sociais</h2>
      <label htmlFor="linkedin">
        Linkedin:
        <input type="url" name="linkedin" id="linkedin" placeholder="Link para seu Linkedin" />
      </label>
      <label htmlFor="github">
        Github:
        <input type="url" name="github" id="github" placeholder="Link para seu Github" />
      </label>
      <h2>Perfil profissional</h2>
      <label htmlFor="presentation">
        Apresentação:
        <textarea name="presentation" id="presentation" cols="30" rows="10" placeholder="Fale um pouco sobre você e o que sabe" />
      </label>
      <h2>Formação</h2>
      <label htmlFor="course">
        Curso:
        <input type="text" name="course" id="course" placeholder="Informe o curso" />
      </label>
      <label htmlFor="type">
        Tipo:
        <select name="type" id="type">
          <option value="Graduação">Graduação</option>
          <option value="Curso técnico">Técnico</option>
          <option value="Bootcamp">Bootcamp</option>
          <option value="Ensino Médio">Ensino Médio</option>
        </select>
      </label>
      <label htmlFor="instituion">
        Instituição:
        <input type="text" name="instituion" id="instituion" placeholder="Informe o nome da instituição" />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input type="date" name="end_date" id="end_date" placeholder="Informe a data de término" />
      </label>
      <h2>Experiências</h2>
      <label htmlFor="role">
        Cargo:
        <input type="text" name="role" id="role" placeholder="Informe o cargo" />
      </label>
      <label htmlFor="company">
        Empresa:
        <input type="text" name="company" id="company" placeholder="Informe o nome da empresa" />
      </label>
      <label htmlFor="start_date">
        Data de início:
        <input type="date" name="start_date" id="start_date" />
      </label>
      <label htmlFor="still_employed">
        Ainda empregado?
        <input type="checkbox" name="still_employed" id="still_employed" />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input type="date" name="end_date" id="end_date" />
      </label>
      <h2>Tecnologias</h2>
      Informe até 6 tecnologias que você trabalha:
      {/* TODO: Implementar lógica para escrever as tecnologias (até 6) */}
      <label htmlFor="tech">
        Tecnologia:
        <input type="text" name="tech" id="tech" placeholder="Informe a tecnologia" />
      </label>
      <label htmlFor="tech">
        Tecnologia:
        <input type="text" name="tech" id="tech" placeholder="Informe a tecnologia" />
      </label>
      <label htmlFor="tech">
        Tecnologia:
        <input type="text" name="tech" id="tech" placeholder="Informe a tecnologia" />
      </label>
      <label htmlFor="tech">
        Tecnologia:
        <input type="text" name="tech" id="tech" placeholder="Informe a tecnologia" />
      </label>
      <label htmlFor="tech">
        Tecnologia:
        <input type="text" name="tech" id="tech" placeholder="Informe a tecnologia" />
      </label>
      <label htmlFor="tech">
        Tecnologia:
        <input type="text" name="tech" id="tech" placeholder="Informe a tecnologia" />
      </label>
      <h2>Idiomas</h2>
      <label htmlFor="language">
        Idioma:
        <input type="text" name="language" id="language" placeholder="Informe a linguagem" />
      </label>
      <label htmlFor="level">
        Nível:
        <select name="level" id="level">
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
          <option value="Fluente">Fluente</option>
        </select>
      </label>
      <h2>Atividades voluntárias</h2>
      <label htmlFor="activity">
        Atividade:
        <input type="text" name="activity" id="activity" placeholder="Informe a atividade" />
      </label>
      {/* TODO: Corrigir chave errada (instituion) no mock */}
      <label htmlFor="institution">
        Instituição:
        <input type="text" name="institution" id="institution" placeholder="Informe a instituição" />
      </label>
      <label htmlFor="start_date">
        Data de início:
        <input type="date" name="start_date" id="start_date" />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input type="date" name="end_date" id="end_date" />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  )
};
