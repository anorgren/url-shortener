import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import { createNewShortenedUrl } from '../../actions/inputActions';


class UnbrandedForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className=" ui tiny error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className= `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} type='text' autoComplete="off" placeholder={formProps.placeholder}/>
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        );
    };

    renderOutputMsg = () => {
        let message;
        if (this.props.resultUrl === "default") {
            message = "";
        } else if (this.props.resultUrl.shortUrl) {
            message = "Your shortened url: " + this.props.resultUrl.shortUrl
        }
        return (
            <div className='ui segment basic center aligned'>
                {message}
            </div>
        )
    };

    onSubmit = (formValues) => {
        let urlObject = {
            originalUrl: formValues.url,
            baseUrl: "https://mern-url-app.herokuapp.com/url"
        };
        this.props.createNewShortenedUrl(urlObject);
        this.props.reset();
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error main-form">
                <Field name="url"
                       component={this.renderInput}
                       placeholder="Url to be shortened..."
                       label="Url To Shorten"
                />
                {this.renderOutputMsg()}
                <div className='ui segment basic center aligned bottom-component'>
                    <button className='ui button primary'
                            onClick={this.props.handleSubmit(values => {
                                this.onSubmit(values)
                            })}>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        resultUrl: state.resultUrl.shortenedUrl
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