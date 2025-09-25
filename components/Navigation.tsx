export function Navigation() {
  const navItems = ["אודות", "שירותי המרפאה", "ביקורות", "כתבות ופרסומים", "קביעת תור"];

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-between items-center gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.replace(" ", "-")}`}
              className="nav-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 