const FooterSocial = ({ social }) => {
  return (
    <li className="footer__bottom-socials-item">
      <a className="footer__bottom-socials-item-pic">
        <img
          src={social.img}
          alt=""
          className="footer__bottom-socials-item-pic-img"
        />
      </a>
    </li>
  );
};

export default FooterSocial;
