
import  { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, ThemeContext } from './Context/ThemeContext';

const Root = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);
