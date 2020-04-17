import React from 'react';
import { connect } from 'react-redux';

import { requestBranded, requestUnbranded } from "../../actions/typeSelectorActions";
import "./typeSelector.css"

class TypeSelector extends React.Component {
    componentDidMount() {
    }

    // renderClassNames = () => {
    //     let baseClassName = "ui button navy";
    //     let activeClassName = "ui button positive active";
    //     let classNames = {
    //         unbranded: baseClassName,
    //         branded: baseClassName
    //     };
    //     if (this.props.createBranded) {
    //         classNames.branded = activeClassName;
    //         classNames.unbranded = activeClassName;
    //     } else {
    //         classNames.branded = activeClassName;
    //         classNames.unbranded = activeClassName;
    //     }
    //     return classNames;
    // };

    render() {
        return (

            <div className="ui buttons">
                <button className="ui button gray" onClick={this.props.requestUnbrandedUrl}>
                    Unbranded
                </button>
                <div className="or"/>
                <button className="ui navy button" onClick={this.props.requestBrandedUrl}>
                    Branded
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUnbrandedUrl: () => {
            dispatch(requestUnbranded())
        },
        requestBrandedUrl: () => {
            dispatch(requestBranded())
        }
    }

};

const mapStateToProps = state => {
    return {
        createBranded: state.urlType.isBranded
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelector);