
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './components/Article';
import Footer from './components/Footer';

import Toggle from './components/Toggle';
// import UsersPage from './components/UsersPage';

function App() {
  return (
    <div className="App">
      <Toggle />
      <Article />
      <Footer/>
    </div>
  );
}

export default App;
