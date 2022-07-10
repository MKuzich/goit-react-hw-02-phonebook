import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = e => {
    this.setState(prevState => ({
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const estimates = Object.values(this.state);

    return estimates.reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = value => {
    return this.countTotalFeedback()
      ? Math.floor((value / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalEstimates = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(good);

    return (
      <>
        <Section title="Please, give us your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrease}
          />
        </Section>
        <Section title="Statistics">
          {totalEstimates > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalEstimates}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
