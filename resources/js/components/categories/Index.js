import React, { Component } from 'react'
import CategoryList from './CategoryList'
import AddCategory from './AddCategory'

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
        categories: []
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
            console.log('Oops couldn\' fetch data: ', err);
        })
    }

    addCategory = (category) => {
        const url = 'http://localhost:8000/categories';
        axios.post(url, category).then(res => {
            this.setState({
                categories: [res.data.category, ...this.state.categories]
            })
        }).catch(err => {
            console.log('Oops, something went wrong: ', err)
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
                <AddCategory addCategory={this.addCategory}/>
            </div>
        )
    }
}

export default Category
