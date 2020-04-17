import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import { createNewShortenedUrl } from '../../actions/inputActions'

class BrandedForm extends React.Component {
    renderInputUrl = (formProps) => {
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

    renderInputBrandedTerm = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>Branded Term</label>
                <input {...formProps.input} autoComplete='off' type="text" placeholder="Your custom url ending"/>
            </div>
        )
    };

    onSubmit = (formValues) => {
        let urlObject = {
            originalUrl: formValues.url,
            isBranded: true,
            urlCode: formValues.brandedTerm,
            baseUrl: "http://localhost:3001"
        };
        this.props.createNewShortenedUrl(urlObject);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="url" component={this.renderInputUrl}/>
                <Field name='brandedTerm' component={this.renderInputBrandedTerm}/>
            </form>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        state
    }
};


const validate = (formValues) => {
    const errors = {};

    if(formValues.length < 1) {
        errors.length = "Branded term not be empty."
    }

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
})(BrandedForm));