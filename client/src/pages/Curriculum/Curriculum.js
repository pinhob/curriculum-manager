import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MockedCurriculums } from "../../helpers/mocks/MockedCurriculums";

const Curriculum = () => {
  const [curriculum, setCurriculum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const curriculum = MockedCurriculums.find((curriculum) => curriculum.id === Number(id));
    setCurriculum(curriculum);
  }, [id])

  console.log(curriculum)

  return (
    <main>
      <h1>{curriculum.name}</h1>
    </main>
  )
}

export default Curriculum;
