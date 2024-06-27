const NavbarItem = ({ link }) => {
  return (
    <li className="navbar__list-item">
      <a href={link.to} className="navbar__list-item-link">{link.value}</a>
    </li>
  );
};

export default NavbarItem;
