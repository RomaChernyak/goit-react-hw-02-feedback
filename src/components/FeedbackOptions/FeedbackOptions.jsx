import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <ul className="buttons">
                {
                    options.map((item, index) => (
                        <li key={index}>
                            <button type="button" onClick={onLeaveFeedback}>
                                {item}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};