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
        <button onClick={action.add}>Add</button>{' '}
        <button onClick={action.fell}>Fell</button><br />
      </div>
    )
  }
};