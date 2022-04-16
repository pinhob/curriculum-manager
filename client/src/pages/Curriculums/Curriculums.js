import { MockedCurriculums } from "../../helpers/mocks/MockedCurriculums";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCurriculumButton from '../../components/AddCurriculumButton';

const Curriculums = () => {
  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    setCurriculums(MockedCurriculums);
  }, []);

  return (
    <main>
      <h1>Currículos</h1>

      {
        curriculums.map((curriculum) => (
          <article key={curriculum.id}>
            <h2>{curriculum.name}</h2>
            <h3>{curriculum.role}</h3>
            <ul>
              {curriculum.stacks.map((stack, index) => (<li key={index}>{stack}</li>))}
            </ul>
            <Link to={`/curriculos/${curriculum.id}`}>Ver currículo</Link>
          </article>
        ))
      }

      <AddCurriculumButton />
    </main>
  )
};

export default Curriculums;
