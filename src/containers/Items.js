import React, { PropTypes } from 'react';

const Items = ({onSubmit, text}) => (
    <li
    onSubmit={onSubmit}
    >
    {text}
    </li>
);

Items.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Items;