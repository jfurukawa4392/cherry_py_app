import React from 'react';
import SearchBar from './search_bar';
import Display from './display';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query: ""
    };
  }

  render(){
    return(
      <content
        className="app-outer">
        App Render
        <SearchBar />
        <Display />
      </content>
    );
  }
}

export default App;
