import React from 'react';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <content
        className="app-outer">
        Root Render
      </content>
    );
  }
}

export default Root;
