import React from 'react';

const Display = (props) => {
  let lists = <ul></ul>
  let listItems;
  let values;

  if(props.data && props.data != "error"){
    lists = Object.keys(props.data).map((el, idx) => {
      values = props.data[el];

      if(typeof values === 'string'){
        values = [values];
      } else if(typeof values === 'object' && !Array.isArray(values)){

      }

      listItems = values.map((val, jdx) => {
        return(
          <li key={jdx}>
            {Array.isArray(val) ? val.join(' ') : val}
          </li>
        )
      });

      return(
        <ul key={el}>
          <h3>{el.toUpperCase()}</h3>
          {listItems}
        </ul>
      )
    });
  } else if (props.data == "error"){
    lists = <h3>That was not a valid query, please try again</h3>
  } else {
    lists = <h3>Enter a query from the sidebar examples</h3>
  }


  return(
    <div className="display-outer">
      {lists}
    </div>
  );
}

export default Display;
