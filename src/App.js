import './App.scss';
import NavBar from './Navbar';
import Header from './Header';
import AboutMe from './AboutMe';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
    /* <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Timeline />
      </div> */
  );
}

export default App;
