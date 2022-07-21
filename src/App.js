import './App.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact';
import Cart from './components/Cart';
import InPersonTraining from './Subpages/InPersonTraining';
import { useState, useEffect } from 'react';
import SearchForm from './searchFunctionality/SearchForm';
import Search from './components/Search';



function App() {
  const [data, setData] = useState([])
  const [searchString, setSearchString] = useState('')


  function getProducts() {
    
 

    const url = "https://fakestoreapi.com/products/category/"
    const newUrl = `${url}${searchString}`
    
    console.log(newUrl)

    fetch(newUrl)
      .then(response => response.json())
      .then(response => {
        setData(response);
        console.log(response)


      })
      .catch(console.error);
  }

  useEffect(() => {
    getProducts();


  }, []);

  return (
    <>

      <header>
        <Navigation />
        <SearchForm getProducts={getProducts} data={data} setSearchString={setSearchString} />
      </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Trainings/InPerson_training' element={<InPersonTraining />} />
          <Route path='/Search' element={<Search data={data} setData={setData} />} />


        </Routes>

      </main>
    </>
  );
}

export default App;
