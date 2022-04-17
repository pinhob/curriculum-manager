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

  .form {
    display: flex;
    flex-flow: column;
    width: 100%;
  }

  .form label {
    display: flex;
    flex-flow: column;
    font-size: 1.2rem;
    font-weight: 500;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .form__text__input {
  box-sizing: border-box;
  width: 100%;
  height: 40px; 
  font-size: 1rem;
  padding-left: 0.5rem;
  }

  .form__text__input:focus {
  outline: auto;
  outline-color: var(--light-purple);
  }

  input[type="date"]::-webkit-datetime-edit { 
    font-size: 1rem;
    height: 30px;
  }

  .form__btn {
    background-color: var(--dark-purple);
    width: 100%;
    border: 0;
    border-radius: 15px;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
  }

  .form__btn:hover, .form__btn:focus {
    cursor: pointer;
    background-color: var(--shadow-dark-purple);
    transition: background-color 0.3s ease;
  }
`

export default StyledNewCurriculum;
