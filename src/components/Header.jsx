
import  { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>Theme Manager</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
};

export default Header;