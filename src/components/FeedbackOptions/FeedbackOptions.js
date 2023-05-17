import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<div className={s.btnBox}>
			{options.map(option => {
				return (
					<button
						type="button"
						onClick={() => onLeaveFeedback(option)}
						key={option}
						className={s.buttons}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
