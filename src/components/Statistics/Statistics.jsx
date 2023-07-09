import PropTypes from 'prop-types';

export const Statistics = ({ state, buttons, total, positivePercentage }) => {
    return (
        <ul className="stats-container">
            {buttons.map((item, index) => (
                <li key={index}>
                    <p>
                        {item}: <span>{state[item.toLowerCase()]}</span>
                    </p>
                </li>
            ))}
            <li>
                <p>
                    Total: {total()}
                </p>
            </li>
            <li>
                <p>
                    Positive feedback: {positivePercentage()}%
                </p>
            </li>
        </ul>
    );
};

Statistics.propTypes = {
    state: PropTypes.object,
    buttons: PropTypes.array,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
};