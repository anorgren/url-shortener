import React from 'react';
import { connect } from 'react-redux';

import "./typeSelector.css"
import {requestDeleteFunctionality, requestEditFunctionality} from "../../actions/editDeleteSelectActions";

class EditDeleteSelector extends React.Component {
    render() {
        return (
            <div className="ui buttons fluid">
                <button className="ui button gray" onClick={this.props.requestEditFunctionality}>
                    Update
                </button>
                <div className="or"/>
                <button className="ui navy button" onClick={this.props.requestDeleteFunctionality}>
                    Delete
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestEditFunctionality: () => {
            dispatch(requestEditFunctionality());
        },
        requestDeleteFunctionality: () => {
            dispatch(requestDeleteFunctionality());
        }
    }

};

const mapStateToProps = state => {
    return {
        createBranded: state.urlType.isBranded
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteSelector);