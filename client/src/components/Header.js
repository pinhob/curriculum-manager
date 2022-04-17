import { Link } from "react-router-dom";
import { StyledHeader } from "../styles";

const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>Sandy&Júnior</h1>
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
