import React, { Component } from 'react'
import CategoryList from './CategoryList'
import AddCategory from './AddCategory'

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            validationErrors: [],
            alert_success: '',
            activePage: '',
            itemsCountPerPage: '',
            totalItemsCount: '',
            pageRangeDisplayed: ''
        }
    }

    componentDidMount = () => {
        this.getCategories();
      }

    getCategories = () => {
        const url = 'http://localhost:8000/api/categories';
        axios.get(url).then(res => {
            this.setState({
                categories: res.data.data.data,
                activePage: res.data.data.current_page,
                itemsCountPerPage: res.data.data.per_page,
                totalItemsCount: res.data.data.total,
            });
          }).catch(err => {
            console.log('Oops couldn\' fetch data: ', err.errors);
        })
    }

    addCategory = (category) => {
        const url = 'http://localhost:8000/api/categories';
        axios.post(url, category).then(res => {
            this.getCategories();
            this.setState({
                validationErrors: [],
            });
            this.flashSuccess('Successfully inserted');
        }).catch(err => {
            this.setState({
                validationErrors: []
            });
            if(err.response){
const {errors} = err.response.data;
            this.flashErrors(errors);
            }
            
        })
    }

    flashErrors = (errors) => {
        Object.keys(errors).forEach(error => {
            this.setState({
                validationErrors: [...this.state.validationErrors, errors[error]]
            })
        });

        setTimeout(() => {
            this.setState({
                validationErrors: []
            })
        }, 2000);
    }

    changeStatus = (id) => {
        const url = `http://localhost:8000/api/categories/${id}`;
        axios.patch(url).then(res => {
            this.getCategories();
            this.flashSuccess('Successfully updated');
        }).catch(err => {
            console.log('Oops, something went wrong: ', err)
        })
    }

    deleteCategory = (id) => {
        const url = `http://localhost:8000/api/categories/${id}`;
        axios.delete(url).then(res => {
            this.getCategories();
            this.flashSuccess('Successfully deleted');
        }).catch(err => {
            console.log('Oops, something went wrong: ', err)
        })
    }

    paginate = (pageNumber) => {
        axios.get(`http://localhost:8000/api/categories?page=${pageNumber}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                categories: res.data.data.data,
                activePage: res.data.data.current_page,
                itemsCountPerPage: res.data.data.per_page,
                totalItemsCount: res.data.data.total,
            })
        })
        .catch(err => {
        console.log('Error => ', err);
        })
    }

    flashSuccess = (message) => {
        this.setState({
            alert_success: message
        })

        setTimeout(() => {
            this.setState({
                alert_success: ''
            })
        }, 2000);
    }
    
    render() {
        return (
            <div className="col-md-8 offset-2">
                <CategoryList  
                    categories={this.state.categories}
                    pagination={this.state}
                    changeStatus={this.changeStatus}
                    deleteCategory={this.deleteCategory}
                    paginate={this.paginate}
                    success={this.state.alert_success}
                    flashSuccess={this.flashSuccess}
                    />
                <AddCategory addCategory={this.addCategory}
                            errors={this.state.validationErrors}/>
            </div>
        )
    }
}

export default Category
