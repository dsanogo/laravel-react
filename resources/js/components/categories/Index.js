import React, { Component } from 'react'
import CategoryList from './CategoryList'
import AddCategory from './AddCategory'

class Category extends Component {
    render() {
        return (
            <div>
                <CategoryList  />
                <AddCategory />
            </div>
        )
    }
}

export default Category
