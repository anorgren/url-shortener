import React from 'react';
import { connect } from 'react-redux';

import queryString from "query-string";
import EditForm from "./editForm";
import DeleteForm from "../delete/deleteForm";
import EditDeleteSelector from "../typeSelector/editDeleteSelector";


class EditDeletePage extends React.Component {

    _renderForm() {
        if (this.props.isEdit) {
            return (<EditForm queryValue={queryString.parse(this.props.location.search).urlCode}/>)
        } else {
            return (<DeleteForm queryValue={queryString.parse(this.props.location.search).urlCode}/>)
        }
    }

    render() {
        return (
            <div className='ui container'>
                <div className='ui segments'>
                    <div className='ui center aligned segment'>
                        <h2>Edit Existing Url</h2>
                    </div>
                    <div className='ui basic center aligned segment'>
                        <EditDeleteSelector/>
                    </div>
                    <div className='ui basic segment'>
                        {this._renderForm()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isEdit: state.isEdit.isEdit
    }
};

export default connect(mapStateToProps)(EditDeletePage);
