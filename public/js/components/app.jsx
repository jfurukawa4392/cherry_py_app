import React from 'react';
import SearchBar from './search_bar';
import Display from './display';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query: "",
      data: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    axios.get(`/search/?query=${this.state.query}`)
      .then(res => {

      })
  }

  handleUpdate(e){
    this.setState({
      query: e.target.value
    });
  }

  render(){
    return(
      <content
        className="app-outer">
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
          query={this.state.query}/>
        <Display
          data={this.state.data}/>
      </content>
    );
  }
}

export default App;
