import React, { Component } from 'react';
import './indexview.css';

import axios from 'axios';

import SearchBox from './../searchbox/searchbox';
import ClientFilter from './../clientfilter/clientfilter';
import Spinner from './../spinner/spinner';

class IndexView extends Component {
    state = {
        applications: [{
            appId: 192,
            client: 'Nationwide',
            status: 'Approved',
            amount: 500
        },
        {
            appId: 193,
            client: 'Citi Bank PLC',
            status: 'Pending',
            amount: 18000
        },
        {
            appId: 194,
            client: 'Natwest PLC',
            status: 'Approved',
            amount: 27500
        },
        {
            appId: 195,
            client: 'Deutsche Bank',
            status: 'Pending',
            amount: 27500
        },
        {
            appId: 196,
            client: 'Halifax',
            status: 'Approved',
            amount: 3670
        },
        {
            appId: 197,
            client: 'Deutsche Bank',
            status: 'Pending',
            amount: 13000
        },
        {
            appId: 198,
            client: 'JP Morgan',
            status: 'Approved',
            amount: 5631
        },
        {
            appId: 199,
            client: 'RBS',
            status: 'Denied',
            amount: 187000
        }],
        filteredList: null,
        filterApplied: false
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
            </React.Fragment>
        );
    }
    
}

export default IndexView;