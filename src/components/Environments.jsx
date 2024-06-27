import { images } from "../assets/images/images";

const Environments = () => {
  return (
    <div id="environments" className="environments">
      <div className="container environments__wrap">
        <div className="environments__content">
          <h3 className="environments__content-title">
            Think CI/CD for dev environments
          </h3>
          <p className="environments__content-text">
            We invented prebuilds so application code, configuration and
            infrastructure can all be stored as machine-executable code in your
            git repositories and applied to dev environments automatically and
            continuously.
          </p>
          <div className="environments__content-links">
            <a href="#" className="environments__content-links-link orange">
              More on prebuilds
            </a>
            <a href="#" className="environments__content-links-link pink">
              Documentation
            </a>
          </div>
        </div>
        <div className="environments__pic">
          <img src={images.environments} alt="" className="environments__pic-img" />
        </div>
      </div>
    </div>
  );
};

export default Environments;
