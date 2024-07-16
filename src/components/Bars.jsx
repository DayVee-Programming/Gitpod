import { useContext } from "react";
import { GitPodContext } from "../context/gitPodContext";
import BarsLink from "./BarsLink";
import { IoMdCloseCircle } from "react-icons/io";

const Bars = ({ navbar }) => {
  const { setAreBarsOpen } = useContext(GitPodContext);

  return (
    <div className="bars" onClick={() => setAreBarsOpen(false)}>
      <div className="bars__wrap" onClick={(e) => e.stopPropagation()}>
        <ul className="bars__list">
          {navbar.links.map((link) => (
            <BarsLink link={link} key={link.id} />
          ))}
          <li className="bars__list-item">
            <a className="bars__list-item-link">
              Login
            </a>
          </li>
        </ul>
      </div>
      <IoMdCloseCircle className="bars__close" onClick={() => setAreBarsOpen(false)} />
    </div>
  );
};

export default Bars;
