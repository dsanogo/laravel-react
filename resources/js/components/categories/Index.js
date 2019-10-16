import React, { Component } from 'react'
import CategoryList from './CategoryList'
import AddCategory from './AddCategory'

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            validationErrors: []
        }
    }

    componentDidMount = () => {
        this.getCategories();
      }

    getCategories = () => {
        const url = 'http://localhost:8000/categories';
        axios.get(url).then(res => {
            this.setState({
              categories: res.data.data
            });
          }).catch(err => {
            console.log('Oops couldn\' fetch data: ', err.errors);
        })
    }

    addCategory = (category) => {
        const url = 'http://localhost:8000/categories';
        axios.post(url, category).then(res => {
            this.setState({
                categories: [res.data.category, ...this.state.categories],
                validationErrors: []
            })
        }).catch(err => {
            this.setState({
                validationErrors: []
            });
            
            const {errors} = err.response.data;
            Object.keys(errors).forEach(error => {
                this.setState({
                    validationErrors: [...this.state.validationErrors, errors[error]]
                })
            });
        })
    }

    changeStatus = (id) => {
        const url = `http://localhost:8000/categories/${id}`;
        axios.patch(url).then(res => {
            this.getCategories();
        }).catch(err => {
            console.log('Oops, something went wrong: ', err)
        })
    }

    deleteCategory = (id) => {
        const url = `http://localhost:8000/categories/${id}`;
        axios.delete(url).then(res => {
            this.getCategories();
        }).catch(err => {
            console.log('Oops, something went wrong: ', err)
        })
    }

    render() {
        return (
            <div className="col-md-8 offset-2">
                <CategoryList  
                    categories={this.state.categories} 
                    changeStatus={this.changeStatus}
                    deleteCategory={this.deleteCategory}
                    />
                <AddCategory addCategory={this.addCategory}
                            errors={this.state.validationErrors}/>
            </div>
        )
    }
}

export default Category
