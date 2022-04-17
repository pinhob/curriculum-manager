import { NewCurriculumForm, Header } from "../../components";
import { StyledNewCurriculum } from "../../styles";

const NewCurriculum = () => {
  return (
    <>
      <Header />
      <StyledNewCurriculum>
        <h1 className="title">Adicionar currículo</h1>
        <NewCurriculumForm />
      </StyledNewCurriculum>
    </>
  )
};

export default NewCurriculum;
