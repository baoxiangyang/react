import React from 'react';
export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date(), unreadMessages: [1,2,3]};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      this.interId = setInterval(function(){
        this.setState({date:new Date()});
      }.bind(this),1000);
    }
    componentWillUnmount() {
      clearInterval(this.interId);
    }
    handleClick(event) {
      console.log('this is:', this);
    }
    render() {
       return (
           <div>
               <h1 onClick={this.handleClick}>hello world</h1>
               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
               {this.state.unreadMessages.length > 0 &&
                <h2>
                    You have {this.state.unreadMessages.length} unread messages.
                </h2>
            }
           </div>
       );
    }
}