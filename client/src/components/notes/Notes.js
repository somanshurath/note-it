import React, { Fragment, useEffect, useState } from 'react';
import '../../App.css';
import { Link, Navigate, redirect } from 'react-router-dom';
import { getNotes, addNote } from '../../actions/note';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import Moment from 'react-moment';

const Notes = ({ getNotes, addNote, noteAdded, note: { notes, loading } }) => {
    useEffect(() => {
        getNotes();
    }, [getNotes]);

    const [formData, setFormData] = useState({
        title: '',
        note: '',
    });
    const { title, note } = formData;

    const Submit = async (e) => {
        e.preventDefault();
        addNote({ title, note });
    };

    if (noteAdded) {
        location.reload();
    }

    return loading ? (
        <div className='loading'>Loading</div>
    ) : (
        <Fragment>
            <div>
                <form class='note-form' onSubmit={(e) => Submit(e)}>
                    <div class='mb-3'>
                        <input
                            type='text'
                            class='form-control inp'
                            id='title'
                            placeholder='Title'
                            value={title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div class='mb-3'>
                        <textarea
                            type='text'
                            class='form-control inp'
                            id='note'
                            placeholder='Note Content'
                            value={note}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    note: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                    <div class='d-flex justify-content-around'>
                        <button className='btn btn-success me-3' type='submit'>
                            <i class='fa fa-plus' aria-hidden='true'></i> Add
                        </button>
                    </div>
                </form>
            </div>
            <div className='Main'>
                <div
                    className='notes'
                    data-packery='{ "itemSelector": ".note", "gutter": 20 }'
                >
                    {notes.map((note) => (
                        <div className='note'>
                            <h5>{note.title}</h5>
                            <div>
                                <Moment
                                    key='note._id'
                                    className='date'
                                    format='DD/MM/YY'
                                >
                                    {note.date}
                                </Moment>
                            </div>
                            <p className='note-content'>{note.note}</p>
                            <button class='btn btn-danger'>
                                <i class='fa-xs fa-solid fa-trash'></i>
                            </button>
                            <button class='btn btn-warning mx-3'>
                                <i class='fa-xs fa-solid fa-pen'></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

Notes.propTypes = {
    setAlert: PropTypes.func.isRequired,
    getNotes: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
    noteAdded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    note: state.note,
    noteAdded: state.note.noteAdded,
});

export default connect(mapStateToProps, { getNotes, addNote })(Notes);
