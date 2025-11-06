const navItems = ["Home", "About", "Products", "Users"];

function NavMenu() {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}
export default NavMenu;