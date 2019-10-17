import React, { Component } from 'react';
import axios from "axios";
class Editcategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.category
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        axios.get(`http://localhost:8000/api/categories/${id}/edit`)
                .then(res => {
                    this.setState({
                        name: res.data.data.name
                    });
                })
                .catch(err => {
                    console.log('error => ', err);
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.name !== ''){
            const { id } = this.props.match.params;
            axios.patch(`http://localhost:8000/api/categories/${id}`, this.state)
                .then(res => {
                    if(res.status === 200){
                        this.props.history.push('/categories')
                    }
                })
                .catch(err => {
                    console.log("An error occured: ", err);
                });
        }
    }
    
    render() {
        return (
            <div className="col-md-6 offset-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Edit name - {this.state.name}</label>
                        <input type="text" className="form-control" id="name" 
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
