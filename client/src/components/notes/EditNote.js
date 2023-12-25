import React, { Fragment, useEffect, useState } from 'react';
import '../../App.css';
import { Link, Navigate, Redirect } from 'react-router-dom';
import { addNote, editNote, getEditNote } from '../../actions/note';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

const EditNote = ({ setAlert, editNote, note: { loading, notes } }) => {
    const id = window.location.pathname.split('/')[3];

    const notei = notes.find((note) => note._id === id);

    const [formData, setFormData] = useState({
        title: notei ? notei.title : '',
        note: notei ? notei.note : '',
        category: notei ? notei.category : '',
        color: notei ? notei.color : '',
    });

    useEffect(() => {
        if (notei) {
            setFormData({
                title: notei.title,
                note: notei.note,
                category: notei.category,
                color: notei.color,
            });
        }
    }, [notei]);

    const { title, note, category, color } = formData;

    const Submit = async (e) => {
        e.preventDefault();
        if (title === '') {
            setAlert('Title is required', 'danger');
        } else if (note === '') {
            setAlert('Note is required', 'danger');
        } 
        else {
            editNote(id, { title, note, category, color });
        }
    };

    if (loading) {
        return <Navigate replace to='/dashboard' />;
    }

    return (
        <Fragment>
            <div>
                <form className='note-form' onSubmit={(e) => Submit(e)}>
                    <div className='backbtn'>
                        <Link to={'/dashboard'} className='btn btn-warning'>
                            <i
                                class='fa fa-chevron-circle-left'
                                aria-hidden='true'
                            ></i>{' '}
                            Back
                        </Link>
                    </div>
                    <div className='mt-5 mb-4'>
                        <input
                            type='text'
                            className='form-control inp'
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
                    <div className='mb-3'>
                        <textarea
                            rows={4}
                            type='text'
                            className='form-control inp textarea'
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
                    <div className='mb-3'>
                        <input
                            type='text'
                            className='form-control inp'
                            id='category'
                            placeholder='Category'
                            value={category}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    category: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='mb-3 d-flex justify-content-around'>
                        <select
                            class='form-control inp form-select'
                            value={color}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    color: e.target.value,
                                })
                            }
                        >
                            <option selected>
                                Choose color: (White default)
                            </option>
                            <option value='Yellow'>Yellow</option>
                            <option value='Blue'>Blue</option>
                            <option value='Green'>Green</option>
                        </select>
                    </div>
                    <div className='mt-4 d-flex justify-content-around'>
                        <button type='submit' className='btn btn-success me-3'>
                            <i className='fa fa-edit' aria-hidden='true'></i>{' '}
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

EditNote.propTypes = {
    setAlert: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    getEditNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    note: state.note,
});

export default connect(mapStateToProps, {  editNote, setAlert })(
    EditNote
);
