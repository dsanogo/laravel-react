import React from 'react'

const Success = ({message}) => {
    return (
        <div className="col-md-6">
            {
                message && (
                    <p className="alert alert-success">
                        {message}
                    </p>
                )
            }
        </div>
    )
}

export default Success
