import React from 'react';

const Display = (props) => {
  let lists = <ul></ul>
  let listItems;

  if(props.data){
    lists = Object.keys(props.data).map((el, idx) => {
      listItems = props.data[el].map((val, jdx) => {
        return(
          <li key={jdx}>
            {val.join(' ')}
          </li>
        )
      });

      return(
        <ul key={el}>
          {el.toUpperCase()}
          {listItems}
        </ul>
      )
    });
  }

  if(props.data !== null){

  }

  return(
    <div className="display-outer">
      {lists}
    </div>
  );
}

export default Display;
