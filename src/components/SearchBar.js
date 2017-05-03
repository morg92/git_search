import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
    }
        render() {
            return(
                <div>
                    <form method="GET">
                        <input name="user" type="text" placeholder="Insert user: " />
                        <input type= 'submit' name="Submit" value="Send" />
                    </form>
                </div>
            );
        }
    }