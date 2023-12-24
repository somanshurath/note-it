import React, { Fragment, useEffect, useState } from 'react';
import '../../App.css';
import { Link, Navigate, Redirect } from 'react-router-dom';
import { addNote, updateNote } from '../../actions/note';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import axios from 'axios';

const UniversalNote = ({
    setAlert,
    addNote,
    updateNote,
    note: { loading },
}) => {
    const [formData, setFormData] = useState({
        title: '',
        note: '',
        category: '',
        color: '',
    });
    const { title, note, category, color } = formData;

    const Submit = async (e) => {
        e.preventDefault();
        addNote({ title, note, category, color });
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
                            <i className='fa fa-plus' aria-hidden='true'></i>{' '}
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

UniversalNote.propTypes = {
    setAlert: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
    addNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    note: state.note,
});

export default connect(mapStateToProps, { setAlert, addNote })(UniversalNote);
