// import React,{ Component } from 'react';
// import ReactDOM from 'react-dom';
const List = React.createClass({
  render(){
    return(
    <div id="crud">
    <button className="btn btn-default">Add</button>
    <ul className="list-group">
      <Item/>
      <ItemEditor/>
    </ul>
  </div>
    )
  }
});
const Item =React.createClass({
  render(){
    return(
      <div>
         <li className="list-group-item">Cras justo odio
        <a href="#" className="fr glyphicon glyphicon-remove"></a>
        <a href="#" className="fr glyphicon glyphicon-edit"></a></li>
      </div>
    )
  }
});
const ItemEditor=React.createClass({
  render(){
    return(
      <div>
        <li className="list-group-item">
          <input type="text" className="item-edit" />
          <a href="#" className="glyphicon glyphicon-remove"></a>
          <a href="#" className="glyphicon glyphicon-ok"></a>
        </li>
    </div>
    )
  }
});
ReactDOM.render(
  <List/>,
  document.getElementById('app')
);