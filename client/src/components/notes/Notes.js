import React, { Fragment, useEffect, useState } from 'react';
import '../../App.css';
import { Link, Navigate, redirect } from 'react-router-dom';
import { getNotes, deleteNote } from '../../actions/note';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Notes = ({
    getNotes,
    deleteNote,
    note: { notes, loading, deleted },
    auth: { isAuthenticated },
}) => {
    useEffect(() => {
        getNotes();
    }, [getNotes]);

    setTimeout(() => {
        if (!isAuthenticated) {
            return <Navigate replace to='/login' />;
        }
    }, 3000);

    const deleteNotebtn = async (noteId) => {
        await deleteNote(noteId);
    };

    // if (deleted) {
    //     return <Navigate replace to='/dashboard' />;
    // }

    const cntNotes = notes.length;

    return loading ? (
        <div className='loading'>Loading...</div>
    ) : cntNotes ? (
        <Fragment>
            <div className='Main'>
                <div className='notes'>
                    {notes.map((note) => (
                        <div className='note' key='note._id'>
                            <h5 className='inlineBlock'>{note.title}</h5>
                            <Moment className='date' format='DD/MM/YY'>
                                {note.date}
                            </Moment>
                            <div>
                                <div className='categories'>
                                    {note.category.map((category) => (
                                        <div className='category'>
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className='note-content'>{note.note}</p>
                            <button
                                class='btn btn-danger btn-sm'
                                key={note._id}
                                onClick={() => deleteNotebtn(note._id)}
                            >
                                <i class='fa-xs fa-solid fa-trash'></i>
                            </button>
                            <button class='btn btn-warning btn-sm mx-3'>
                                <i class='fa-xs fa-solid fa-pen'></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    ) : (
        <div className='loading'>
            No notes available. Click on "+ Add" button to make one.
        </div>
    );
};

Notes.propTypes = {
    getNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    note: state.note,
    auth: state.auth,
});

export default connect(mapStateToProps, { getNotes, deleteNote })(Notes);