import React from 'react';
export default class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    };
}
Greeting.propTypes = {
    name: React.PropTypes.string.isRequired
};
// 如果name没有传值，则会将name设置为默认的zhangyatao
Greeting.defaultProps = {
    name: 'zhangyatao'
}