import logo from "../../assets/images/logo.png";
import "./style.css";

const Header = () => {
  return (
    <header className="container">
      <img width="120px" alt="Logo do Rick e Morty" src={logo} />
    </header>
  );
};

export default Header;
