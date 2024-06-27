import { images } from "../assets/images/images";
import FooterPoint from "./FooterPoint";
import FooterSocial from "./FooterSocial";

const Footer = ({ footer }) => {
  return (
    <div id="footer" className="footer">
      <div className="full-container footer__wrap">
        <div className="footer__content">
          <ul className="footer__content-points">
            {footer.firstList.map((point) => (
              <FooterPoint point={point} key={point.id} />
            ))}
          </ul>
          <ul className="footer__content-points">
            {footer.secondList.map((point) => (
              <FooterPoint point={point} key={point.id} />
            ))}
          </ul>
          <ul className="footer__content-points">
            {footer.thirdList.map((point) => (
              <FooterPoint point={point} key={point.id} />
            ))}
          </ul>
          <ul className="footer__content-points">
            {footer.fourthList.map((point) => (
              <FooterPoint point={point} key={point.id} />
            ))}
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-logo">
            <img
              src={images.logo2}
              alt=""
              className="footer__bottom-logo-img"
            />
            <span className="footer__bottom-logo-span">
              Copyright © 2021 Gitpod
            </span>
          </div>
          <ul className="footer__bottom-socials">
            {footer.socials.map((social) => (
              <FooterSocial social={social} key={social.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
