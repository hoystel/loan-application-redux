import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewApplication } from './../../actions/index';

class NewLoanApplication extends Component {
     state = {
          application: {
               appId: null,
               client: null,
               amount: null,
               status: 'Pending'
          }
     }

     // this functionality can stay tbh 
     handleFormChange = (event) => {
          let name = event.target.name;
          let value = event.target.value;
          let newState = JSON.parse(JSON.stringify(this.state.application));
          
          newState[name] = value;
          console.log(newState);
          this.setState({ application : newState })
     }

     handleSubmit = (event) => {
          event.preventDefault();
          //call a dispatcher and update global store and redirect to index page
          this.props.addNewLoanApp(
               this.state.application.appId, 
               this.state.application.client, 
               this.state.application.amount, 
               this.state.application.status);
               this.props.history.push('/');
     }

     render() {
          return(
               <React.Fragment>
                    <form onSubmit={this.handleSubmit}>
                         <p>Application ID:</p>
                         <input type="text" name="appId" placeholder="Application ID" onChange={this.handleFormChange}/>
                         <br/>
                         <p>Client:</p>
                         <input type="text" name="client" placeholder="client" onChange={this.handleFormChange}/>
                         <p>Amount (GBP):</p>
                         <input type="text" name="amount" placeholder="amount" onChange={this.handleFormChange}/>
                         <br/><br/>
                         <input type="submit" value="Submit"/>
                    </form>
               </React.Fragment>
          )
     }
}

const mapDispatchToProps = (dispatch) => ({
     addNewLoanApp: (appId, client, amount, status) => dispatch(addNewApplication(appId, client, amount, status))
});

export default connect(null, mapDispatchToProps)(NewLoanApplication);