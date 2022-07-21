
import {useNavigate} from 'react-router-dom'

const SearchForm = ({getProducts,  setSearchString, searchString}) => {



let navigate = useNavigate()




    function handleChange(event) {
        setSearchString(event.target.value);
      
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        getProducts()
        navigate('/Search') 

       
      }

    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          onChange={handleChange}
          
          required     
        />
        </form>
    );
};

export default SearchForm;