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

        if(this.state.category !== ''){
            this.props.addCategory(this.state);
        }
        if(this.state.category.length >= 3){
            this.setState({
                category: ''
            })
        }
    }

    displayErrors = () => {
        return this.props.errors.length ? (
            <div className="alert alert-danger">
                {
                    this.props.errors.map(error => {
                        return (<p key={error}>
                            {error}
                        </p>)
                    })
                }
            </div>
        ) : null;
    }
    render() {
        return (
            <div>
                {this.displayErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Add new category</label>
                        <input type="text" className="form-control" id="category" 
                                placeholder="Category name"
                                value={this.state.category}
                                onChange={this.handleChange}
                                autoComplete="off"/>
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
