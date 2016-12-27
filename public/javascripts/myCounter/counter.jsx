import React from 'react';
export default class ActiveBody extends React.Component {
  handlClickAdd() {
    this.props.action.add(5)
  }
  handlClickFell() {
    var s = this.props.action.fell(4);
    console.log(s)
  }
  handlClickTest(){
    var a = this.props.action.test(1000);
    console.log(a);
  }
  render() {
  	const {action,number} = this.props;
    return (
      <div>
      	<p>{number}</p>
        <button onClick={action.add}>Add</button>{' '}
        <button onClick={this.handlClickFell.bind(this)}>Fell</button><br />
        <button onClick={this.handlClickTest.bind(this)}>Test</button><br />
      </div>
    )
  }
};