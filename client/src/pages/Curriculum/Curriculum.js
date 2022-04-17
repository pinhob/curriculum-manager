import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
import { StyledCurriculum } from "../../styles";

const Curriculum = () => {
  const [curriculum, setCurriculum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const curriculumsList = JSON.parse(localStorage.getItem('curriculums'));
    const findCurriculum = curriculumsList.find((curriculum) => curriculum.id === Number(id));
    setCurriculum(findCurriculum);
  }, [id])

  console.log(curriculum)

  return (
    <>
      <Header />
      <StyledCurriculum>
        <div className="header">
          <h1 className="header__name">{curriculum.name}</h1>
          <h3 className="header__role title--purple">{curriculum.role}</h3>
          {
            curriculum.profiles &&
            <ul className="header__list">
              <li className="header__list__item"><a href={curriculum.profiles.linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>
              <li className="header__list__item"><a href={curriculum.profiles.github} target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          }
        </div>

        <div className="infos">
          <h2 className="infos__title title--purple">Contato e informações</h2>
          <p className="infos__info">{curriculum.email}</p>
          <p className="infos__info">{curriculum.phone}</p>
          <p className="infos__info">{curriculum.city} - {curriculum.state}</p>
        </div>

        <div className="presentation">
          <h2 className="title--purple">Perfil profissional</h2>
          <p>{curriculum.presentation}</p>
        </div>


        <div className="skills">
          <h2 className="title--purple">Tecnologias</h2>
          {
            curriculum.stacks &&
            <ul className="skills__list">
              {
                curriculum.stacks.map((stack, index) => (
                  <li key={index} className="skills__list__item">{stack}</li>
                ))
              }
            </ul>
          }
        </div>

        <div className="card__wrapper">
          <h2 className="title--purple">Formação</h2>
          {
            curriculum.education &&
            curriculum.education.map((course, index) => (
              <div key={index} className="card">
                <h6 className="card__type">{course.type}</h6>
                <h4>{course.course}</h4>
                <h5 className="card__institution">na <span className="card__instituition__name">{course.institution}</span></h5>
                {/* TODO: Adicionar lógica para, caso a data seja no futuro, o texto seja "Conclusão em..." */}
                <p className="card__dates">Concluído em {course.end_date}</p>
              </div>
            ))
          }
        </div>

        <div className="card__wrapper">
          <h2 className="title--purple">Experiência profissional</h2>
          {
            curriculum.work &&
            curriculum.work.map((job, index) => (
              <div key={index} className="card">
                <h4>{job.role}</h4>
                <h5 className="card__institution"> na <span className="card__instituition__name">{job.company}</span></h5>
                <p className="card__dates">{job.start_date} - {job.still_employed ? 'Atualmente' : job.end_date}</p>
              </div>
            ))
          }
        </div>

        <div className="card__wrapper">
          <h2 class="title--purple">Idiomas</h2>
          {
            curriculum.languages &&
            curriculum.languages.map((language, index) => (
              <div key={index} className="card">
                <h4>{language.language}</h4>
                <p className="card__dates">{language.level}</p>
              </div>
            ))
          }
        </div>

        <div className="card__wrapper">
          <h2 className="title--purple">Voluntariado</h2>
          {
            curriculum.others_experiences &&
            curriculum.others_experiences.map((experience, index) => (
              <div key={index} className="card" >
                <h4>{experience.role}</h4>
                <h5 className="card__institution">{experience.instituion}</h5>
                <p className="card__dates">{experience.start_date} - {experience.end_date}</p>
              </div>
            ))
          }
        </div>
      </StyledCurriculum>
    </>
  )
}

export default Curriculum;
