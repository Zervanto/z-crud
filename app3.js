// import React,{ Component } from 'react';
// import ReactDOM from 'react-dom';
class List extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        key:0,
        list:new Map()
      }      
  }
  add(){
    const key = ++this.state.key;
    this.state.list.set(key,'');
    this.forceUpdate();
  }
  save(id,value){
    this.state.list.set(id,value);
    this.forceUpdate();
  }
  removeItem(id){
    this.state.list.delete(id);
    this.forceUpdate();
  }
  render(){
    const listDOM = [];
    for(let entity of this.state.list){
      listDOM.push(<Item onRemove={this.removeItem.bind(this)} 
      onSave={this.save.bind(this)}
      id={entity[0]} key={entity[0]} value={entity[1]}/>)
    }
    return(
    <div>
    <button onClick={this.add.bind(this)} className="btn btn-default">Add</button>
    <ul className="list-group">
    {listDOM}
    </ul>
  </div>
    )
  }
}

class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit:true
    }
  }
  save(){
    this.props.onSave(this.props.id,this.refs.inputText.value);
    this.setState({isEdit:false});
  }
  edit(){
    this.setState({isEdit:true});
  }
  remove(){
    this.props.onRemove(this.props.id);
  }
  render(){
    return this.state.isEdit?
      <div>
        <li className="list-group-item">
          <input type="text" className="item-edit" ref="inputText"
         defaultValue={this.props.value}/>
          <a href="#" className="glyphicon glyphicon-remove" 
          onClick={this.remove.bind(this)}></a>
          <a href="#" className="glyphicon glyphicon-ok" onClick={this.save.bind(this)}></a>
        </li>
    </div>:
    <div>
         <li className="list-group-item">{this.props.value}
        <a href="#" className="fr glyphicon glyphicon-remove"
        onClick={this.remove.bind(this)}></a>
        <a href="#" className="fr glyphicon glyphicon-edit"
        onClick={this.edit.bind(this)}></a></li>
      </div>
  }
}
ReactDOM.render(
  <List/>,
  document.getElementById('app')
)