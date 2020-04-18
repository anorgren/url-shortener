import React from 'react';
import { connect } from 'react-redux';

import Header from "./header";
import BrandedForm from "../inputForms/brandedurlform";
import UnbrandedForm from "../inputForms/unbrandedurlform";
import TypeSelector from "../typeSelector/typeSelector";
import './app.css'


class App extends React.Component {
    _renderForm() {
        if (this.props.createBranded) {
            return (<BrandedForm/>)
        } else {
            return (<UnbrandedForm/>)
        }
    }

    render() {
        return (
            <div className='ui container'>
                <Header/>
                <div className='ui segments'>
                    <div className='ui center aligned segment'>
                        <h2>Generate A New Short Url</h2>
                    </div>
                    <div className='ui basic center aligned segment'>
                        <TypeSelector/>
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
        createBranded: state.urlType.isBranded
    }
};

export default connect(mapStateToProps)(App);
