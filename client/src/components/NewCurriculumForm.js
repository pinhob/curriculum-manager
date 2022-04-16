import { brazilianStates, formatPhoneNumber } from "../helpers";
import { MockedCurriculums } from "../helpers";
import { useForm } from 'react-hook-form';

export const NewCurriculumForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handlePhoneNumber = ({ target }) => {
    const phoneFormatted = formatPhoneNumber(target.value);
    target.value = phoneFormatted;
  }

  const onSubmit = (data) => {
    const formatedCurriculum = {
      id: MockedCurriculums.length + 1,
      name: data.name,
      phone: data.phone,
      email: data.email,
      role: data.role,
      city: data.city,
      state: data.state,
      profiles: {
        linkedin: data.profile_linkedin,
        github: data.profile_github
      },
      presentation: data.presentation,
      education: [{
        course: data.education_course,
        instituion: data.education_instituion,
        type: data.education_type,
        end_date: data.education_end_date,
      }],
      work: [{
        role: data.job_role,
        company: data.job_company,
        start_date: data.job_start_date,
        end_date: data.job_end_date,
        still_employed: data.job_still_employed,
      }],
      stacks: data.stacks.split(', '),
      languages: [{
        language: data.languages_language,
        level: data.languages_level,
      }],
      other_experiences: [{
        role: data.other_experiences_role,
        institution: data.other_experiences_institution,
        start_date: data.other_experiences_start_date,
        end_date: data.other_experiences_end_date,
      }],
    }

    MockedCurriculums.push(formatedCurriculum);

    console.log(MockedCurriculums);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Informações pessoais</h2>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Informe seu nome"
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
          {...register('presentation', { required: true, minLength: 10, maxLength: 250 })}
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
          {...register('job_company', { required: true, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="start_date">
        Data de início:
        <input
          type="date"
          name="start_date"
          id="start_date"
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
          {...register('other_experiences_role', { required: true, minLength: 2, maxLength: 40 })}
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
          {...register('other_experiences_institution', { required: true, minLength: 2, maxLength: 40 })}
        />
      </label>
      <label htmlFor="start_date">
        Data de início:
        <input
          type="date"
          name="start_date"
          id="start_date"
          {...register('other_experiences_start_date', { required: true })}
        />
      </label>
      <label htmlFor="end_date">
        Data de término:
        <input
          type="date"
          name="end_date"
          id="end_date"
          {...register('other_experiences_end_date', { required: true })}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  )
};
