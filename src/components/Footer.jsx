
import  { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <p>&copy;Theme Manager.</p>
    </footer>
  );
};

export default Footer;