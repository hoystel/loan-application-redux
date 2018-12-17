import React, { Component } from 'react';
import axios from 'axios';
//import { browserHistory } from 'react-router';

class NewLoanApplication extends Component {
     state = {
          application: {
               appId: null,
               client: null,
               amount: null,
               status: 'Pending'
          }
     }

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
          //fire off the state to firebase and redirect to index page
          axios.post('', this.state.application)
               .then(response => {
                    console.log(response)
               })
               .catch(error => {
                    console.log(error)
               })
               //browserHistory.push("/");
     }

     render() {
          return(
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
                    {this.state.application.appId}
                    {this.state.application.client}
                    {this.state.application.amount}
                    {this.state.application.status}
               </form>
          )
     }
}

export default NewLoanApplication;