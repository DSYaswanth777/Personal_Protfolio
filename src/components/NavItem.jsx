const NavItem = ({ item, onClick }) => (
  <li className="my-8 text-center font-extra-bold text-xl md:my-0">
    <a
      className="text-md nav-link nav-link-ltr font-extra-bold cursor-pointer text-uppercase"
      onClick={(e) => onClick(item.section, e)}
    >
      {item.label}
    </a>
  </li>
);
export default NavItem;
