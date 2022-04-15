import { MockedCurriculums } from "../../helpers/mocks/MockedCurriculums";
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
          <div key={index}>
            <h2>{curriculum.name}</h2>
            <h3>{curriculum.role}</h3>
            <ul>
              {curriculum.stacks.map((stack, index) => (<li key={index}>{stack}</li>))}
            </ul>
          </div>
        ))
      }
    </main>
  )
};

export default Curriculums;
