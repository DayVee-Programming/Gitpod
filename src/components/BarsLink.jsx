const BarsLink = ({ link }) => {
  return (
    <li className="bars__list-item">
      <a className="bars__list-item-link">
        {link.value}
      </a>
    </li>
  );
};

export default BarsLink;
