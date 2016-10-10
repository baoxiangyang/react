import React from 'react';
export default class ActiveBody extends React.Component {
  handlClickAdd() {
    this.props.action.add(5)
  }
  handlClickFell() {
    this.props.action.fell(4)
  }
  render() {
  	const {action,number} = this.props;
    return (
      <div>
      	<p>{number}</p>
        <button onClick={this.handlClickAdd.bind(this)}>Add</button>{' '}
        <button onClick={this.handlClickFell.bind(this)}>Fell</button>
      </div>
    )
  }
};