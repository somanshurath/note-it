import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


const Notes = ({ notes }) => notes !== null && notes.length > 0 && notes.map((alert) => (
    <div key={alert.id}>
        {/* className={`notes notes-${color}`} */}
        {alert.msg}
    </div>
));

Notes.propTypes = {
    notes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    notes: state.alert,
});

export default connect(mapStateToProps)(Notes);
