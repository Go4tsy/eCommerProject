// import Search from '../components/Search';

const SearchForm = ({ handleSubmit, handleChange, searchString }) => {
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          onChange={handleChange}
          value={searchString}
          required     
        />
        </form>
    );
};

export default SearchForm;