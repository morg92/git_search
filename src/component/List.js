import React from 'react';
import { FilterKey } from './FilterKey';

const list = () => (
    <div>
        <ul>
            <li>
                Name: {' '}
                <FilterKey key='name'></FilterKey>
            </li>
            <li>
                Avatar: {' '}
                <FilterKey key='avatar_url'></FilterKey>
            </li>
            <li>
                Repos: {' '}
                <FilterKey key='public_repos'></FilterKey>
            </li>
        </ul>
    </div>
);
export default list;