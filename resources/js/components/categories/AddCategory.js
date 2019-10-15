import React, { Component } from 'react'
import axios from "axios";
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
        this.props.addCategory(this.state);
        
        this.setState({
            category: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Add new category</label>
                        <input type="text" className="form-control" id="category" 
                                placeholder="Category name"
                                value={this.state.category}
                                onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right">Add</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default AddCategory
