const NavbarItem = ({ link }) => {
  return (
    <li className="navbar__list-item">
      <a className="navbar__list-item-link">{link.value}</a>
    </li>
  );
};

export default NavbarItem;
