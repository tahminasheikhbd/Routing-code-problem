/** @format */

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navlinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className='bg-fuchsia-200 h-20 flex items-center'>
      <nav className='container  flex items-center justify-between'>
        <Link to='/' className='font-bold text-2xl text-zinc-700'>
          Magg
        </Link>
        <ul className='flex items-center gap-4'>
          {navlinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `font-medium text-teal-500 ${
                    isActive && "text-fuchsia-300 bg-fuchsia-700 p-2 rounded-md"
                  }`
                }>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button>Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
