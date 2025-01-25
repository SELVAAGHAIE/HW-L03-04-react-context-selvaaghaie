
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './themes.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;