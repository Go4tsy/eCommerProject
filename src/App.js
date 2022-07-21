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
  const [data, setData]= useState([])




  function getProducts() {

    const url = "https://fakestoreapi.com/products/category/"
    const newUrl = `${url}${data}`
    console.log(newUrl)

    fetch(newUrl)
      .then(response => response.json())
      .then(response => {
        setData(response);
        console.log(response)
        console.log(data)
        
      })
      .catch(console.error);
  }

  useEffect(() => {
    getProducts();
    

  }, []);

  // function handleChange(event) {
  //   setSearchString(event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
    
  // }

return (
  <>
   
    <header>
      <Navigation />
      <SearchForm   getProducts={getProducts} data={data} setData={setData} />
    </header>
    <main>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Trainings/InPerson_training' element={<InPersonTraining  />} />
        <Route path='/Search' element={<Search  data={data} setData={setData} /> } />
        
        
      </Routes>
      
    </main>
  </>
);
}

export default App;
