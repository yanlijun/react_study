import React from 'react';
import {connect} from 'dva';
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

function mapStateToProps(state) {
    return {
        listName: state.myApp.listName,
        items: state.myApp.items,
    }
}
export default connect(mapStateToProps)(App);