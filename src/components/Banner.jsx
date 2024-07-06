import { images } from "../assets/images/images";
import BannerImage from "./BannerImage";

const Banner = ({ banner }) => {
  return (
    <div id="banner" className="banner">
      <div className="container banner__wrap">
        <div className="banner__content">
          <h1 className="banner__content-title">Always Ready to Code.</h1>
          <p className="banner__content-text">
            Spin up fresh, automated dev environments for each task, in the
            cloud, in seconds.
          </p>
          <div className="banner__content-bottom">
            <div className="banner__content-bottom-try">
              <a className="banner__content-bottom-try-link">Try Now</a>
              <ul className="banner__content-bottom-try-list">
                {banner.images.map((image) => (
                  <BannerImage image={image} key={image.id} />
                ))}
              </ul>
            </div>
            <p className="banner__content-bottom-text">
              Open a workspace. <br />
              Start from any Git context.
            </p>
          </div>
        </div>
        <div className="banner__pic">
          <img src={images.banner} alt="" className="banner__pic-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
