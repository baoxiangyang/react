import React from 'react';
export default class Form extends React.Component {
	constructor(props) {
        super(props);
        this.state = {inputValue: '',textValue:''};
        this.change = this.change.bind(this);
        this.change2 = this.change2.bind(this);
        this.submit = this.submit.bind(this);
    }
	change(e) {
        this.setState({inputValue: e.target.value});
    }
    change2(e) {
		this.setState({textValue: e.target.value});
    }
    submit(e) {
        e.preventDefault();
        console.log('A name was submitted: ', this.state.value);
    }
    componentDidMount() {
    	console.log(this.textInput);
    }
    render() {
        return (
            <form onSubmit={this.submit} >
                <label>
                    Name:
                    <input type="text" 
                        value={this.state.inputValue}
                        onChange={this.change}
                        ref = {input => this.textInput = input} 
                    />
                </label>
                <label>
                    Name:
                    <textarea value={this.state.textValue} onChange={this.change2} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    };
}