import React, { Component} from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {
difference(date) {
    let today = new Date().getTime();
    let birthday = new Date(date).getTime();
    let diff = Math.abs(today - birthday);
    let millsecondsPerDay = 1000 * 3600 * 24;
    let days = Math.floor(diff / millsecondsPerDay);
    let years = Math.floor(days/ 365);
    days -= years * 365;
    let months = Math.floor(days/ 31);
    days -= months * 31;
    return `${years} Years, ${months} months, ${days} Days`;
  }

  render() {
    return(
      <div>
        <h3>{this.difference(this.props.dob)}</h3>
        <img src={partyPopper} alt='Congrats' className='partyPopper'/>
      </div>
    )
  }
}

export default AgeStats;
