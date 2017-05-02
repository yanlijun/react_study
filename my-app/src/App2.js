import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
    <ul className={props.listName}>
        {
            props.items.map((key, item) => <li key={key}>{item}</li>)
        }
    </ul>
);

App.propTypes = {
    listName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.number),
};

export default App
