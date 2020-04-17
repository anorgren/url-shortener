import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import { createNewShortenedUrl } from '../../actions/inputActions'

class UnbrandedForm extends React.Component {
    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>Url To Shorten</label>
                <div className='ui action input'>
                    <input {...formProps.input} autoComplete='off' type="text" placeholder='Url to shorten'/>
                    <button className="ui button primary">Shorten</button>
                </div>
            </div>
        )
    };

    onSubmit = (formValues) => {
        let urlObject = {
            originalUrl: formValues.url,
            baseUrl: "http://localhost"
        };
        this.props.createNewShortenedUrl(urlObject);
        this.props.reset();
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="url" component={this.renderInput} placeholder="Url to be shortened..." />
            </form>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        // remainingGuesses: state.remainingGuesses.remainingGuesses
    }
};


const validate = (formValues) => {
    const errors = {};

    try {
       new URL(formValues.url)
    } catch (_) {
        errors.url = "Invalid url"
    }
    return errors;
};

export default connect(mapStateToProps, {createNewShortenedUrl})(reduxForm({
    form: "unbrandedUrl",
    validate: validate,
    destroyOnUnmount: false,
})(UnbrandedForm));