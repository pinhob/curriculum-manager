import styled from 'styled-components/macro';

const StyledCurriculums = styled.main`
  max-width: var(--site-max-width);
  padding: 1rem;
  margin: 0 auto;


  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
  }

  .curriculums__card {
    background-color: var(--light-gray);
    border-radius: 15px;
    margin: 1rem auto;
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 0 0.3rem;
    transition: background-color 0.3s ease;
  }

  .curriculums__card:hover, .curriculums__card:focus {
    background-color: var(--medium-light-gray);
    transition: background-color 0.3s ease;
  }

  .card__name {
    color: var(--dark-purple);
    font-size: 1.5rem;
    font-weight: bold;
  }

  .card__role {
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.3rem 0;
  }

  .card__skills {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 0 0.5rem;
  }

  .card__skill {
    background-color: var(--light-purple);
    border-radius: 15px;
    color: var(--white);
    font-weight: 500;
    padding: 0.2rem 0.5rem;
    transition: background-color 0.3s ease;
  }

  .card__skill:hover, .card__skill:focus {
    background-color: var(--dark-purple);
    font-weight: 600;
    transition: background-color 0.3s ease;
  }


  .card__link {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
  }


  .card__link a {
    align-items: center;
    cursor: pointer;
    color: var(--dark-purple);
    display: flex;
    flex-flow: column;
    font-weight: 500;
    text-decoration: none;
  }

  .card__link a:hover, .card__link a:focus {
    font-weight: 600;
  }

  .add__button {
    background-color: var(--dark-purple);
    border-radius: 15px;
    color: var(--white);
    font-weight: 800;
    font-size: 1.2rem;
    display: block;
    padding: 0.8rem;
    text-decoration: none;
    text-align: center;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .add__button:hover, .add__button:focus {
    background-color: var(--shadow-dark-purple);
    transition: background-color 0.3s ease;
  }
`;

export default StyledCurriculums;
