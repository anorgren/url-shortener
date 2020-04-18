import React from 'react';
import { connect } from 'react-redux';

import Header from "../app/header";
import DeleteForm from "./deleteForm";


class DeletePage extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <Header/>
                <div className='ui segments'>
                    <div className='ui center aligned segment'>
                        <h2>Delete Created Urls</h2>
                    </div>
                    <div className='ui basic segment'>
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
