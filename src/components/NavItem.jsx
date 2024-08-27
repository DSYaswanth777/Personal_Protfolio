const NavItem = ({ item, onClick }) => (
  <li className="my-8 text-center font-semibold text-xl md:my-0">
    <a
      className="text-md nav-link nav-link-ltr font-semibold cursor-pointer "
      onClick={(e) => onClick(item.section, e)}
    >
      {item.label}
    </a>
  </li>
);
export default NavItem;
