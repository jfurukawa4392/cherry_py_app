import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form method="get" onSubmit={e => this.props.handleSubmit(e)}>
        <input
          type="text"
          value={this.props.query}
          onChange={e => this.props.handleUpdate(e)}
          name="query"/>
        <button type="submit">Search Queries</button>
      </form>
    );
  }
}

export default SearchBar;
