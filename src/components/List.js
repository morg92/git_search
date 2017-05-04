import React, { Component } from 'react';

export default class List1 extends Component {
    render() {
        const { data, ui } = this.props;
        return (
            <div>
                <ul>
                  {data.userList}
                </ul>
            </div>
        );
    }
}



