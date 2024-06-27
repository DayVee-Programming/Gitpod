const FooterPoint = ({ point }) => {
  return (
    <li className="footer__content-points-item">
      <a href={point.to} className="footer__content-points-item-link">
        {point.value}
      </a>
    </li>
  );
};

export default FooterPoint;