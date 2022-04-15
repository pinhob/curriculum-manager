import { MockedCurriculums } from "../../helpers/mocks/MockedCurriculums";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Curriculums = () => {
  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    setCurriculums(MockedCurriculums);
  }, []);

  return (
    <main>
      <h1>Currículos</h1>

      {
        curriculums.map((curriculum, index) => (
          <article key={index + 1}>
            <h2>{curriculum.name}</h2>
            <h3>{curriculum.role}</h3>
            <ul>
              {curriculum.stacks.map((stack, index) => (<li key={index}>{stack}</li>))}
            </ul>
            <Link to={`/curriculos/${index + 1}`}>Ver currículo</Link>
          </article>
        ))
      }
    </main>
  )
};

export default Curriculums;
