import React, { Component } from 'react'
import axios from "axios";
class CategoryList extends Component {

    render() {
      const {categories} = this.props;
        return (
            <div>
                <h4>Categories list</h4>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
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
                                <td>
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
            </div>
        )
    }
}

export default CategoryList
