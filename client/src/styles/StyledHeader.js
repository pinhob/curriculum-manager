import styled from "styled-components/macro";

const StyledHeader = styled.header`
  max-width: var(--site-max-width);
  margin: 0 auto;
  padding: 1rem;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--dark-purple);
  }

  h1:hover, h1:focus {
    color: var(--shadow-dark-purple);
  }
`;

export default StyledHeader;