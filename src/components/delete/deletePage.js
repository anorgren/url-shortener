import React from 'react';
import { connect } from 'react-redux';

import DeleteForm from "./deleteForm";
import './delete.css'


class DeletePage extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <div className='ui segments delete-page'>
                    <div className='ui center aligned segment'>
                        <h2>Delete A Created Url</h2>
                    </div>
                    <div className='ui basic left aligned segment'>
                        <DeleteForm/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(DeletePage);
