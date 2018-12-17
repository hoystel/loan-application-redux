import React, { Component } from 'react';
import './clientfilter.css';

class Clientfilter extends Component {
     render() {
          return(
               <React.Fragment>
                    <div className="filter-container">  
                         <div>
                              <h5>Client:</h5>
                              <select className="dropdown-filter" onChange={this.props.filterByClient}>
                                   <option value="All">All</option>
                                   <option value="Deutsche Bank">Deutsche Bank</option>
                                   <option value="Natwest PLC">Natwest PLC</option>
                                   <option value="JP Morgan">JP Morgan</option>
                                   <option value="Citi Bank PLC">Citi Bank PLC</option>
                              </select>
                         </div>
                         {/* TODO THIS IS AN OR - MAKE BOTH APPLY? */}
                         <div>
                              <h5>Status:</h5>
                              <select className="dropdown-filter" onChange={this.props.filterByStatus}>
                                   <option value="All">All</option>
                                   <option value="Pending">Pending</option>
                                   <option value="Approved">Approved</option>
                                   <option value="Denied">Denied</option>
                              </select>
                         </div>
                    </div>
               </React.Fragment>
          )
     }
}

export default Clientfilter;