import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import { editShortenedUrl } from "../../actions/editUrlActions";
import { deleteShortenedUrl } from "../../actions/deleteUrlActions";

class EditForm extends React.Component {

    renderUrlCodeField = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>Url Code</label>
                <input {...formProps.input}
                       autoComplete='off'
                       type="text"
                       placeholder="The shortened url ending to edit"/>
            </div>
        )
    };

    renderNewUrlField = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>New Url</label>
                <input {...formProps.input}
                       autoComplete='off'
                       type="text"
                       placeholder="New url to link to current shortened url"/>
            </div>
        )
    };

    onSubmit = (formValues) => {
        if (formValues.edit) {
            let urlObject = {
                originalUrl: formValues.newLinkUrl,
                urlCode: formValues.urlCode,
            };
            this.props.editShortenedUrl(urlObject);
        } else {
            this.props.deleteShortenedUrl(formValues.urlCode);
        }
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="urlCode" component={this.renderUrlCodeField}/>
                <Field name='newLinkUrl' component={this.renderNewUrlField}/>
                <div className="ui buttons">
                    <button className='ui button'
                            onClick={this.props.handleSubmit(values => {
                                this.onSubmit({
                                    ...values, edit: true
                                })
                    })}>Edit Url</button>
                    <div className="or"/>
                    <button className='ui button'
                            onClick={this.props.handleSubmit(values => {
                                this.onSubmit({
                                    ...values, edit: false
                                })
                    })}>Delete Url</button>
                </div>
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

    if(formValues.urlCode) {
        if(formValues.urlCode.length < 1) {
            errors.length = "Must include a url ending to edit."
        }
    }

    try {
        new URL(formValues.url)
    } catch (_) {
        errors.url = "Invalid url"
    }
    return errors;
};

export default connect(mapStateToProps, { editShortenedUrl, deleteShortenedUrl })(reduxForm({
    form: "editForm",
    validate: validate,
    destroyOnUnmount: false,
})(EditForm));