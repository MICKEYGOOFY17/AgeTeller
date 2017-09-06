import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dob: '',
      birthday: '1992-06-21',
      showStats: false
    }
    this.changeDate = this.changeDate.bind(this);
    this.showDate = this.showDate.bind(this);
  }

  changeDate(event) {
    this.setState({
      dob: event.target.value
    })
  }

  showDate() {
    if(this.state.dob !== '') {
      this.setState({
        birthday: this.state.dob,
        showStats: true
      })
    }
    else {
      this.setState({
        showStats: false
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <Form inline>
          <h3>Choose your birth date!!!</h3>
          <FormControl type='date' onChange={this.changeDate}></FormControl>
          {' '}
          <Button onClick={this.showDate}>Submit</Button>
        </Form>
        {this.state.showStats ? <AgeStats dob={this.state.birthday}/> : <h2>Select a date</h2>}
      </div>
    )
  }
}

export default App;
