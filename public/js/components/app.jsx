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
        console.log(res);
        this.setState({
          data: res.data
        });
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
        <div className="menu">
          <h1>Insight Engines Queries</h1>
          <SearchBar
            handleSubmit={this.handleSubmit}
            handleUpdate={this.handleUpdate}
            query={this.state.query}/>
          <aside className="examples">
            <ul>
              <li>traffic</li>
              <li>logins to infected machines</li>
              <li>cisco traffic</li>
              <li>intrusion attacks from outside the US</li>
              <li>avg cpu load last week vs normal</li>
            </ul>
          </aside>
        </div>
        <div>
          <Display
            data={this.state.data}/>
        </div>
      </content>
    );
  }
}

export default App;
