import React, { Component } from 'react';
import './clientfilter.css';

export class Clientfilter extends Component {
     render() {
          return(
               <React.Fragment>
                    <div className="filter-container">  
                         <div>
                              <h5>Client:</h5>
                              <select className="dropdown-filter" onChange={this.props.filterByClient}>
                                   <option value="All">All</option>
                                   <option value="BMW">BMW</option>
                                   <option value="Mercedes">Mercedes</option>
                                   <option value="Mini">Mini</option>
                                   <option value="Lexus">Lexus</option>
                                   <option value="Jaguar">Jaguar</option>
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