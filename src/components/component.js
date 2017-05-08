import React, { Component } from 'react';
import { take } from '../actions/index.js';

export default class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!ui.text.value.trim()) {
                            return;
                        }
                        dispatchTakeUser();
                    }}>
                    <input onChange={this.handleOnChange.bind(this)} />
                    <input type="button" value={ui.setText(this)}>
                        Search
                </input>
                </form>
                <div>
                <ul>
                    <li>
                        {data.userList}
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}

//ADD FUNCTION CALL