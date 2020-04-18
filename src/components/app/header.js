import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Url Shortner
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Create New
                </Link>
                <Link to="/update" className="item">
                    Update
                </Link>
                <Link to="/delete" className="item">
                    Delete
                </Link>
            </div>
        </div>
    )
};

export default Header;