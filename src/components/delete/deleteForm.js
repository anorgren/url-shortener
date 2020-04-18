import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import { deleteShortenedUrl } from "../../actions/deleteUrlActions";


class DeleteForm extends React.Component {
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
                <input {...formProps.input} autoComplete="off" placeholder={formProps.placeholder}/>
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        );
    };

    renderErrorMessage = () => {
        let message;
        if(this.props.deleteMessage) {
            message = this.props.deleteMessage
        }
        return (
            <div className='ui basic center aligned segment'>
                {message}
            </div>
        )
    };

    onSubmit = (formValues) => {
        this.props.deleteShortenedUrl(formValues.urlCode);
    };

    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                <Field name="urlCode"
                       component={this.renderInput}
                       label='Url Code'
                       placeholder="The shortened url ending to edit"/>
                {this.renderErrorMessage()}
                <button className='ui button primary'
                        onClick={this.props.handleSubmit(values => {
                            this.onSubmit(values)
                            })}>
                        <i className="trash can icon"/>
                        Delete Url
                </button>
            </form>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        deleteMessage: state.deleteUrl.deleteMsg
    }
};


const validate = (formValues) => {
    const errors = {};
    if (!formValues.urlCode) {
        errors.urlCode = "You must enter a valid url code."
    }
    return errors;
};

export default connect(mapStateToProps, { deleteShortenedUrl })(reduxForm({
    form: "deleteForm",
    validate: validate,
    destroyOnUnmount: false,
})(DeleteForm));