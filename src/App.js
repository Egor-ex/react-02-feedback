import './App.css';
import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onLeaveFeedback = state => {
		this.setState(prevState => ({
			[state]: prevState[state] + 1,
		}));
	};

	countTotalFeedback() {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	}

	countPositiveFeedbackPercentage() {
		const { good } = this.state;
		return Math.round((good / this.countTotalFeedback()) * 100);
	}

	render() {
		const btnNames = Object.keys(this.state);
		const { good, neutral, bad } = this.state;

		return (
			<div className="App">
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={btnNames}
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>
				<Section title="Satistics">
					{this.countTotalFeedback() ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message="There is no feedback" />
					)}
				</Section>
			</div>
		);
	}
}

export default App;
