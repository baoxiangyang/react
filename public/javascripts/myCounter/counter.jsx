import React from 'react';
export default class ActiveBody extends React.Component {
  constructor(props) {
    super(props);
    this.handlClickAdd = this.handlClickAdd.bind(this);
    this.handlClickFell = this.handlClickFell.bind(this);
  }
  handlClickAdd() {
    this.props.action.add(5);
  }
  handlClickFell() {
    var s = this.props.action.fell(4);
  }
  handlClickTest(){
    var a = this.props.action.test(1000);
    console.log(a);
  }
  shouldComponentUpdate(next) {
    if(next.number == this.props.number){
      return false;
    }
    return true;
  }
  render() {
  	const {number} = this.props;
    return (
      <div>
      	<p>{number}</p>
        <button onClick={this.handlClickAdd}>Add</button>{' '}
        <button onClick={this.handlClickFell}>Fell</button><br />
        <button onClick={this.handlClickTest.bind(this)}>Test</button><br />
      </div>
    )
  }
};