import React, { Component } from 'react'

class AddCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Password</label>
                        <input type="password" className="form-control" id="category" 
                                placeholder="Password" 
                                onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default AddCategory
