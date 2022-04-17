import { brazilianStates, formatPhoneNumber } from "../helpers";
import { formatDataToCurriculumFormat } from "../helpers";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import moment from 'moment';

const NewCurriculumForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handlePhoneNumber = ({ target }) => {
    const phoneFormatted = formatPhoneNumber(target.value);
    target.value = phoneFormatted;
  }

  const onSubmit = (data) => {
    const curriculumsList = JSON.parse(localStorage.getItem('curriculums'));

    const formatedCurriculum = formatDataToCurriculumFormat(data, curriculumsList);

    curriculumsList.push(formatedCurriculum);

    localStorage.setItem('curriculums', JSON.stringify(curriculumsList));

    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Informações pessoais</h2>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Informe seu nome"
          className="form__text__input"
          {...register('name', { required: true, minLength: 3, maxLength: 80 })}
        />
      </label>

      <label htmlFor="role">
        Função:
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Informe seu função"
          className="form__text__input"
          {...register('role', { required: true, minLength: 3, maxLength: 40 })}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe seu email"
          className="form__text__input"
          {...register('email', { required: true, minLength: 3, maxLength: 40 })}
        />
      </label>
      <label htmlFor="phone">
        Telefone:
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Informe seu telefone"
          className="form__text__input"
          {...register('phone', {
            required: true,
            minLength: 15,
            maxLength: 15,
            onChange: handlePhoneNumber,
          })}
        />
      </label>
      <label htmlFor="city">
        Cidade:
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Informe sua cidade"
          className="form__text__input"
          {...register('city', { required: true, minLength: 3, maxLength: 30 })}
        />
      </label>
      <label htmlFor="state">
        Estado:
        <select name="state" id="state" {...register('state', { required: true })}>
          {brazilianStates.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </label>

      <h2>Redes sociais</h2>
      <label htmlFor="linkedin">
        Linkedin:
        <input
          type="url"
          name="linkedin"
          id="linkedin"
          placeholder="Link para seu Linkedin"
          className="form__text__input"
          {...register('profile_linkedin', { required: true })}
        />
      </label>
      <label htmlFor="github">
        Github:
        <input
          type="url"
          name="github"
          id="github"
          placeholder="Link para seu Github"
          className="form__text__input"
          {...register('profile_github', { required: true })}
        />
      </label>

      <h2>Perfil profissional</h2>
      <label htmlFor="presentation">
        Apresentação:
        <textarea
          name="presentation"
          id="presentation"
          cols="30"
          rows="10"
          placeholder="Fale um pouco sobre você e o que sabe"
          {...register('presentation', { required: true, minLength: 10, maxLength: 500 })}
        />
      </label>

      <h2>Formação</h2>
      <label htmlFor="course">
        Curso:
        <input
          type="text"
          name="course"
          id="course"
          placeholder="Informe o curso"
          className="form__text__input"
          {...register('education_course', { required: true, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="type">
        Tipo:
        <select name="type" id="type" {...register('education_type')}>
          <option value="Graduação">Graduação</option>
          <option value="Curso técnico">Técnico</option>
          <option value="Bootcamp">Bootcamp</option>
          <option value="Ensino Médio">Ensino Médio</option>
        </select>
      </label>
      <label htmlFor="instituion">
        Instituição:
        <input
          type="text"
          name="instituion"
          id="instituion"
          placeholder="Informe o nome da instituição"
          className="form__text__input"
          {...register('education_institution', { required: true, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input
          type="date"
          name="end_date"
          id="end_date"
          placeholder="Informe a data de término"
          max={moment().format("YYYY-MM-DD")}
          {...register('education_end_date', { required: true })}
        />
      </label>

      <h2>Experiências</h2>
      <label htmlFor="role">
        Cargo:
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Informe o cargo"
          className="form__text__input"
          {...register('job_role', { required: true, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="company">
        Empresa:
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Informe o nome da empresa"
          className="form__text__input"
          {...register('job_company', { required: true, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="start_date">
        Data de início:
        <input
          type="date"
          name="start_date"
          id="start_date"
          max={moment().format("YYYY-MM-DD")}
          {...register('job_start_date', { required: true })}
        />
      </label>
      <label htmlFor="still_employed">
        Ainda empregado?
        <input
          type="checkbox"
          name="still_employed"
          id="still_employed"
          {...register('job_still_employed', { required: false })}
        />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input
          type="date"
          name="end_date"
          id="end_date"
          max={moment().format("YYYY-MM-DD")}
          {...register('job_end_date', { required: false })}
        />
      </label>

      <h2>Tecnologias</h2>
      {/* TODO: Aprimorar lógica para escrever as tecnologias */}
      <label htmlFor="stacks">
        Informe as tecnologias que você trabalha:
        <textarea
          name="stacks"
          id="stacks"
          cols="30"
          rows="5"
          placeholder="Ex: React, JavaScript, CSS, etc."
          {...register('stacks', { required: true, minLength: 3, maxLength: 250 })}
        />
      </label>
      <h2>Idiomas</h2>
      <label htmlFor="language">
        Idioma:
        <input
          type="text"
          name="language"
          id="language"
          placeholder="Informe a linguagem"
          className="form__text__input"
          {...register('languages_language')}
        />
      </label>
      <label htmlFor="level">
        Nível:
        <select name="level" id="level" {...register('languages_level')}>
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
          <option value="Fluente">Fluente</option>
        </select>
      </label>

      <h2>Voluntariado e outras atividades</h2>
      <label htmlFor="activity">
        Atividade:
        <input
          type="text"
          name="activity"
          id="activity"
          placeholder="Informe a atividade"
          className="form__text__input"
          {...register('other_experiences_role', { required: false, minLength: 2, maxLength: 40 })}
        />
      </label>
      {/* TODO: Corrigir chave errada (instituion) no mock */}
      <label htmlFor="institution">
        Instituição:
        <input
          type="text"
          name="institution"
          id="institution"
          placeholder="Informe a instituição"
          className="form__text__input"
          {...register('other_experiences_institution', { required: false, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="start_date">
        Data de início:
        <input
          type="date"
          name="start_date"
          id="start_date"
          max={moment().format("YYYY-MM-DD")}
          {...register('other_experiences_start_date', { required: false })}
        />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input
          type="date"
          name="end_date"
          id="end_date"
          max={moment().format("YYYY-MM-DD")}
          {...register('other_experiences_end_date', { required: false })}
        />
      </label>
      <button type="submit" className="form__btn">Adicionar</button>
    </form>
  )
};

export default NewCurriculumForm;
