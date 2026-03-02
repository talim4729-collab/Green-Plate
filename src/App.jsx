import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Landing from './pages/Landing';
import About from './pages/About';
import Menu from './pages/Menu';
import Team from './pages/Team';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />}>
         <Route index element={<Home/>} />
         <Route path='/landing' element={<Landing />} />
         <Route path='/about' element={<About />} />
         <Route path='/menu' element={<Menu />} />
         <Route path='/team' element={<Team />} />
         <Route path='/contact' element={<Contact />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;