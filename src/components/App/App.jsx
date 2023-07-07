import React, { Component } from 'react';
import { ReviewsWidget, interfaceInfo } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  calculateTotal = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    
    if (sum === 0) {
      return 0;
    }

    return sum;
  };

  calculatePositiveReviewsShare = () => {
    const result = Math.round((this.state.good / this.calculateTotal()) * 100);
    
    if (!result) {
      return 0;
    }

    return result;
  };

  handleUpdate = (event) => {
    const { target: { textContent } } = event;
    const propNameLowercased = textContent.toLowerCase();

    this.setState(prevState => ({
        // console.dir(prevState)
        [propNameLowercased]: prevState[propNameLowercased] + 1,
    }));
  };
  
  render() {
    return(
      <>
        <ReviewsWidget
          data={interfaceInfo}
          update={this.handleUpdate}
          state={this.state}
          total={this.calculateTotal}
          share={this.calculatePositiveReviewsShare}
        />
      </>
    );
  }
};