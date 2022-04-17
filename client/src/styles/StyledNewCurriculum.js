import styled from "styled-components/macro";

const StyledNewCurriculum = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  margin: 0 auto;
  max-width: var(--site-max-width);
  padding: 1rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
  }
`

export default StyledNewCurriculum;
