import { MockedCurriculums } from "../../helpers/mocks/MockedCurriculums";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import StyledCurriculums from "../../styles/StyledCurriculums";
import { Header } from "../../components";
import resume from '../../assets/icons/resume.svg';

const Curriculums = () => {
  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    let curriculumsList = JSON.parse(localStorage.getItem('curriculums'));

    if (!curriculumsList) {
      curriculumsList = localStorage.setItem('curriculums', JSON.stringify(MockedCurriculums));
      setCurriculums(curriculumsList);
    }

    setCurriculums(curriculumsList);
  }, []);

  return (
    <>
      <Header />
      <StyledCurriculums>
        <h1>Currículos</h1>
        {console.log("AQUI", curriculums)}
        {
          curriculums
            ? (curriculums.map((curriculum) => (
              <article key={curriculum.id} className="curriculums__card">
                <div className="card__infos">
                  <h2 className="card__name">{curriculum.name}</h2>
                  <h3 className="card__role">{curriculum.role}</h3>
                  <ul className="card__skills">
                    {curriculum.stacks.map((stack, index) => (<li key={index} className="card__skill">{stack}</li>))}
                  </ul>
                </div>
                <div className="card__link">
                  <Link to={`/curriculos/${curriculum.id}`}><img src={resume} alt="A resume illustration" height={50} />Ver</Link>
                </div>
              </article>
            )))
            : (<p>Carregando...</p>)
        }
        <div className="add__button--wrapper">
          <Link to="/curriculo/novo" className="add__button">Adicionar currículo</Link>
        </div >
      </StyledCurriculums >
    </>
  )
};

export default Curriculums;
