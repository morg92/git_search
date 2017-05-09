import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatchTakeUser(this.state.value);
    }

    render() {
        return (
            <div>
                <form
                    onSubmit = {this.handleSubmit}>
                    <input type="text" placeholder="Insert user :" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
                <div>
                    <ul>
                        <li>
                            {JSON.stringify(this.props.data.userList,null,'\t')}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}