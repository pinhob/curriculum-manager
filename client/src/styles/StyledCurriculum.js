import styled from "styled-components/macro";

const StyledCurriculum = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  margin: 0 auto;
  max-width: var(--site-max-width);
  padding: 1rem;

  .title--purple {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--dark-purple);
  }

  .header {
    display: flex;
    flex-flow: column wrap;
    gap: 0.3rem;
  }

  .header__name {
    font-size: 2rem;
    font-weight: bold;
    color: var(--dark-purple);
  }

  .header__role {
    font-size: 1.5rem;
    color: var(--black);
  } 

  .header__list {
    display: flex;
    gap: 0 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .header__list__item a {
    text-decoration: none;
    font-weight: 500;
    color: var(--black);
  }

  .infos__info {
    font-weight: 500;
  }

  .skills__list {
    list-style: none;
    margin-top: 5px;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 0 0.5rem;
  }

  .skills__list__item {
    background-color: var(--light-purple);
    border-radius: 15px;
    color: var(--white);
    font-weight: 500;
    padding: 0.2rem 0.5rem;
    transition: background-color 0.3s ease;
  }

  .skills__list__item:hover, .skills__list__item:focus {
    background-color: var(--dark-purple);
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  .card__wrapper {
    display: flex;
    flex-flow: column wrap;
    gap: 0.5rem;
  }

  .card {
    display: flex;
    flex-flow: column wrap;
  }

  .card__type {
    font-weight: 500;
    color: var(--light-purple);
  }

  .card__institution {
    color: var(--gray);
    font-size: 0.8rem;
    font-weight: 600;
  }

  .card__instituition__name {
    font-weight: 700;
  }
  
  .card__dates {
    margin: 0;
    margin-top: 0.3rem;
  }
`;

export default StyledCurriculum;