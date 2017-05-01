// import React,{ Component } from 'react';
// import ReactDOM from 'react-dom';
const List = React.createClass({
  getInitialState(){
    return {
      key:0,
      list:new Map(),
      editList:new Map()
    }
  },
  add(){
    const key = ++this.state.key;
    this.state.editList.set(key,{value:''});
    this.forceUpdate();
  },
  removeItem(id){
    this.state.list.delete(id);
    this.forceUpdate();
  },
  removeEditor(id){
    this.state.editList.delete(id);
    this.forceUpdate();
  },
  render(){
    const listDOM = [];
    const editListDOM=[];
    for(let entity of this.state.list){
      listDOM.push(<Item onRemove={this.removeItem} 
      id={entity[0]} key={entity[0]} value={entity[1].value}/>)
    }
    for(let entity of this.state.editList){
      editListDOM.push(<ItemEditor onRemove={this.removeEditor} 
      id={entity[0]} key={entity[0]} value={entity[1].value}/>)
    }
    return(
    <div>
    <button onClick={this.add} className="btn btn-default">Add</button>
    <ul className="list-group">
    {listDOM}
    {editListDOM}
    </ul>
  </div>
    )
  }
});
const Item =React.createClass({
  render(){
    return(
      <div>
         <li className="list-group-item">{this.props.value}
        <a href="#" className="fr glyphicon glyphicon-remove"></a>
        <a href="#" className="fr glyphicon glyphicon-edit"></a></li>
      </div>
    )
  }
});
const ItemEditor=React.createClass({
  getInitialState(){
    return{
      value:''
    }
  },
  remove(){
    this.props.onRemove(this.props.id);
  },
  handleChange(e){
    // this.state.value = e.target.value;
    // this.forceUpdate();
    this.setState({
      value:e.target.value
    });
  },
  render(){
    return(
      <div>
        <li className="list-group-item">
          <input type="text" className="item-edit" 
          onChange={this.handleChange} value={this.state.value}/>
          <a href="#" className="glyphicon glyphicon-remove" 
          onClick={this.remove}></a>
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