import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/survey/101">Survey </Link>
      <Link to="/freelances">Profiles</Link>
    </nav>
  );
}

export default Header;
