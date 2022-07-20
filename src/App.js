import './App.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact';
import Cart from './components/Cart';
import InPersonTraining from './Subpages/InPersonTraining';




function App() {
  return (
  <>
    <header>
      <Navigation />
    </header>
    <main>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Trainings/InPerson_training' element={<InPersonTraining />} />

    </Routes>
    </main>
  </>
  );
}

export default App;
