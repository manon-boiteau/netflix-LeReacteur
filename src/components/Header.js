import NetflixLogo from "../assets/img/netflix-logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={NetflixLogo} alt="Netflix logo" />
      </div>
    </header>
  );
};

export default Header;
