import React from 'react'
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <div className="alert alert-danger text-center">
            <h3>404 Page Not Found...</h3>
            <button className="btn btn-primary">
                <Link to='' className="alert-link text-light">Take me Home</Link>
            </button>
            
        </div>
    )
}

export default Error404