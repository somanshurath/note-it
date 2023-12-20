import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate, redirect } from 'react-router-dom';
import { getNotes } from '../../actions/note';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import '../../App.css';

const Notes = ({ getNotes, note: { notes, loading } }) => {

    useEffect(() => {
        getNotes();
    }, [getNotes]);

    return loading ? (
        <div className='loading'>Loading</div>
    ) : (
        <Fragment>
            <div className='notes'>
                {notes.map((note) => (
                    <div className='note'>
                        <h5>{note.title}</h5>
                        <p className='note-content'>{note.note}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

Notes.propTypes = {
    getNotes: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    note: state.note,
});

export default connect(mapStateToProps, { getNotes })(Notes);
