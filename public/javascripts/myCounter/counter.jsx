import React from 'react';
export default class ActiveBody extends React.Component {
  constructor(props) {
    super(props);
    this.handlClickAdd = this.handlClickAdd.bind(this);
    this.handlClickAdd = this.handlClickFell.bind(this);
  }
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
        <button onClick={this.handlClickAdd}>Add</button>{' '}
        <button onClick={this.handlClickFell}>Fell</button><br />
      </div>
    )
  }
};