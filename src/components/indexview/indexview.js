import React, { Component } from 'react';
import './indexview.css';

import { connect } from 'react-redux';

import SearchBox from './../searchbox/searchbox';
import ClientFilter from './../clientfilter/clientfilter';
import Spinner from './../spinner/spinner';

//import actions - the func
import { deleteApplication } from './../../actions/index';
import { approveApplication } from '../../actions/index';

class IndexView extends Component {
    state = {
        filteredList: null,
        filterApplied: false
    }

    // TODO merge these functions so filters work in tandem - MIGHT NEED TO JUST BE ONE FORM
    filterByClientHandler = (event) => {
        if(event.target.value !== "All") {
            let filtered = this.props.storeApplications
            let filteredResults = filtered.filter(item => item.client === event.target.value);
            this.setState({ filteredList: filteredResults, filterApplied: true });
        }
        if(event.target.value === "All") {
            this.setState({ filteredList: null, filterApplied: false});
        }
    }

    filterByStatusHandler = (event) => {
        if(event.target.value !== "All") {
            let filtered = this.props.storeApplications
            let filteredResults = filtered.filter(item => item.status === event.target.value);
            this.setState({ filteredList: filteredResults, filterApplied: true });
        }
        if(event.target.value === "All") {
            this.setState({ filteredList: null, filterApplied: false});
        }
    }

    deleteApplication = (appId) => {
        this.props.removeApplication(appId);
    }

    amendApplicationStatus = (event, appId) => {
        //get event
        const eventDesc = event.target.value;
        
        //if approve fire approve action 
        if(eventDesc === 'Approved') {
            const status = 'Approved';
            this.props.approveApplication(appId, status);
        }

        //if deny fire deny

        //if pending fire pending
    }

    render() {
        let loansToShow = <Spinner />;
        let filteredLoansToShow;

        //console.log(this.props.storeApplications);
        
        if(this.props.storeApplications !== null && this.state.filteredList == null) {
            loansToShow = this.props.storeApplications.sort(
                function (a, b) {
                return a.appId - b.appId;
              })
              .map(item => {
                return (
                    <div className="loan-row" key={item.appId}>
                        <div className="column">{item.appId}</div>
                        <div className="column">{item.client}</div>
                        <div className="column">£{item.amount}</div>
                        <div className="column">{item.status}</div>
                        <div className="column"><span onClick={() => this.deleteApplication(item.appId)}>Delete</span></div>
                        <div className="column">
                            <select className="dropdown-filter" onChange={(event) => this.amendApplicationStatus(event, item.appId)}>
                                   <option value="nothing">...</option>
                                   <option value="Approved">Approve</option>
                                   <option value="Denied">Deny</option>
                                   <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                );
            })
        }

        if(this.state.filteredList) {
            filteredLoansToShow = this.state.filteredList.map(item => {
                return (
                    <div className="loan-row" key={item.appId}>
                        <div className="column">{item.appId}</div>
                        <div className="column">{item.client}</div>
                        <div className="column">£{item.amount}</div>
                        <div className="column">{item.status}</div>
                        <div className="column">Delete</div>
                        <div className="column">Edit</div>
                    </div>
                );
            }) 
        }

        return (
            <React.Fragment>
                <div className="top-cont">
                    <SearchBox />
                    <ClientFilter filterApplied={this.state.filterApplied} filterByClient={this.filterByClientHandler} filterByStatus={this.filterByStatusHandler}/>
                </div>

                {this.props.storeApplications == null ? loansToShow : null }

                <div className="loans-container">
                    {this.props.storeApplications !== null ?
                        <div className="loan-row header">
                            <div className="column">Application ID</div>
                            <div className="column">Client</div>
                            <div className="column">Amount</div>
                            <div className="column">Status</div>
                            <div className="column">Remove</div>
                            <div className="column">Amend</div>
                        </div> : null 
                    }

                    {this.state.filterApplied === false 
                        && this.props.storeApplications !== null
                        ? loansToShow : null}
                    
                    {filteredLoansToShow}
                </div>
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = (state) => ({
    storeApplications: state.store.applications
});

const mapDispatchToProps = (dispatch) => ({
    removeApplication: (appId) => dispatch(deleteApplication(appId)),
    approveApplication: (appId, status) => dispatch(approveApplication(appId, status))
});

export default connect(mapStateToProps,mapDispatchToProps)(IndexView);