import React, { Component } from 'react';
import axios from "axios";
class Editcategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: this.props.category
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        axios.get(`http://localhost:8000/categories/${id}/edit`)
                .then(res => {
                    this.setState({
                        id: res.data.data.id,
                        name: res.data.data.name
                    });
                })
                .catch(err => {

                });
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.name !== ''){
            axios.put(`http://localhost:8000/categories/${this.state.id}/edit`, this.state)
                .then(res => {
                    if(res.status === 200){
                        this.props.history.push('/categories')
                    }
                })
                .catch(err => {

                });
        }
    }
    
    render() {
        return (
            <div className="col-md-6 offset-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Edit Category - {this.state.name}</label>
                        <input type="text" className="form-control" id="category" 
                                placeholder="Category name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                autoComplete="off"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Editcategory
