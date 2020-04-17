import React from 'react';
import { connect } from 'react-redux';

import Header from "./header";
import UnbrandedForm from "../test/unbrandedUrlForm";
import BrandedForm from "./brandedUrlForm";
import TypeSelector from "../typeSelector/typeSelector";


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
                <TypeSelector/>
                {this._renderForm()}
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
