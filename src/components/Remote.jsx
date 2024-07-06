import { useContext } from "react";
import { images } from "../assets/images/images";
import { GitPodContext } from "../context/gitPodContext";
import { FaPlay } from "react-icons/fa";

const Remote = () => {
  const { setIsPlaying } = useContext(GitPodContext);

  return (
    <div id="remote" className="remote">
      <div className="full-container remote__wrap">
        <h2 className="remote__title">Remote-first. Secure by design.</h2>
        <div className="remote__pic" onClick={() => setIsPlaying(true)}>
          <img src={images.remote} alt="" className="remote__pic-img" />
          <FaPlay className="remote__pic-play" />
        </div>
        <p className="remote__text">
          You no longer need an over-powered laptop to code, Gitpod works just
          as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
          centralizes all source code and never stores it on insecure machines
          and networks.
        </p>
        <ul className="remote__list">
          <li className="remote__list-item">
            <a className="remote__list-item-link">
              <img
                src={images.chromeIcon}
                alt=""
                className="remote__list-item-link-img"
              />
              <span className="remote__list-item-link-span">
                Chrome Extension
              </span>
            </a>
          </li>
          <li className="remote__list-item">
            <a className="remote__list-item-link">
              <img
                src={images.firefoxIcon}
                alt=""
                className="remote__list-item-link-img"
              />
              <span className="remote__list-item-link-span">
                Firefox Extension
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Remote;
