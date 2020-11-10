import React, { Component } from 'react'

class SearchAppointments extends Component {
    render(){
        return(
            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchApts"
                  type="text"
                  className="form-control"
                  aria-label="Search Appointments"
                  onChange={e=> this.props.searchApts(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="caret" />
                  </button>
    
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    <button className={
                        'sort-by dropdown-item ' +
                        (this.props.orderBy==='name' ? 'active' : '')
                    } 
                    onClick={e=> this.props.changeOrder('name', this.props.orderDir)}
                    href="#">
                      name
                    </button>
                    <button className={
                        'sort-by dropdown-item ' +
                        (this.props.orderBy==='phone' ? 'active' : '')
                    }
                    onClick={e=> this.props.changeOrder('phone', this.props.orderDir)}
                    href="#">
                      phone
                    </button>
                    <button className={
                        'sort-by dropdown-item ' +
                        (this.props.orderBy==='passportId' ? 'active' : '')
                    } 
                    onClick={e=> this.props.changeOrder('passportId', this.props.orderDir)}
                    href="#">
                      passportId
                    </button>
                    <div role="separator" className="dropdown-divider" />
                    <button className={
                        'sort-by dropdown-item ' +
                        (this.props.orderDir==='asc' ? 'active' : '')
                    } 
                    onClick={e=> this.props.changeOrder(this.props.orderBy, 'asc')}
                    href="#">
                      Asc
                    </button>
                    <button className={
                        'sort-by dropdown-item ' +
                        (this.props.orderDir==='desc' ? 'active' : '')
                    } 
                    onClick={e=> this.props.changeOrder(this.props.orderBy, 'desc')}
                    href="#">
                      Desc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        )
    }
}

export default SearchAppointments