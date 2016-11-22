import React from 'react';
export default class ActiveBody extends React.Component {
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