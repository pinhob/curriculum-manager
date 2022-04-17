import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components";

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
      <main>
        <h1>{curriculum.name}</h1>
        <h3>{curriculum.role}</h3>
        {
          curriculum.profiles &&
          <ul>
            <li><a href={curriculum.profiles.linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>
            <li><a href={curriculum.profiles.github} target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        }
        <h2>Contato e informações</h2>
        <p>{curriculum.email}</p>
        <p>{curriculum.phone}</p>
        <p>{curriculum.city} - {curriculum.state}</p>
        <h2>Perfil profissional</h2>
        <p>{curriculum.presentation}</p>
        <h2>Tecnologias</h2>
        {
          curriculum.stacks &&
          <ul>
            {
              curriculum.stacks.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))
            }
          </ul>
        }
        <h2>Formação</h2>
        {
          curriculum.education &&
          curriculum.education.map((course, index) => (
            <div key={index}>
              <h6>{course.type}</h6>
              <h4>{course.course}</h4>
              <h5>{course.instituion}</h5>
              {/* TODO: Adicionar lógica para, caso a data seja no futuro, o texto seja "Conclusão em..." */}
              <p>Concluído em {course.end_date}</p>
            </div>
          ))
        }
        <h2>Experiência profissional</h2>
        {
          curriculum.work &&
          curriculum.work.map((job, index) => (
            <div key={index}>
              <h4>{job.role}</h4>
              <h5>{job.company}</h5>
              {/* TODO: Fazer lógica para, caso a data seja no futuro, mostre "Atualmente" */}
              <p>{job.start_date} - {job.end_date}</p>
            </div>
          ))
        }
        <h2>Idiomas</h2>
        {
          curriculum.languages &&
          curriculum.languages.map((language, index) => (
            <div key={index}>
              <h4>{language.language}</h4>
              <p>{language.level}</p>
            </div>
          ))
        }
        <h2>Habilidades</h2>
        {
          curriculum.others_experiences &&
          curriculum.others_experiences.map((experience, index) => (
            <div key={index}>
              <h4>{experience.role}</h4>
              <h5>{experience.instituion}</h5>
              <p>{experience.start_date} - {experience.end_date}</p>
            </div>
          ))
        }
      </main>
    </>
  )
}

export default Curriculum;
