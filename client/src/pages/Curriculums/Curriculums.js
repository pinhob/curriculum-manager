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
          </div>
        ))
      }
    </main>
  )
};

export default Curriculums;
