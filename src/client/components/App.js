import React, {Component} from 'react';

import {axiosInstance as axios, getIt} from '../endpoints';

export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.getIt = this.getIt.bind(this);
  }
  
  getIt(){
    console.log('click');
    axios.get(getIt)
      .then((response)=> {
      console.log(response.data);
      this.setState({
        text: response.data
      });
    })
    .catch((error)=> {
        if(error.response)
          this.setState({
            text: error.response
          });
      });
  }
  
  render(){
    return (
      <div>
        <div>{this.state.text}</div>
        <button onClick={this.getIt}>Get it</button>
      </div>
    )
  }
}