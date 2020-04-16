import React from 'react';
import { connect } from 'react-redux';

import Header from "./header";
import UnbrandedForm from "../inputForms/unbrandedUrlForm";


class App extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <Header/>
                <UnbrandedForm/>
            </div>
        )
    }
}

export default connect()(App);