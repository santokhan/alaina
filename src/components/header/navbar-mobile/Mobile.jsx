import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import NavActive from '../navbar/NavActive';

export default function Navbar({ children }) {
  const [dropdown, setdropdown] = useState(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }

  return (
    <nav className="w-full border-t-2 border-sky-600 block lg:hidden bg-white z-40 fixed top-[80px] h-[calc(100vh_-_80px)]">
      <div className="flex items-center xl:order-2">
        <ul className="space-y-6 px-8 py-10">
          <NLink to="/">home</NLink>
          <NLink to="/about">about us</NLink>
          <NLink to="/services">services</NLink>
          <NLink to="/contact">contact</NLink>
          <NLink to="/blog">blog</NLink>
          <NLink to="/faq">FAQ</NLink>
          <NItem to="/testimonials">testimonials</NItem>
        </ul>
      </div>
    </nav>
  );
}

const linkClass =
  'text-gray-600 font-semibold transition-all ease-in uppercase hover:text-green-600 ';

export function NItem({ children, to }) {
  return (
    <li className="capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
export function DDItem({ children, to }) {
  return (
    <li className="py-3 px-6 relative font-medium">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}

export function NLink({ children, to }) {
  return (
    <li className="capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}

export function DDLink({ children, to }) {
  return (
    <li className="py-3 px-6 relative font-medium capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
