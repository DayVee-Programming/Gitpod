import { useContext } from "react";
import { images } from "../assets/images/images";
import NavbarItem from "./NavbarItem";
import { GitPodContext } from "../context/gitPodContext";

const Navbar = ({ navbar }) => {
  const { areBarsOpen, setAreBarsOpen } = useContext(GitPodContext);

  return (
    <header id="header" className="header">
      <nav className="navbar">
        <div className="full-container navbar__wrap">
          <a href="#" className="navbar__logo">
            <img className="navbar__logo-img" src={images.logo} alt="" />
          </a>
          <ul className="navbar__list">
            {navbar.links?.map((link) => (
              <NavbarItem link={link} key={link.id} />
            ))}
          </ul>
          <button className="navbar__btn">Login</button>
          <div className="navbar__bars" onClick={() => setAreBarsOpen(true)}>
            <span className="navbar__bars-span"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
