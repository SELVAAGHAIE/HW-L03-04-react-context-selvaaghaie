
import  { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme}`}>
      <p>The current theme is {theme}.</p>
    </main>
  );
};

export default Main;