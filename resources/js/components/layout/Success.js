import React from 'react'

const Success = ({message}) => {
    return (
        <div>
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
