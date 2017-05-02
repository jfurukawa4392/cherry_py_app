import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
  }

  handleUpdate(e){
    e.preventDefault();

    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    let xhr
  }

  render(){
    return(
      <form method="get" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value="Search..."
          onChange={e => this.handleUpdate(e)}
          name="query"/>
        <button type="submit">Search Queries</button>
      </form>
    );
  }
}

export default SearchBar;
