import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Success from '../layout/Success';

class CategoryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activePage: this.props.pagination.activePage ? this.props.pagination.activePage : 1
    }
  }
  
  handlePageChange = (pageNumber) => {
    console.log(`Active page is now ${pageNumber}`);
    this.props.paginate(pageNumber);
  }

    render() {
      const {categories} = this.props;
      const {activePage, itemsCountPerPage, totalItemsCount} = this.props.pagination;
        return (
            <div>
                <h4>Categories list</h4>
                {this.props.success && <Success message={this.props.success}/>}
                <table className="table">
                  <thead className="thead-dark">
                    <tr style={{textAlign: 'center'}}>
                      <th scope="col">#</th>
                      <th scope="col">Category</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created at</th>
                      <th scope="col">Updated at</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!categories.length && (
                      <tr>
                        <td colSpan="6" style={{textAlign: 'center'}}>No data found.</td>
                      </tr>
                      )
                  }
                    {categories && categories.map(category => {
                      const className = category.active ? 'btn btn-danger' : 'btn btn-primary';
                          return (
                            <tr key={category.id}>
                                <th scope="row">{category.id}</th>
                                <td>{category.name}</td>
                                <td>{category.active == 1 ? <i className="fas fa-lock-open" title="Enabled"></i> : <i className="fas fa-lock" title="Disabled"></i>}</td>
                                <td>{category.created_at}</td>
                                <td>{category.updated_at}</td>
                                <td style={{width: '165px'}}>
                                  <span>
                                      <button className="btn">
                                          <Link to={'/categories/'+ category.id + '/edit'}
                                            style={{color:'black'}}
                                          ><i className="fas fa-pencil-alt"></i></Link>
                                      </button>
                                    </span>
                                    <span>
                                      <button className={className}
                                        onClick={() => this.props.changeStatus(category.id)}
                                      >
                                        {category.active ? (<i className="fas fa-lock" title="Disable"></i>) : (<i className="fa fa-lock-open" title="Enable"></i>)}
                                      </button>
                                    </span>
                                    <span>
                                      <button className="btn btn-danger"
                                            onClick={() => this.props.deleteCategory(category.id)}
                                            >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </span>
                                    
                                </td>
                            </tr>
                          )
                      })
                    }
                  </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <Pagination 
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={totalItemsCount}
                    onChange={this.handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
              </div>
            </div>
        )
    }
}

export default CategoryList
