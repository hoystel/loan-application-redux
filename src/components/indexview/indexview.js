import React, { Component } from 'react';
import './indexview.css';

import axios from 'axios';

import SearchBox from './../searchbox/searchbox';
import ClientFilter from './../clientfilter/clientfilter';
import Spinner from './../spinner/spinner';

class IndexView extends Component {
    state = {
        applications: null,
        filteredList: null,
        filterApplied: false
    }

    componentWillMount() {
        axios.get('https://loanapplication-1fe0e.firebaseio.com/applications/-LSZXRuosShEJQGw592t.json')
            .then(response => {
                this.setState({ applications: response.data });
            });
        //axios.post('https://loanapplication-1fe0e.firebaseio.com/applications/-LSVBr7-374Rc7Q1tYIB.json', this.state.applications);
    }

    // TODO merge these functions so filters work in tandem - MIGHT NEED TO JUST BE ONE FORM
    filterByClientHandler = (event) => {
        if(event.target.value !== "All") {
            let filtered = this.state.applications
            let filteredResults = filtered.filter(item => item.client === event.target.value);
            this.setState({ filteredList: filteredResults, filterApplied: true });
        }
        if(event.target.value === "All") {
            this.setState({ filteredList: null, filterApplied: false});
        }
    }

    filterByStatusHandler = (event) => {
        if(event.target.value !== "All") {
            let filtered = this.state.applications
            let filteredResults = filtered.filter(item => item.status === event.target.value);
            this.setState({ filteredList: filteredResults, filterApplied: true });
        }
        if(event.target.value === "All") {
            this.setState({ filteredList: null, filterApplied: false});
        }
    }

    render() {
        let loansToShow = <Spinner />;
        let filteredLoansToShow;
        
        if(this.state.applications !== null && this.state.filteredList == null) {
            loansToShow = this.state.applications.map(item => {
                return (
                    <div className="loan-row" key={item.appId}>
                        <div className="column">{item.appId}</div>
                        <div className="column">{item.client}</div>
                        <div className="column">£{item.amount}</div>
                        <div className="column">{item.status}</div>
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

                {this.state.applications == null ? loansToShow : null }

                <div className="loans-container">
                    {this.state.applications !== null ?
                        <div className="loan-row header">
                            <div className="column">Application ID</div>
                            <div className="column">Client</div>
                            <div className="column">Amount</div>
                            <div className="column">Status</div>
                        </div> : null 
                    }

                    {this.state.filterApplied == false 
                        && this.state.applications !== null
                        ? loansToShow : null}
                    
                    {filteredLoansToShow}
                </div>
                
                {/* <div>new application form to submit to firebase</div> */}
            </React.Fragment>
        );
    }
    
}

export default IndexView;