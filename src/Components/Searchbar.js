import React from 'react';
import './Searchbar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <div className='searchSection'>
        <div className='findUs'> 
          <div class="dropdown">
              <button className='btn2'>Find Us</button>
                  <div class="dropdown-options">
                      <ul>
                          <li><a href="/contact">Find A Salon</a></li>
                          <li><a href="/brands">Find A Distributor</a></li>
                          <li><a href="/contact">Find A Retail Store</a></li>
                          <li><a href="/contact">Find A Class</a></li>
                      </ul>
                  </div>
          </div>
        </div>
      <div>
      <form onSubmit={this.handleSubmit}>
        <input className='Searchbar'
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search Your Products"
        />
        <button className='btn2' type="submit">Search</button>
      </form>
      </div>
      </div>
    );
  }
}

export default SearchBar;