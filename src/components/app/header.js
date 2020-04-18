import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Url Shrtnr
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Create New
                </Link>
                <Link to="/edit" className="item">
                    Edit
                </Link>
                <Link to="/delete" className="item">
                    Delete
                </Link>
            </div>
        </div>
    )
};

export default Header;